import Logo from "../images/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Header Icon" className="header--icon" />
      <h1 className="header--title">Meme Generator</h1>
      <p className="header--title_text">React Course - Project 3</p>
    </header>
  )
}

export default Header;