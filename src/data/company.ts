export interface CompanyInfo {
  name: string;
  tagline: string;
  subheadline: string;
  description: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    country: string;
    full: string;
  };
  businessHours: string;
  guaranteeYears: number;
}

export const companyData: CompanyInfo = {
  name: "Matshepo Africa Ltd",
  tagline: "Stronger Bonds. Lasting Protection.",
  subheadline: "Advanced Construction Chemicals for Stronger, More Durable Buildings.",
  description:
    "Matshepo Africa Ltd is a premier construction chemicals manufacturer based in Nairobi, Kenya, providing proven solutions for tile installation, waterproofing, grouting, plastering, and flooring applications.",
  phone: "0757 775 555",
  phoneRaw: "+254757775555",
  email: "simba@matshepo.com",
  address: {
    line1: "Athi SS Business Park, Godown 53",
    line2: "Mlolongo, Athi River",
    city: "Nairobi",
    country: "Kenya",
    full: "Athi SS Business Park, Godown 53, Mlolongo, Athi River, Nairobi, Kenya",
  },
  businessHours: "Monday – Friday: 8:00 AM – 5:00 PM | Saturday: 8:30 AM – 1:00 PM",
  guaranteeYears: 10,
};
