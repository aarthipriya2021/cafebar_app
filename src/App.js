import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import About from "./components/About";
import Product from "./components/Product";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>
        <div id="menu">
          <Menu />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="products">
          <Product />
        </div>
        <div id="review">
          <Review />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
