import { FC } from "react";

type ContactType = "phone" | "email" | "whatsapp";

export type Contact = {
  text: string;
  type: ContactType;
  value: string;
};

type NavProps = {
  firstName: string;
  lastName: string;
  links: Array<{
    name: string;
    href: string;
  }>;
  contact: Contact;
};

export const Nav: FC<NavProps> = ({ firstName, lastName, links, contact }) => {
  return (
    <>
      <div className="hidden min-[431px]:flex w-[900px] h-[60px] bg-[#2b2b40] my-[50px] mx-auto rounded-[30px] px-[8px] pl-10 items-center justify-between">
        <FullName firstname={firstName} lastname={lastName} />
        <NavLinks links={links} />
        <Contact contact={contact} />
      </div>

      <div className="flex min-[431px]:hidden h-[60px] flex gap-4 w-auto px-4 py-5 bg-[#2b2b40] my-[50px] mx-[10px] rounded-[30px] items-center justify-between">
        <FullName firstname={firstName} lastname={lastName} />
        <NavLinks links={links} />
        <Contact contact={contact} />
      </div>
    </>
  );
};

const FullName: FC<{ firstname: string; lastname: string }> = ({
  firstname,
  lastname,
}) => (
  <h1 className="text-[20px] min-[431px]:text-[25px] ml-4 min-[431px]:ml-10 text-[rgba(189,212,207,0.87)] font-extralight">
    <b className="text-white font-medium">{firstname}</b> {lastname}
  </h1>
);

const NavLinks: FC<{
  links: Array<{
    name: string;
    href: string;
  }>;
}> = ({ links }) => (
  <ul className="hidden min-[431px]:flex gap-[15px] min-[431px]:gap-[30px]">
    {links.map((li, index) => (
      <li key={index}>
        <a
          className="text-[16px] min-[431px]:text-[17px] text-[rgba(189,212,207,0.87)]"
          href={`#${li.href}`}
        >
          {li.name}
        </a>
      </li>
    ))}
  </ul>
);

const Contact: FC<{ contact: Contact }> = ({ contact }) => {
  const getLink = (type: ContactType, value: string): string => {
    switch (type) {
      case "phone":
        return `tel:${value}`;
      case "email":
        return `mailto:${value}`;
      case "whatsapp":
        return `https://wa.me/${value}`;
      default:
        return "#";
    }
  };

  const getLogo = (link: string) => {
    if (link.startsWith("tel:")) {
      return "/images/phone.svg";
    } else if (link.startsWith("mailto:")) {
      return "/images/email.svg";
    } else {
      return "/images/whatsapp.svg";
    }
  };

  const link = getLink(contact.type, contact.value);
  const logo = getLogo(link);

  return (
    <a
      href={link}
      className="flex gap-2 py-2 px-4 min-[431px]:px-[18px] min-[431px]:py-[8px] bg-[rgb(71,71,177)] rounded-[20px] min-[431px]:rounded-[26px] items-center"
    >
      <img className="h-[18px] min-[431px]:h-[20px]" src={logo} alt="contact" />
      <p className="m-0 text-[16px] min-[431px]:text-[18px] text-white font-normal">
        {contact.text}
      </p>
    </a>
  );
};
