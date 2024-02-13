import {
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  @ViewChild('pageWrapper') pageWrapper: ElementRef;
  fullHoldingReportList: any; // Assuming you have data fetched and assigned here
  pages: any[] = [];
  currentPageIndex = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchData();
    this.splitPages();
  }
  ngAfterViewInit() {
    this.adjustPageContent();
  }
  fetchData() {
    this.dataService.getData().subscribe((data) => {
      this.fullHoldingReportList = data.fullHoldingReportList;
    });
  }
  splitPages() {
    const PAGE_HEIGHT = 970;
    const ASSET_ROW_HEIGHT = 40; // Assuming each asset row is 40px in height
    const FUND_ROW_HEIGHT = 24; // Assuming each fund row is 20px in height

    this.pages = [];
    let currentPage: any = { assetDtoList: [] };
    let currentPageHeight = 0;

    for (const asset of this.fullHoldingReportList.assetDtoList) {
      const assetHeight =
        ASSET_ROW_HEIGHT + asset.fundDtoList.length * FUND_ROW_HEIGHT;

      if (currentPageHeight + assetHeight > PAGE_HEIGHT) {
        this.pages.push(currentPage);
        currentPage = { assetDtoList: [] };
        currentPageHeight = 0;
      }

      let remainingFundDtoList = asset.fundDtoList;
      let assetForCurrentPage = { ...asset };
      while (remainingFundDtoList.length > 0) {
        const remainingHeight =
          PAGE_HEIGHT - currentPageHeight - ASSET_ROW_HEIGHT;
        const fundsToDisplay = Math.floor(remainingHeight / FUND_ROW_HEIGHT);
        const displayedFunds = remainingFundDtoList.slice(0, fundsToDisplay);
        remainingFundDtoList = remainingFundDtoList.slice(fundsToDisplay);

        assetForCurrentPage.fundDtoList = displayedFunds;
        currentPage.assetDtoList.push(assetForCurrentPage);
        currentPageHeight += assetHeight;

        if (currentPageHeight >= PAGE_HEIGHT) {
          this.pages.push(currentPage);
          currentPage = { assetDtoList: [] };
          currentPageHeight = 0;

          // Check if there are remaining funds to display on a new page
          if (remainingFundDtoList.length > 0) {
            currentPage.assetDtoList.push({
              assetName: asset.assetName,
              fundDtoList: [],
            });
            currentPageHeight += ASSET_ROW_HEIGHT;
          }
        }

        assetForCurrentPage = { assetName: '', fundDtoList: [] }; // Reset asset for next page
      }
    }

    if (currentPage.assetDtoList.length > 0) {
      this.pages.push(currentPage);
    }
  }
  adjustPageContent() {
    const pageWrapperHeight = this.pageWrapper.nativeElement.clientHeight;

    if (pageWrapperHeight > 970) {
      // Adjust page content or move elements to new pages if necessary
      // You can implement this logic as per your requirement
    }
  }

  moveToNewPage(element: HTMLElement) {
    const newPage = { assetDtoList: [] };
    newPage.assetDtoList.push(...element.dataset.assetDtoList.split(','));
    this.pages.splice(this.currentPageIndex + 1, 0, newPage);
    this.currentPageIndex++;
  }

  createNewPage() {
    const newPage = { assetDtoList: [] };
    this.pages.splice(this.currentPageIndex + 1, 0, newPage);
    this.currentPageIndex++;
  }
}
