import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";

export const footerData = {
  companyInfo: {
    logo: "/ACUMEN.png",
    description: "Crafting beautiful and functional products since 2024.",
  },
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "#about-us" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact-us" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Support", href: "#" },
    { label: "FAQs", href: "#" },
  ],
  contactInfo: [
    { icon: PhoneIcon, text: "+1 (555) 555-5555" },
    { icon: MailIcon, text: "support@acumen.com" },
    { icon: LocateIcon, text: "123 Main St, Anytown USA" },
  ],
  footerLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
