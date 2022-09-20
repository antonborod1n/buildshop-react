import './main.scss';
import { Routes, Route } from "react-router-dom";
//Components
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
//Pages
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';
import { Category } from './pages/Category';
import { Catalog } from './pages/Catalog';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<Category />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
