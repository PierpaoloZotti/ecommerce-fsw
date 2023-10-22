import { cn } from "@/lib/utils";

type TitleHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const TitleHeader = ({ title, subtitle, className }: TitleHeaderProps) => {
  return (
    <div
      className={cn(`mb-5 mt-7 flex flex-col justify-start px-5`, className)}
    >
      <h1 className="text-lg font-semibold">{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

export default TitleHeader;
