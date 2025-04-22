'use client';
import BookingLayout from '@/components/BookingLayout';
import { BrowserRouter } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <BrowserRouter>
      <BookingLayout>{children}</BookingLayout>
    </BrowserRouter>
  );
}
