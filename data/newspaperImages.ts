// data/newspaperImages.ts

export interface ImageItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  date: string;
  description : string;
}

export const newspaperImages: ImageItem[] = [
  {
    src: "/news/1.jpg",
    alt: "JMD Case Summon",
    title: "Court Summons SFIO Officer in JMD Case",
    category: "Legal Proceedings",
    date: "2025",
    description: "The court has summoned an SFIO officer in connection with the JMD case."
  },
  {
    src: "/news/2.jpg",
    alt: "Supreme Court Appeal",
    title: "Pradeep Nirala to Seek Supreme Court Intervention for Fair Probe",
    category: "Legal Appeal",
    date: "2025",
    description: "Advocate Pradeep Nirala plans to approach the Supreme Court for a fair investigation."
  },
  {
    src: "/news/3.png",
    alt: "Unauthorized Commercial Use",
    title: "Action Against Commercial Use of Plots in Sushant Lok",
    category: "Urban Regulation",
    date: "2018",
    description: "Authorities initiate action against illegal commercial use of residential plots in Sushant Lok."
  },
  {
    src: "/news/4.png",
    alt: "Megapolis Scam Investigation",
    title: "Inquiry Ordered in Megapolis Scam",
    category: "Financial Fraud",
    date: "2025",
    description: "An official inquiry has been ordered into the high-profile Megapolis real estate scam."
  },
  {
    src: "/news/5.png",
    alt: "Gymkhana Ground Dispute",
    title: "Lawyer Approaches NGT in Gymkhana Ground Dispute",
    category: "Environmental Law",
    date: "2017",
    description: "A lawyer has petitioned the NGT over environmental concerns related to Gymkhana Ground."
  },
  {
    src: "/news/6.jpg",
    alt: "EWS Plot Allotment Scam",
    title: "EWS Plot Allotment Scam in Sushant Lok",
    category: "Real Estate Fraud",
    date: "2025",
    description: "Scam surfaces involving fraudulent allotment of EWS plots in Sushant Lok."
  },
  {
    src: "/news/7.jpg",
    alt: "Builder Favor Allegation",
    title: "Vigilance Probe into Alleged Favors to Builder on DTPE & STP",
    category: "Vigilance Inquiry",
    date: "2018",
    description: "Vigilance department investigates allegations of undue favors to a builder regarding DTPE and STP."
  },
  {
    src: "/news/8.jpg",
    alt: "Fee Dispute",
    title: "Dispute Arises Over Refusal to Pay Fees",
    category: "Legal Dispute",
    date: "2024",
    description: "A legal dispute emerges over a party's refusal to pay agreed professional fees."
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
