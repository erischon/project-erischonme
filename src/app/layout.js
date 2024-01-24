import "./globals.css";

export const metadata = {
  title: "Eri Schön",
  description: "Data Analyst",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
