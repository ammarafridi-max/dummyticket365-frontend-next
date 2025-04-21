import './globals.css';
import '@fontsource-variable/nunito';
import Layout from '@/_components/Layout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
