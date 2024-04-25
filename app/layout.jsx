import Path from "@/components/Path";
import "./globals.css";

export const metadata = {
  title: "E-souk",
  description: "best ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
