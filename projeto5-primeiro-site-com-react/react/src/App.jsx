import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <Sobre />
        <Contato />
      </main>

      <Footer />
    </>
  );
}

export default App;