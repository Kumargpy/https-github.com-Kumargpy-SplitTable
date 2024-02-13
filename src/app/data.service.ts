// data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData(): Observable<any> {
    return of({
      fullHoldingReportList: {
        assetDtoList: [
          {
            "assetName": "Cash & Enhanced Cash",
            "fundDtoList": [
              {
                "fundName": "Putnam Ultra Short Duration Income Y"
              },
              {
                "fundName": "Fidelity Newbury Street Trust Treasury Fund"
              },
              {
                "fundName": "Fidelity Cash Reserves"
              },
              {
                "fundName": "FDIC Bank Deposit Sweep"
              },
              {
                "fundName": "Cash Pending Settlement"
              },
              {
                "fundName": "USD Settlement Cash"
              },
              {
                "fundName": "EUR Settlement Cash"
              }
            ]
          },
          {
            "assetName": "Fixed Income",
            "fundDtoList": [
              {
                "fundName": "Microvest Short Duration Fund"
              },
              {
                "fundName": "IR+M Intermediate Muni 1-10 Blend"
              },
              {
                "fundName": "UNITED STATES TREASURY BILLS 0% 14-SEP-2023"
              }
            ]
          },
          {
            "assetName": "US Equities",
            "fundDtoList": [
              {
                "fundName": "Aperio ESG Custom S&P 500 Screen1"
              },
              {
                "fundName": "Parametric TM KLD 400"
              },
              {
                "fundName": "Aperio Women's Inclusion (VAN100)"
              },
              {
                "fundName": "Trillium Large Cap Core"
              },
              {
                "fundName": "Trillium Small/Mid Cap Core"
              },
              {
                "fundName": "Ides Capital Partners, LP"
              },
              {
                "fundName": "Akre Focus Instl"
              },
              {
                "fundName": "Tesla, Inc.,"
              },
              {
                "fundName": "Microsoft Corporation"
              },
              {
                "fundName": "Danaher Corporation"
              },
              {
                "fundName": "Alphabet Inc., Class A Shares"
              },
              {
                "fundName": "Home Depot, Inc."
              },
              {
                "fundName": "Alphabet Inc., Class C Shares"
              },
              {
                "fundName": "General Mills, Inc."
              },
              {
                "fundName": "PepsiCo, Inc."
              },
              {
                "fundName": "340 Riverside Drive Corp New York"
              },
              {
                "fundName": "Versa Media Inc Delaware"
              }
            ]
          },
          {
            "assetName": "Int'l Equities",
            "fundDtoList": [
              {
                "fundName": "Generation IM Global Equity Fund, LLC"
              },
              {
                "fundName": "Parametric TM MSCI World Ex US ESG Leaders"
              },
              {
                "fundName": "Generation IM Asia Fund, LP"
              },
              {
                "fundName": "SolarEdge Technologies, INC"
              },
              {
                "fundName": "Himalaya Capital"
              },
              {
                "fundName": "Baron Emerging Markets Institutional"
              },
              {
                "fundName": "Dodge & Cox International Stock"
              }
            ]
          },
          {
            "assetName": "Hedge Funds",
            "fundDtoList": [
              {
                "fundName": "Farallon Capital F5 Investors II, L. P."
              },
              {
                "fundName": "CIM Enterprise Loan Fund"
              },
              {
                "fundName": "Bracebridge LP (FFIP)"
              },
              {
                "fundName": "Silver Point Capital Fund, L.P."
              },
              {
                "fundName": "One William Street Capital Partners, L.P."
              },
              {
                "fundName": "Third Point Partners Qualified LP"
              },
              {
                "fundName": "Altimeter Partners Fund, L.P."
              },
              {
                "fundName": "Hound Partners, LP"
              },
              {
                "fundName": "D.E. Shaw Composite"
              },
              {
                "fundName": "Luminus Energy Partners"
              },
              {
                "fundName": "Brookside Capital Partners Fund"
              }
            ]
          },
          {
            "assetName": "Real Estate",
            "fundDtoList": [
              {
                "fundName": "Rose Affordable Housing Preservation Fund V"
              },
              {
                "fundName": "Jonathan Rose BCD:A"
              },
              {
                "fundName": "Renewable Resource Group Sustainable Water Impact Fund"
              },
              {
                "fundName": "Artemis RE Partners Income and Growth Co-Invest Fund, L.P."
              },
              {
                "fundName": "Meadowlark Lands I"
              },
              {
                "fundName": "Drever 1401, LLC"
              },
              {
                "fundName": "Artemis Real Estate Partners Fund III"
              },
              {
                "fundName": "USLF II QP Partners, LP"
              },
              {
                "fundName": "SRE Opportunity Fund III, LP"
              },
              {
                "fundName": "Lightning Elm MPN, LLC"
              },
              {
                "fundName": "PF Lightening Club LLC"
              },
              {
                "fundName": "Carlyle Europe Real Estate Partners III, L.P."
              }
            ]
          },
          {
            "assetName": "Private Equity & Debt",
            "fundDtoList": [
              {
                "fundName": "Shared-X LLC (Series A & B)"
              },
              {
                "fundName": "DBL Equity Fund - BAEF II, L.P."
              },
              {
                "fundName": "DBL Partners III, L.P."
              },
              {
                "fundName": "SJF Ventures III"
              },
              {
                "fundName": "Banc Fund IX"
              },
              {
                "fundName": "Banc Fund X"
              },
              {
                "fundName": "SJF Ventures IV"
              },
              {
                "fundName": "OrganiCare Natures Science, LLC"
              },
              {
                "fundName": "Blackhorn Ventures Industrial Impact Fund, LP"
              },
              {
                "fundName": "Plum Alley Venture Fund"
              },
              {
                "fundName": "Builders Fund II LP"
              },
              {
                "fundName": "SJF Ventures V"
              },
              {
                "fundName": "Shared X Venture Debt"
              },
              {
                "fundName": "Blackhorn Ventures Industrial Impact Fund II, LP"
              },
              {
                "fundName": "Stafford Sustainable Capital Fund II, L.P."
              },
              {
                "fundName": "AiiM Partners Fund, LP"
              },
              {
                "fundName": "True Wealth Ventures Fund I, LP"
              },
              {
                "fundName": "Impact America Fund II LP"
              },
              {
                "fundName": "Good Growth Capital General Fund II"
              },
              {
                "fundName": "Chordata - Cooperative Fund of New England"
              },
              {
                "fundName": "Chordata - LEAF"
              },
              {
                "fundName": "SWEN Capital Blue Ocean Fund"
              },
              {
                "fundName": "Chordata - Seed Commons"
              },
              {
                "fundName": "Chordata - Community Vision"
              },
              {
                "fundName": "Chordata - Oweesta"
              },
              {
                "fundName": "Chordata - EB PREC"
              },
              {
                "fundName": "Plum Alley - Gameto Series A"
              },
              {
                "fundName": "Auransa Bridge Round"
              },
              {
                "fundName": "Closed Loop Ventures II"
              },
              {
                "fundName": "Chordata - Fair Food Fund"
              },
              {
                "fundName": "Capria Fund II, LP"
              },
              {
                "fundName": "City Light Impact Ventures IV, LP"
              },
              {
                "fundName": "Chordata - Sunwealth"
              },
              {
                "fundName": "Plum Alley - Ketos Series B-II"
              },
              {
                "fundName": "Plum Alley - Juvena Therapeutics"
              },
              {
                "fundName": "Plum Alley - Biobot"
              },
              {
                "fundName": "True Wealth Ventures Fund II LP"
              },
              {
                "fundName": "Posigen, Inc."
              },
              {
                "fundName": "Plum Alley - AiFi Inc"
              },
              {
                "fundName": "Plum Alley - ARIX Technologies"
              },
              {
                "fundName": "Plum Alley Open Water Internet Inc."
              },
              {
                "fundName": "Plum Alley - Helaina Series A"
              },
              {
                "fundName": "City Spark 3.0, LP"
              },
              {
                "fundName": "Chordata - Real Peoples Fund"
              },
              {
                "fundName": "NWC Investment Partnership V, L.P."
              },
              {
                "fundName": "RPI US Partners 2019, LP (Royalty Pharma)"
              },
              {
                "fundName": "Streamlined Ventures II, LP"
              },
              {
                "fundName": "Mill Point Capital Partners, LP"
              },
              {
                "fundName": "Portfolio Advisors Secondary Fund IV, LP"
              },
              {
                "fundName": "Strategic Value Special Situations Fn V"
              },
              {
                "fundName": "Oaktree Emerging Markets Opportunities Fund II"
              },
              {
                "fundName": "Clayton, Dubilier & Rice Fund XI, L.P."
              },
              {
                "fundName": "LS Polaris Innovation Fund, L.P."
              },
              {
                "fundName": "Akkadian Ventures V, LP"
              },
              {
                "fundName": "Primavera Capital Fund III LP"
              },
              {
                "fundName": "Great Hill Equity Partners VII, L.P."
              },
              {
                "fundName": "Stepstone VC Opportunities VI, L.P"
              },
              {
                "fundName": "Stepstone VC Opportunities V, L.P."
              },
              {
                "fundName": "Peloton Equity II, LP"
              },
              {
                "fundName": "Diligent Robotics, Inc."
              },
              {
                "fundName": "11.2 Capital Fund II, L.P."
              },
              {
                "fundName": "Sixth Street Opportunities Partners IV, L.P."
              },
              {
                "fundName": "Syndicate XXI AiFi"
              },
              {
                "fundName": "Mammoth Biosciences"
              },
              {
                "fundName": "Keiretsu Capital Blockchain Fund of Funds II, LP"
              },
              {
                "fundName": "Ashvattha"
              },
              {
                "fundName": "EpiBone, Inc."
              },
              {
                "fundName": "One Concern"
              },
              {
                "fundName": "Oaktree Opportunities Fund VIIIb, L.P."
              },
              {
                "fundName": "Sixth Street Opportunities Partners V, L.P."
              },
              {
                "fundName": "Streamlined Ventures IV, L.P."
              },
              {
                "fundName": "Great Hill Equity Partners VIII, LP"
              },
              {
                "fundName": "WCG Sill Investors LLC"
              },
              {
                "fundName": "Bitwise"
              },
              {
                "fundName": "Air Protein"
              },
              {
                "fundName": "Mammoth Biosciences Series D"
              },
              {
                "fundName": "StepStone VC Opportunities VII, L.P."
              },
              {
                "fundName": "Oaktree Opportunities Fund VIII, L.P."
              },
              {
                "fundName": "Clayton Dubilier & Rice Fd XII"
              },
              {
                "fundName": "Energy Capital Partners II, LP"
              },
              {
                "fundName": "Nth Power Fund IV"
              }
            ]
          },
          {
            "assetName": "Commodities",
            "fundDtoList": [
              {
                "fundName": "Clear Sky Enhanced Inflation Carbon Fund LP"
              },
              {
                "fundName": "Wellington DIH II"
              }
            ]
          }
          // Rest of the JSON data goes here...
        ],
        assetGrandTotal: 112.27,
      },
    });
  }
}
