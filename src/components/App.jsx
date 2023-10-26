import chevronDown from '../img/header/chevronDown.svg';
import healthy from '../img/ressume/healthy.png';
import projectAvto from '../img/ressume/projectAvto.png';
import book from '../img/ressume/book.png';
import iceCream from '../img/ressume/iceCream.png';
import movies from '../img/ressume/movies.png';
import images from '../img/ressume/images.png';
import phonebook from '../img/ressume/phonebook.png';
import studio from '../img/ressume/studio.png';
import clock from '../img/ressume/clock.png';
import linkedin from '../img/footer/linkedin.svg';
import github from '../img/footer/github.svg';
import telegram from '../img/footer/telegram.svg';

export const App = () => {
  return (
    <>
      <header className="header">
       
        <h1 className="headerTitle">Marii Semenencko</h1>
        <p className="headerSubtitle">
          Front-end backend Developer (Java Script / HTML / CSS / React /
          Node.js)
        </p>
        <a className="githubLink" href="https://github.com/MariySemenenko">
          https://github.com/MariySemenenko
        </a>
     
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
                  <img className="cardImg" src={healthy} alt="" />
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

              <li className="card">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                  href="https://aggenov.github.io/bookshelf/"
                >
                  <img className="cardImg" src={book} alt="" />
                  <h3 className="cardTitle">Bookshelf</h3>
                  <p>[HTML, CSS, JS, Fetch API, Parcel]</p>
                  <p>
                    Bookshelf is a website for managing and tracking the books
                    in your collection. You can add, edit, and delete books,
                    mark them as read or unread, and search for books by various
                    criteria, such as author, genre, or title.
                  </p>
                </a>
              </li>

              <li className="card">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                  href="https://aggenov.github.io/ice-cream/"
                >
                  <img className="cardImg" src={iceCream} alt="" />
                  <h3 className="cardTitle">Ice-cream</h3>
                  <p>[HTML, CSS, JS, Parcel]</p>
                  <p>
                    "Ice-Cream" is an online store for buying fresh and
                    delicious ice cream. The store offers a wide selection of
                    different flavors and types of ice cream, which can be
                    ordered in a convenient way for you and delivered to your
                    home.
                  </p>
                </a>
              </li>

              <li className="card">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                  href="https://mariysemenenko.github.io/goit-react-hw-05-movies/"
                >
                  <img className="cardImg" src={movies} alt="" />
                  <h3 className="cardTitle">Movies</h3>
                  <p>
                    [HTML, CSS, JS, Parcel, Axios, React-dom, React-router-dom]
                  </p>
                  <p>
                    This is a movie search and selection website. You can search
                    for movies by title. The site provides information about
                    movies, including reviews, ratings, and trailers.
                  </p>
                </a>
              </li>

              <li className="card">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                  href="https://mariysemenenko.github.io/goit-react-hw-03-image-finder/"
                >
                  <img className="cardImg" src={images} alt="" />
                  <h3 className="cardTitle">Image-finder</h3>
                  <p>[HTML, CSS, JS, Parcel, Axios, React-dom]</p>
                  <p>
                    "Image Finder" is a website for searching and viewing a
                    large collection of images. You can search for images by
                    keywords and view them, as well as download and use them for
                    various purposes.
                  </p>
                </a>
              </li>

              <li className="card">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                  href="https://mariysemenenko.github.io/goit-react-hw-008-phonebook/"
                >
                  <img className="cardImg" src={phonebook} alt="" />
                  <h3 className="cardTitle">Phonebook</h3>
                  <p>
                    [HTML, CSS, JS, Parcel, Axios, React-dom, React-router-dom,
                    Redux]
                  </p>
                  <p>
                    "Phonebook" is an online application for saving and managing
                    your list of contacts and phone numbers. You can add, edit
                    and delete contacts, specify their names and phone numbers.
                  </p>
                </a>
              </li>

              <li className="card">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                  href="https://mariysemenenko.github.io/goit-markup-hw-07/index.html"
                >
                  <img className="cardImg" src={studio} alt="" />
                  <h3 className="cardTitle">Web studio</h3>
                  <p>[HTML, JS, GIT, CSS]</p>
                  <p>
                    "Web Studio" is a website of a studio that specializes in
                    website development and design. The studio offers website
                    creation, logo design, graphic design and other web
                    services.
                  </p>
                </a>
              </li>

              <li className="card">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cardLink"
                  href="https://mariysemenenko.github.io/Times/"
                >
                  <img className="cardImg" src={clock} alt="" />
                  <h3 className="cardTitle">Clock</h3>
                  <p>[HTML, JS, CSS]</p>
                  <p>
                    "Clock" on the site is a web element that shows the current
                    time. The clock can be used to track time on a website or
                    for decorative purposes.
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footerRow">
            <div className="footerColum footerCopyright">
              <div className="footerCopyrightName">&copy Marii Semenenko</div>
              <p>Front-end Developer</p>
            </div>

            <div className="footerColum footerSocial">
              <p>My social media profiles:</p>
              <div className="footerIcons">
                <a href="https://www.linkedin.com/in/semenenkomaria/">
                  <img className="footerSvgIcons" src={linkedin} alt="" />
                </a>
                <a href="https://github.com/MariySemenenko">
                  <img src={github} alt="" />
                </a>
                <a href="https://t.me/Semenenko_Maria">
                  <img src={telegram} alt="" />
                </a>
              </div>
            </div>
            <div className="footerColum footerContacts">
              <a
                href="https://www.linkedin.com/in/semenenkomaria/"
                className="footerHover"
              >
                Contact LinkedIn
              </a>
              <p>Ready to build your own custom website? Contact me today!</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
