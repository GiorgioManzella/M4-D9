import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useEffect } from "react";

class MainSection extends React.Component {
  fetchData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  render() {
    return (
      <>
        <section className="top-section">
          <div className="container-fluid">
            <h1>Good morning</h1>
            <div className="row">
              <div id="container1" className="boxes top-boxes"></div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row justify-content-between mt-3 mx-1 ">
              <h4>Recently Played</h4>
              <p className="see-all">SEE ALL</p>
            </div>
          </div>

          <div className="container-fluid middle-section">
            <div className="row mt-3 main-page-large-box"></div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row justify-content-between mx-1 mt-3">
              <h4>Shows to Try</h4>
              <p className="see-all">SEE ALL</p>
            </div>
            <h6 className="title-desc ml-1">
              Podcasts we think you'll get hooked on.
            </h6>
          </div>

          <div className="container-fluid middle-section">
            <div className="row mt-3 shows-to-try"></div>
          </div>
        </section>
      </>
    );
  }
}
export default MainSection;
