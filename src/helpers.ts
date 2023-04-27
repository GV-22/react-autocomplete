type Coords = [number, number];

export function findSubstringCoords(
  text: string,
  substr: string
): Coords | null {
  const indexOf = text.toLowerCase().indexOf(substr.toLowerCase());

  return indexOf === -1 ? null : [indexOf, indexOf + substr.length];
}

type MaybeAClassName = string | boolean | null | undefined;

export function formatClassName(...values: MaybeAClassName[]): string {
  return values.filter((v) => v && typeof v === "string").join(" ");
}
