import { findSubstringCoords, formatClassName } from "../../helpers";
import "./style.css";

interface SuggestedOptionProps {
  value: string;
  searched: string;
  active?: boolean;
  onClick?: () => void;
}

export const SuggestedOption = ({
  value,
  searched,
  active,
  onClick,
}: SuggestedOptionProps) => {
  const [start, end] = findSubstringCoords(value, searched) ?? [];

  return (
    <div
      className={formatClassName("SuggestedOption", active && "active")}
      onClick={onClick}
    >
      {start === undefined ? (
        value
      ) : (
        <>
          {value.slice(0, start)}
          <span className="highlighted">{value.slice(start, end)}</span>
          {value.slice(end)}
        </>
      )}
    </div>
  );
};
