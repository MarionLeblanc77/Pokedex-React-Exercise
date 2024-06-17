import './App.scss';
import Gallery from './Gallery/gallery';
import Search from './Search/search';
import Header from './Header/header';
import Footer from './Footer/footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
