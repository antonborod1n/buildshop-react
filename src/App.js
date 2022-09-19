import './main.scss';
import { Routes, Route } from "react-router-dom";
//Components
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
//Pages
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';
import { Catalog } from './pages/Catalog';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/catalog' element={<Catalog />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
