
import TitleProps from "./interface";
import './styles.scss';


const Title: React.FC<TitleProps> = ({ titleComic }: TitleProps) => {


  return <div className="title-image">{titleComic}</div>;
};

export default Title;
