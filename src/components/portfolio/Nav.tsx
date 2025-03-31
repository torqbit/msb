import styles from '@/styles/Portfolio/Nav.module.css'
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
  return <nav className={`${styles.head} ${styles.nav}`}>
            <FullName firstname={firstName} lastname={lastName} />
            <NavLinks links={links} />
            <Contact contact={contact} />
         </nav>
}
const FullName :FC<{firstname:string, lastname:string}> = ({firstname , lastname}) => (
  <h1><b>{firstname}</b>  {lastname}</h1>
)
const NavLinks: FC<{links:Array<{
    name: string,
    href: string;
  }>}> = ({links}) => (
<ul className={styles.links}>
  {links.map(li => <li><a href={`#${li.href}`}>{li.name}</a></li>)}
</ul>)

const Contact: FC<{contact:{text: string, link: string}}> = ({contact}) =>{

    const getLogo = (link:string)=>{
        if (link.startsWith("tel+")){
            return "/images/phone";
        }if(link.startsWith("mailto")){
            return "/images/email"
        }else{
            return "/images/whatsapp"
        }    

    }
return  (
    <a href={contact.link} className={styles.icon}>
      <img src={getLogo(contact.link)} />
      <p>{contact.text}</p>
    </a>
  )
}