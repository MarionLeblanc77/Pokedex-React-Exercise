import './header.scss';
import logo from '../../../assets/pokemon_logo.svg.png';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo Pokemon" />
      <h1 className="header__title">Finder</h1>
    </header>
  );
}

export default Header;
