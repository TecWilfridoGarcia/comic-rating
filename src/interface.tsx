export interface ComicProps {
  userData: IdComicProps;
  fetchData: any;
}
export interface IdComicProps {
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