import {FC} from "react";

type NavProps ={
  firstName: string;
  lastName: string;
  links: Array<{
    name: string,
    href: string;
  }>;
  contact:{text: string, link: string}
}

export const Nav : FC<NavProps> = ({firstName, lastName , links, contact}) => {
  return <nav className="w-[900px] h-[60px] bg-[#2b2b40] my-[50px] mx-auto rounded-[30px] flex px-[8px] pl-10 items-center justify-between ">
            <FullName firstname={firstName} lastname={lastName} />
            <NavLinks links={links} />
            <Contact contact={contact} />
        </nav>
}
const FullName :FC<{firstname:string, lastname:string}> = ({firstname , lastname}) => (
  <h1 className="text-[20px] ml-10 text-[rgba(189,212,207,0.87)] font-extralight"><b className="text-[20px] text-white font-medium">{firstname}</b>  {lastname}</h1>
)
const NavLinks: FC<{links:Array<{
    name: string,
    href: string;
  }>}> = ({links}) => (
<ul className="flex gap-[30px]">
  {links.map(li => <li><a className="text-[17px] text-[rgba(189,212,207,0.87)]" href={`#${li.href}`}>{li.name}</a></li>)}
</ul>)

const Contact: FC<{contact:{text: string, link: string}}> = ({contact}) =>{

    const getLogo = (link:string)=>{
        if (link.startsWith("tel:")){
            return "/images/phone.svg";
        }else if(link.startsWith("mailto")){
            return "/images/email"
        }else{
            return "/images/whatsapp"
        }    

    }
return  (
    <a href={contact.link} className="flex gap-2.5 py-[8px] px-[18px] bg-[rgb(71,71,177)] rounded-[26px] items-center">
      <img className="h-[20px]" src={getLogo(contact.link)} />
      <p className="m-0 text-[18px] text-white font-normal">{contact.text}</p>
    </a>
  )
}