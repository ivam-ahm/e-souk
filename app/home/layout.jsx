import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function homeLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
