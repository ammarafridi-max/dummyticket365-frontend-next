"use client"
import { Provider } from 'react-redux';
import Navigation from './Navigation';
import Footer from './Footer';
import MobileNavigation from './MobileNavigation';
import store from '@/_redux/store';

export default function Layout({children}) {
  return (
    <Provider store={store}>
      <Navigation />
      <MobileNavigation />
      {children}
      <Footer />
    </Provider>
  );
}
