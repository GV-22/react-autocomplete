import { useState } from "react";

import "./App.css";
import { searchCountries } from "./api";
import Autocomplete from "./components/Autocomplete";
import { useDebounce } from "./hooks/useDebounce";
import { Option, RequestState } from "./types";

interface Query {
  state: RequestState;
  options: Option[];
}

function App() {
  const [country, setCountry] = useState<Option | null>(null);
  const [{ state, options }, setQuery] = useState<Query>({
    state: RequestState.None,
    options: [],
  });

  const handleSearch = useDebounce(1000, async (searched: string) => {
    try {
      setQuery({
        state: RequestState.Success,
        options: await searchCountries(searched),
      });
    } catch (err) {
      setQuery({
        state: RequestState.Error,
        options: [],
      });
    }
  });

  const handleChange = (value: string) => {
    if (value) {
      setQuery({
        state: RequestState.Waiting,
        options: [],
      });
      handleSearch(value);
    } else {
      setCountry(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Autocomplete
          label="Country of residence"
          value={country?.label}
          noSuggestionMsg="No country found"
          reqState={state}
          options={options}
          onChange={handleChange}
          onSelect={setCountry}
        />

        {country && <div>You selected {country?.label}</div>}
      </header>
    </div>
  );
}

export default App;
