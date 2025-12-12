// app/layout.tsx
import './globals.css';
import { ThemeProvider } from 'next-themes';
import App from './page';

export const metadata = {
  title: 'Felipe De Paula',
  description: 'Portófio Felipe De Paula',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
         <App/>
        </ThemeProvider>
      </body>
    </html>
  );
}
