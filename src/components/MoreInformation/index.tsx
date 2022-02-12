import MoreInfoProps from "./interface";
import "./styles.scss";

const MoreIformation: React.FC<MoreInfoProps> = ({
  day,
  month,
  transcript,
}: MoreInfoProps) => {
  return (
    <div className="container-information">
      <p className="container-title">
        <strong>Description:</strong>
        <span>{transcript}</span>
      </p>
      <p className="container-title">
        <strong>Month:</strong> <span>{month}</span>
      </p>
      <p className="container-title">
        <strong>Day:</strong> <span>{day}</span>
      </p>
    </div>
  );
};

export default MoreIformation;
