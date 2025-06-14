// data/newspaperImages.ts

export interface ImageItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  date: string;
}

export const newspaperImages: ImageItem[] = [
  {
    src: "/news/1.jpg",
    alt: "JMD Case Summon",
    title: "Court Summons SFIO Officer in JMD Case",
    category: "Legal Proceedings",
    date: "2025",
  },
  {
    src: "/news/2.jpg",
    alt: "Supreme Court Appeal",
    title: "Pradeep Nirala to Seek Supreme Court Intervention for Fair Probe",
    category: "Legal Appeal",
    date: "2025",
  },
  {
    src: "/news/3.png",
    alt: "Unauthorized Commercial Use",
    title: "Action Against Commercial Use of Plots in Sushant Lok",
    category: "Urban Regulation",
    date: "2018",
  },
  {
    src: "/news/4.png",
    alt: "Megapolis Scam Investigation",
    title: "Inquiry Ordered in Megapolis Scam",
    category: "Financial Fraud",
    date: "2025",
  },
  {
    src: "/news/5.png",
    alt: "Gymkhana Ground Dispute",
    title: "Lawyer Approaches NGT in Gymkhana Ground Dispute",
    category: "Environmental Law",
    date: "2017",
  },
  {
    src: "/news/6.jpg",
    alt: "EWS Plot Allotment Scam",
    title: "EWS Plot Allotment Scam in Sushant Lok",
    category: "Real Estate Fraud",
    date: "2025",
  },
  {
    src: "/news/7.jpg",
    alt: "Builder Favor Allegation",
    title: "Vigilance Probe into Alleged Favors to Builder on DTPE & STP",
    category: "Vigilance Inquiry",
    date: "2018",
  },
  {
    src: "/news/8.jpg",
    alt: "Fee Dispute",
    title: "Dispute Arises Over Refusal to Pay Fees",
    category: "Legal Dispute",
    date: "2024",
  },
//   {
//     src: "/news/9.jpg",
//     alt: "Groundwater Exploitation",
//     title: "NGT Orders Probe into Groundwater Exploitation",
//     category: "Environmental Law",
//     date: "2025",
//   },
//   {
//     src: "/news/10.jpg",
//     alt: "RWA Protest Against Builder",
//     title: "RWAs Protest Against Unjust Recovery by Builder",
//     category: "Consumer Rights",
//     date: "2025",
//   },
];
