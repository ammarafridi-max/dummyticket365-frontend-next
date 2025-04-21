'use client';
import BookingLayout from '@/_components/BookingLayout';
import { BrowserRouter, Router, Routes } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <BrowserRouter>
      <BookingLayout>{children}</BookingLayout>
    </BrowserRouter>
  );
}
