import { useRef, useState } from "react";
import { Option, RequestState } from "../../types";
import SearchingMessage from "../SearchingMessage";
import { SuggestedOption } from "../SuggestedOption";
import "./style.css";
import useClickOutside from "../../hooks/useClickOutside";
import { log } from "console";

interface AutoCompleteProps {
  label: string;
  value?: string;
  noSuggestionMsg: string;
  reqState: RequestState;
  options: Option[];
  onChange(value: string): void;
  onSelect(option: Option | null): void;
}

const Autocomplete = (props: AutoCompleteProps) => {
  const {
    label,
    value,
    noSuggestionMsg,
    options,
    reqState,
    onChange,
    onSelect,
  } = props;
  // the user input for searching
  const [searched, setSearched] = useState<string>("");
  // the index of the highlighted option when
  // the user browses suggested options with ArrowUp or ArrowDown keys.
  // -1 means that nothing is highlighted
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  useClickOutside([inputRef, optionsRef], () => {
    handleSelect(null);
  });

  const handleSelect = (option: Option | null) => {
    setSearched("");
    onSelect(option);
    inputRef.current?.focus();
  };

  const handleSearch = (value: string) => {
    setSearched(value);
    onChange(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowUp") {
      setActiveIndex(activeIndex > 0 ? activeIndex - 1 : -1);
    }

    if (event.key === "ArrowDown" && activeIndex < options.length - 1) {
      setActiveIndex(activeIndex + 1);
    }

    if (event.key === "Enter" && options[activeIndex]) {
      handleSelect(options[activeIndex]);
      setActiveIndex(-1);
    }
  };

  const hasSearched = searched.length > 0;

  return (
    <div className="Autocomplete">
      <label className="Autocomplete-form">
        <span className="Autocomplete-label">{label}</span>
        <input
          className="Autocomplete-input"
          type="text"
          placeholder="Search for a country..."
          ref={inputRef}
          value={searched || value || ""}
          onKeyDown={handleKeyDown}
          onChange={(e) => handleSearch(e.target.value.trim())}
        />
      </label>

      <div className="Autocomplete-options" ref={optionsRef}>
        {reqState === RequestState.Waiting && (
          <SearchingMessage message="Please wait..." />
        )}
        {reqState === RequestState.Error && (
          <SearchingMessage message="Oops! Something went wrong" />
        )}
        {reqState === RequestState.Success &&
          hasSearched &&
          !options.length && <SearchingMessage message={noSuggestionMsg} />}

        {reqState === RequestState.Success &&
          hasSearched &&
          options.map((option, index) => (
            <SuggestedOption
              key={option.code}
              value={option.label}
              searched={searched}
              active={index === activeIndex}
              onClick={() => handleSelect(option)}
            />
          ))}
      </div>
    </div>
  );
};

export default Autocomplete;
