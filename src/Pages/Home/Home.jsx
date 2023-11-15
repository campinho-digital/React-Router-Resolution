import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <Link to="/info">Ir para infos</Link>
      <Footer />
    </div>
  );
};

export default Home;
