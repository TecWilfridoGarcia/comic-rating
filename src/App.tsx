import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "./redux/comic/comicActions";
import Title from "./components/Title";
import Image from "./components/Image";
import { RatingStar } from "./components/RatingStar/RatingStar";
import "./App.scss";
import MoreIformation from "./components/MoreInformation";

interface ComicProps {
  userData: IdComicProps;
  fetchData: any;
}
interface IdComicProps {
  data: {
    comic: {
      alt?: string;
      day?: string;
      img?: string;
      link?: string;
      month?: string;
      news?: string;
      num?: number;
      safe_title?: string;
      title?: string;
      transcript?: string;
    };
  };
}

function App({ userData, fetchData }: ComicProps) {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const {
    alt,
    day,
    img,
    link,
    month,
    news,
    num,
    safe_title,
    title,
    transcript,
  } = userData.data.comic;

  return (
    <div className="App">
      <Title titleComic={`${title}`} />
      <Image imageComic={`${img}`} altComic={`${alt}`} />
      <MoreIformation
        transcript={`${transcript}`}
        month={`${month}`}
        day={`${day}`}
      />
      <RatingStar numValue={num} />
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
