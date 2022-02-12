import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "./redux/comic/comicActions";
import Title from "./components/Title";
import Image from "./components/Image";
import { RatingStar } from "./components/RatingStar/RatingStar";
import "./App.scss";
import MoreIformation from "./components/MoreInformation";
import Arrow from "./components/Icons/Icons";
import { ComicProps } from "./interface";


const App = ({ userData, fetchData }: ComicProps) => {
  const [toggle, setToggle] = useState(false);
  const [idNumber, setIdNumber] = useState(1);

  useEffect(() => {
    fetchData(idNumber);
  }, [idNumber]);

  const handleSliderComic = (position: string) => {
    setToggle(false);
    if (position === "left") {
      setIdNumber(idNumber - 1);
    }
    if (position === "rigth") {
      setIdNumber(idNumber + 1);
    }
  };
  const { alt, day, img, month, num, title, transcript } = userData.data.comic;
//RAD: 8886492
  return (
    <div className="App">
      {title === undefined ? (
        <p>Loading...</p>
      ) : (
        <Title titleComic={`${title}`} />
      )}

      {img === undefined ? (
        <p>Loading...</p>
      ) : (
        <div className="container-image">
          <button
            disabled={idNumber === 1}
            onClick={() => handleSliderComic("left")}
          >
            <Arrow style={{ transform: "rotate(180deg)" }} />{" "}
          </button>
          <Image imageComic={`${img}`} altComic={`${alt}`} />
          <button onClick={() => handleSliderComic("rigth")}>
            {" "}
            <Arrow />{" "}
          </button>
        </div>
      )}

      <button className="show-button" onClick={() => setToggle(!toggle)}>
        {!toggle ? "Show details" : "Hide details"}
      </button>
      {toggle ? (
        <>
          <MoreIformation
            transcript={`${transcript}`}
            month={`${month}`}
            day={`${day}`}
          />
          <RatingStar numValue={num} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: (idComic: any) => dispatch(fetchData(idComic)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
