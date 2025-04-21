import Navigation from './Navigation';
import Footer from './Footer';
import MobileNavigation from './MobileNavigation';

export default function Layout({children}) {
  return (
    <>
      <Navigation />
      <MobileNavigation />
      {children}
      <Footer />
    </>
  );
}
