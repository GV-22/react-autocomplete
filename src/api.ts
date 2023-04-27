import { Option } from "./types";

interface Country {
  name: { common: string };
  cca3: string;
}

export const searchCountries = async (searched: string): Promise<Option[]> => {
  const url = `https://restcountries.com/v3.1/name/${searched}?fields=name,cca3`;
  const res = await fetch(url);

  if (res.status === 404) {
    return [];
  }

  const data: Country[] = await res.json();

  const result: Option[] = [];

  for (let i = 0; i < data.length; i++) {
    const { cca3, name } = data[i];
    const included = name.common.toLowerCase().includes(searched.toLowerCase());

    if (!included) continue;

    result.push({
      code: cca3,
      label: name.common,
    });
  }

  return result;
};
