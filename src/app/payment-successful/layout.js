'use client';
import { BrowserRouter } from 'react-router-dom';

export default function Layout({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
