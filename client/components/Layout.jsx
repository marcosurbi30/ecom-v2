import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
