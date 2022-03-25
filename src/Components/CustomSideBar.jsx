import "bootstrap/dist/css/bootstrap.min.css";

const CustomSideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <a href="./index.html">
          <img
            className="logo-img"
            src="./assets/images/Spotify_Logo_RGB_White.png"
            alt="Spotify-logo"
            srcset=""
          />
        </a>
      </div>

      <div className="sidebar-items mb-4">
        <a href="./index.html ">
          <div className="home-btn sidebar-button d-flex">
            <div className="sidebar-img">
              <i className="fa-solid fa-house"></i>
            </div>
            <a href="./index.html">
              <span className="sidebar-span-text">Home</span>
            </a>
          </div>
        </a>
        <div className="search-btn sidebar-button d-flex">
          <div className="sidebar-img">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <a href="./search.html">
            <span className="sidebar-span-text">Search</span>
          </a>
        </div>
        <div className="your-liblary-btn sidebar-button d-flex">
          <div className="sidebar-img">||\</div>
          <span className="sidebar-span-text">Your Library</span>
        </div>
      </div>

      <div className="sidebar-items mb-2">
        <div className="sidebar-item sidebar-button d-flex">
          <div className="sidebar-img bg-grey">
            <i className="fa-solid fa-plus "></i>
          </div>
          <div className="sidebar-text">Create Playlist</div>
        </div>
        <div className="sidebar-item sidebar-button d-flex">
          <div className="sidebar-img bg-linear">
            <i className="fa-solid fa-heart"></i>
          </div>
          <div className="sidebar-text">Liked Songs</div>
        </div>

        <hr />
      </div>

      <div className="sidebar-music-lists">
        <a className="sidebar-a" href="/Spotify-interface-develop/artist.html">
          <p className="sidebar-p">Funky Heavy Bluesy</p>
        </a>
      </div>
      <div className="install-text">
        <i className="fa-solid fa-circle-arrow-down mr-1"></i>Install App
      </div>
    </div>
  );
};

export default CustomSideBar;
