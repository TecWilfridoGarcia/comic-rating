import MoreInfoProps from "./interface";

const MoreIformation: React.FC<MoreInfoProps> = ({
  day,
  month,
  transcript,
}: MoreInfoProps) => {
  return (
    <div>
      <p>Description:</p>
      <p>{transcript}</p>
      <p>
        Month:<span>{month}</span>
      </p>

      <p>
        Day:<span>{day}</span>
      </p>
    </div>
  );
};

export default MoreIformation;
