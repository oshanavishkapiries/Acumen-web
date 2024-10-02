//import Image from "next/image";
import Link from "next/link";

// Data import
import { footerData } from "@/data/FooterLinkData";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-DarkBlue text-white px-5 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto">

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:p-5">
        <div className="flex flex-col items-start gap-2">
          <Link href="/" prefetch={false}>
            <Image
              src="/img/logo.png"
              alt="logo"
              width={150}
              height={60}
              className=" "
            />
        
          </Link>
          <p className="text-muted-foreground text-sm">
            {footerData.companyInfo.description}
          </p>
        </div>

        <FooterSection title="Quick Links" links={footerData.quickLinks} />
        <FooterSection title="Resources" links={footerData.resources} />

        <div className="flex flex-col items-start">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-2">
            {footerData.contactInfo.map(({ icon: Icon, text }, index) => (
              <ContactItem key={index} icon={Icon} text={text} />
            ))}
          </div>
        </div>
      </div>

      <div className=" mt-8 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row items-center justify-between md:p-5">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          {footerData.footerLinks.map(({ label, href }, index) => (
            <FooterLink key={index} text={label} href={href} />
          ))}
        </div>
      </div>
      </div>
    </footer>
  );
};

const FooterSection: React.FC<{
  title: string;
  links: { label: string; href: string }[];
}> = ({ title, links }) => (
  <div className="flex flex-col items-start">
    <h4 className="text-lg font-semibold mb-4">{title}</h4>
    <nav className="space-y-2 flex flex-col">
      {links.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className="text-sm hover:underline"
          prefetch={false}
        >
          {label}
        </Link>
      ))}
    </nav>
  </div>
);

const ContactItem: React.FC<{ icon: React.ElementType; text: string }> = ({
  icon: Icon,
  text,
}) => (
  <div className="flex items-center space-x-2 space-y-2">
    <Icon className="w-5 h-5 text-muted-foreground" />
    <span className="text-sm">{text}</span>
  </div>
);

const FooterLink: React.FC<{ text: string; href: string }> = ({
  text,
  href,
}) => (
  <Link href={href} className="text-sm hover:underline" prefetch={false}>
    {text}
  </Link>
);

export default Footer;
