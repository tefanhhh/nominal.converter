class Converter {
  static UNITS = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
  static TEENS = ["sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
  static TENS = ["", "sepuluh", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"];

  static convertToText(number) {
      if (number === 0) {
          return "nol";
      }
      return this.convert(number);
  }

  static convert(number) {
    if (number < 0) {
      return "kurang " + this.convert(-number);
    } else if (number < 10) {
      return this.UNITS[number];
    } else if (number < 20) {
      return this.TEENS[number % 10];
    } else if (number < 100) {
      return this.TENS[Math.floor(number / 10)] + ((number % 10 !== 0) ? " " + this.convert(number % 10) : "");
    } else if (number < 1000) {
      const val = this.UNITS[Math.floor(number / 100)];
      return val === "satu" ? "seratus" : val + " ratus" + ((number % 100 !== 0) ? " " + this.convert(number % 100) : "");
    } else if (number < 1000000) {
      const val = this.convert(Math.floor(number / 1000));
      return val === "satu" ? "seribu" : val + " ribu" + ((number % 1000 !== 0) ? " " + this.convert(number % 1000) : "");
    } else if (number < 1000000000) {
      return this.convert(Math.floor(number / 1000000)) + " juta" + ((number % 1000000 !== 0) ? " " + this.convert(number % 1000000) : "");
    }
    return this.convert(Math.floor(number / 1000000000)) + " miliar" + ((number % 1000000000 !== 0) ? " " + this.convert(number % 1000000000) : "");
  }

  static main() {
      const number = 11000;
      const text = this.convertToText(number);
      console.log(number + " in words: " + text);
  }
}

Converter.main();
