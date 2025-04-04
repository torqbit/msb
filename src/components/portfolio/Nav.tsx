import {FC} from "react";
type ContactType = "phone" | "email" | "whatsapp"

export type Contact = {
  text: string;
  type: ContactType;
  value: string;
};

type NavProps ={
  firstName: string;
  lastName: string;
  links: Array<{
    name: string,
    href: string;
  }>;
  contact:Contact
}

export const Nav : FC<NavProps> = ({firstName, lastName , links, contact}) => {
  return <nav className="w-[900px] h-[60px] bg-[#2b2b40] my-[50px] mx-auto rounded-[30px] flex px-[8px] pl-10 items-center justify-between ">
            <FullName firstname={firstName} lastname={lastName} />
            <NavLinks links={links} />
            <Contact contact={contact} />
        </nav>
}
const FullName :FC<{firstname:string, lastname:string}> = ({firstname , lastname}) => (
  <h1 className="text-[25px] ml-10 text-[rgba(189,212,207,0.87)] font-extralight"><b className="text-[25px] text-white font-medium">{firstname}</b>  {lastname}</h1>
)
const NavLinks: FC<{links:Array<{
    name: string,
    href: string;
  }>}> = ({links}) => (
<ul className="flex gap-[30px]">
  {links.map(li => <li><a className="text-[17px] text-[rgba(189,212,207,0.87)]" href={`#${li.href}`}>{li.name}</a></li>)}
</ul>)

const Contact: FC<{contact:Contact}> = ({contact}) =>{
  const getLink = (type: "phone" | "email" | "whatsapp", value: string): string => {
    switch (type) {
      case "phone":
        return `tel:${value}`;
      case "email":
        return `mailto:${value}`;
      case "whatsapp":
        return `https://wa.me/${value}`; // Make sure value is in international format like "919835735385"
      default:
        return "#";
    }
  };
  


    const getLogo = (link:string)=>{
        if (link.startsWith("tel:")){
            return "/images/phone.svg";
        }else if(link.startsWith("mailto:")){
            return "/images/email.svg"
        }else{
            return "/images/whatsapp.svg.svg"
        }    

    }
return  (
    <a href={getLink(contact.type, contact.value)} className="flex gap-2.5 py-[8px] px-[18px] bg-[rgb(71,71,177)] rounded-[26px] items-center">
      <img className="h-[20px]" src={getLogo(getLink(contact.type, contact.value))} />
      <p className="m-0 text-[18px] text-white font-normal">{contact.text}</p>
    </a>
  )
}