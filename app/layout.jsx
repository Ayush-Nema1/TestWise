// app/layout.jsx

import "./globals.css";

export const metadata = {
  title: "TestWise",
  description: "Compare medicine prices & health tests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}