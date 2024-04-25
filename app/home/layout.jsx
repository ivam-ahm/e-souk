import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Path from "@/components/Path";

export default function homeLayout({ children }) {
  return (
    <div>
      <Header />
      <Path />
      {children}
      <Footer />
    </div>
  );
}
