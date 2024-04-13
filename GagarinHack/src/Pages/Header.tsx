import "../Pages_css/Header.css";

function Header() {
  return (
    <div className="HeaderBackground">
      <div className="IconPlusText">
        <img src="src/Icons/logo.png" alt="logo" className="LogoHeaderIcon" />
        <img src="src/Icons/Student.png" alt="" className="LogoHeaderText" />
      </div>
      <div className='Search'>
        <img src="src/Icons/search.png" alt="" />
      </div>
    </div>
  );
}

export default Header;
