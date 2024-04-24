public class Converter {

  private static final String[] UNITS = {"", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"};
  private static final String[] TEENS = {"sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"};
  private static final String[] TENS = {"", "sepuluh", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"};

  public static String convertToText(long number) {
      if (number == 0) {
          return "nol";
      }
      return convert(number);
  }

  private static String convert(long number) {
    if (number < 0) {
      return "kurang " + convert(-number);
    } else if (number < 10) {
      return UNITS[(int) number];
    } else if (number < 20) {
      return TEENS[(int) (number % 10)];
    } else if (number < 100) {
      return TENS[(int) (number / 10)] + ((number % 10 != 0) ? " " + convert(number % 10) : "");
    } else if (number < 1000) {
      String val = UNITS[(int) (number / 100)];
      return val.equals("satu") ? "seratus" : val + " ratus" + ((number % 100 != 0) ? " " + convert(number % 100) : "");
    } else if (number < 1000000) {
      String val = convert(number / 1000);
      return val.equals("satu") ? "seribu" : val + " ribu" + ((number % 1000 != 0) ? " " + convert(number % 1000) : "");
    } else if (number < 1000000000) {
      return convert(number / 1000000) + " juta" + ((number % 1000000 != 0) ? " " + convert(number % 1000000) : "");
    }
    return convert(number / 1000000000) + " miliar" + ((number % 1000000000 != 0) ? " " + convert(number % 1000000000) : "");
  }

  public static void main(String[] args) {
      long number = 11000;
      String text = convertToText(number);
      System.out.println(number + " in words: " + text);
  }
}
