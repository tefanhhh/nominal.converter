const UNITS = [
  "",
  "satu",
  "dua",
  "tiga",
  "empat",
  "lima",
  "enam",
  "tujuh",
  "delapan",
  "sembilan",
];
const TEENS = [
  "sepuluh",
  "sebelas",
  "dua belas",
  "tiga belas",
  "empat belas",
  "lima belas",
  "enam belas",
  "tujuh belas",
  "delapan belas",
  "sembilan belas",
];
const TENS = [
  "",
  "sepuluh",
  "dua puluh",
  "tiga puluh",
  "empat puluh",
  "lima puluh",
  "enam puluh",
  "tujuh puluh",
  "delapan puluh",
  "sembilan puluh",
];

export function convertToText(number) {
  if (number === 0) {
    return "nol";
  }
  return convert(number);
}

export function convert(number) {
  if (number < 0) {
    return "kurang " + convert(-number);
  } else if (number < 10) {
    return UNITS[number];
  } else if (number < 20) {
    return TEENS[number % 10];
  } else if (number < 100) {
    return (
      TENS[Math.floor(number / 10)] +
      (number % 10 !== 0 ? " " + convert(number % 10) : "")
    );
  } else if (number < 1000) {
    const val = UNITS[Math.floor(number / 100)];
    return val === "satu"
      ? "seratus"
      : val +
          " ratus" +
          (number % 100 !== 0 ? " " + convert(number % 100) : "");
  } else if (number < 1000000) {
    const val = convert(Math.floor(number / 1000));
    return val === "satu"
      ? "seribu"
      : val +
          " ribu" +
          (number % 1000 !== 0 ? " " + convert(number % 1000) : "");
  } else if (number < 1000000000) {
    return (
      convert(Math.floor(number / 1000000)) +
      " juta" +
      (number % 1000000 !== 0 ? " " + convert(number % 1000000) : "")
    );
  }
  return (
    convert(Math.floor(number / 1000000000)) +
    " miliar" +
    (number % 1000000000 !== 0 ? " " + convert(number % 1000000000) : "")
  );
}
