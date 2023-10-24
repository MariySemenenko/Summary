import chevronDown from '../img/header/chevronDown.svg'



export const App = () => {
  return (
    <div>
       <header className="header">
      <h1 className='headerTitle'>Marii Semenencko</h1>
        <p className="headerSubtitle">
          Front-end Developer (Java Script / HTML / CSS / React / Node.js)
        </p>
        <p className="headerSubtitle">https://github.com/MariySemenenko</p>
        <a href="#Ressume" class="header-arrow">
         
          <img className='chevronDown' src={chevronDown} alt="Arrow up" />
        </a>
        </header>
    </div>
  );
};
