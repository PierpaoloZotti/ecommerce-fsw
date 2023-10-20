type TitleHeaderProps = {
  title: string;
  subtitle?: string;
};

const TitleHeader = ({ title, subtitle }: TitleHeaderProps) => {
  return (
    <div className="mb-5 mt-7 flex flex-col justify-start px-5">
      <h1 className="text-lg font-semibold">{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

export default TitleHeader;
