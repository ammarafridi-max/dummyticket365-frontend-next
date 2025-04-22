import './globals.css';
import '@fontsource-variable/nunito';
import Layout from '@/components/Layout';
import { StyledComponentsRegistry } from '@/lib/registry';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
