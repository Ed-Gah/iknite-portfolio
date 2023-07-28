const Initials = (value: string) => {
  let name = "";

  if (value && value.length > 0) {
    name = value;
  } else {
    name = "Itamba";
  }

  let letters = name
    .split(" ")
    .slice(0, 2)
    .map((l) => l[0])
    .join("")
    .toUpperCase();

  return letters;
};

export default Initials;
