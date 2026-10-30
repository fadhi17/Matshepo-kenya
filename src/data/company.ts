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
  vision: string;
  mission: string;
}

export const companyData: CompanyInfo = {
  name: "Matshepo Africa Ltd",
  tagline: "Some Bonds are Forever",
  subheadline: "Advanced Construction Chemicals for Stronger, More Durable Buildings.",
  description:
    "Matshepo Africa Ltd is a premier construction chemicals manufacturer based in Nairobi, Kenya, providing proven solutions for tile installation, waterproofing, grouting, plastering, and flooring systems.",
  phone: "0757 775 555",
  phoneRaw: "+254757775555",
  email: "simba@matshepo.com",
  address: {
    line1: "Athi 55 Business Park, Godown 53",
    line2: "Mlolongo, Athi River",
    city: "Nairobi",
    country: "Kenya",
    full: "Athi 55 Business Park, Godown 53, Mlolongo, Athi River, Nairobi, Kenya",
  },
  businessHours: "Monday – Friday: 8:00 AM – 5:00 PM | Saturday: 8:30 AM – 1:00 PM",
  guaranteeYears: 10,
  vision:
    "To build a stronger, more prosperous Africa through sustainable manufacturing, innovation and industrial growth—creating opportunities, empowering communities and shaping a better future for generations to come.",
  mission:
    "To manufacture high-quality, innovative and sustainable construction chemical solutions that strengthen the built environment, create meaningful employment, develop local talent and contribute to economic growth across Africa. Through responsible manufacturing, continuous innovation and strategic partnerships, we aim to build a competitive African industry that creates lasting value for our customers, employees and communities.",
};
