import './main.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Banner } from './components/Banner/Banner';
import { Stock } from './components/Stock/Stock';
import { Popular } from './components/Popular/Popular';
import { Favorite } from './components/Favorite/Favorite';
import { Brands } from './components/Brands/Brands';
import { Reviews } from './components/Reviews/Reviews';
import { About } from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Banner />
        <Stock />
        <Popular />
        <Favorite />
        <Brands />
        <Reviews />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
