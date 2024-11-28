import Features from "remoteApp/Features";
import Footer from "remoteApp/Footer";
import Header from "remoteApp/Header";
import "./App.css";
import CallToAction from "./components/CallToAction";
import Faq from "./components/FAQ";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Header />
      <Pricing />
      <CallToAction />
      <Features />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
