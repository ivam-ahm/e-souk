import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";

const adminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default adminLayout;
