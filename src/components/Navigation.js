import logo from '../assets/images/logo-long.png';
import styles from '../_styles/navigation.module.css';
import Container from '../components/Container';
import Image from 'next/image';

export const pages = [
  { name: 'Book Now', link: '/#form' },
  { name: 'Process', link: '/#process' },
  { name: 'About', link: '/#about' },
  { name: 'FAQ', link: '#faq' },
  { name: 'Contact', link: 'mailto:info@dummyticket365.com' },
];

export default function Navigation() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <LogoContainer />
          <NavLinks />
        </nav>
      </Container>
    </header>
  );
}

function LogoContainer() {
  return (
    <div className={styles.logo}>
      <a href="/">
        <Image
          src={logo}
          alt="Dummy Ticket 365 Logo"
          title="Dummy Ticket 365 Logo"
        />
      </a>
    </div>
  );
}

function NavLinks() {
  return (
    <div className={styles.navLinks}>
      {pages.map((page, i) => (
        <a
          className={styles.navLink}
          key={i}
          href={page.link}
          title={page.name}
        >
          {page.name}
        </a>
      ))}
    </div>
  );
}

// const Header = styled.header`
//   background-color: transparent;
//   box-shadow: 0px 0px 20px 0px rgba(200, 200, 200, 1);
//   -moz-box-shadow: 0px 0px 20px 0px rgba(200, 200, 200, 1);
//   -webkit-box-shadow: 0px 0px 20px 0px rgba(200, 200, 200, 1);
//   @media only screen and (max-width: 991px) {
//     display: none;
//   }
// `;

// const LogoDiv = styled.div`
//   width: 25%;
//   padding: 0;
//   height: 70px;
//   & img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
// `

// const Nav = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 7.5px 0;
// `;

// const StyledNavLinks = styled.div`
//   width: auto;
//   height: 70px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const StyledNavLink = styled.a`
//   font-size: 14px;
//   font-weight: 700;
//   color: var(--grey-color-600);
//   text-transform: uppercase;
//   padding: 10px 5px;
//   margin-right: 15px;
//   transition-duration: 0.3s;
//   &:hover {
//     color: var(--primary-color-500);
//   }
// `;
