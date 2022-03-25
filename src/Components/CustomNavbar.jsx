import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavBar = () => {
  return (
    <div className="navbar">
      <div className="header-navbar-arrows">
        <div className="header-navbar-arrows__left">
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div className="header-navbar-arrows__right">
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>

      <div className="header-navbar-dropdown">
        <div className="btn-group">
          <button
            type="button"
            className="btn dropdown-button dropdown-toggle p-0"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              className="dropdown-image"
              src="./assets/images/eminem.jpg"
              alt="dropdown"
              srcset=""
            ></img>
            <span className="dropdown-text">John Trump</span>
          </button>
          <div className="dropdown-menu dropdown-menu-right bg-dark">
            <a className="dropdown-item" href="./album.html">
              Album
            </a>
            <a className="dropdown-item" href="./artist.html">
              Artist
            </a>
            <a className="dropdown-item" href="./login.html">
              Log out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomNavBar;
