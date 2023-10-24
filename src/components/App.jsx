import chevronDown from '../img/header/chevronDown.svg';
import healthyHub from '../img/ressume/healthyHub.png';
import projectAvto from '../img/ressume/projectAvto.png';
export const App = () => {
  return (
    <div>
      <header className="header">
        <h1 className="headerTitle">Marii Semenencko</h1>
        <p className="headerSubtitle">
          Front-end Developer (Java Script / HTML / CSS / React / Node.js)
        </p>
        <p className="headerSubtitle">https://github.com/MariySemenenko</p>
        <a href="#ressume">
          <img className="chevronDown" src={chevronDown} alt="Arrow up" />
        </a>
      </header>
      <main>
        <section className="portfolio" id="ressume">
          <div className="container">
            <h2 className="portfolioRessume">My Summary</h2>
            <ul className="cardList">
              <li className="card">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                  href="https://enital.github.io/healthy_hub/"
                >
                  <img className="cardImg" src={healthyHub} alt="" />
                  <h3 className="cardTitle">Healthy Hub</h3>
                  <p>[React, Redux, Node.js, Rest API]</p>
                  <p>
                    This site will help support a healthy lifestyle. You will
                    remember to drink water on time and eat only healthy food.
                    The site was created as a team project of the developer of
                    the FullStack course.
                  </p>
                </a>
              </li>
              <li className="card">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                  href="https://mariysemenenko.github.io/project_avto/"
                >
                  <img className="cardImg" src={projectAvto} alt="" />
                  <h3 className="cardTitle">Project_avto</h3>
                  <p>
                    [React, Redux, HTML, CSS, styled-components, redux-toolkit]
                  </p>
                  <p>
                    Project_avto is a convenient program designed for companies
                    offering car rental services. It is possible to choose any
                    brand of car and search by various parameters.
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};
