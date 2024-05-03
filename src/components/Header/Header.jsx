import './Header.scss';

function Header() {
  return (
    <header className="header container">
      <div className="header__logo">
        <a href="https://github.com/frontend200tb" target="_blank">frontend200tb</a>
      </div>
      <div className="header__logo">
        <a href="https://frontend200tb.github.io/200tb/dist/" target="_blank">frontend</a>
      </div>
    </header>
  )
}

export default Header;