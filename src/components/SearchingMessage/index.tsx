import { formatClassName } from "../../helpers";
import "./style.css";


interface SearchingMessageProps {
  message: string;
  error?: boolean;
}

const SearchingMessage = ({ message, error }: SearchingMessageProps) => {
  return (
    <div className={formatClassName("SearchingMessage", error && "error")}>
      {message}
    </div>
  );
};

export default SearchingMessage;
