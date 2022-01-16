var resp = {
  success: true,
  timestamp: 1631041383,
  base: "EUR",
  date: "2021-09-07",
  rates: { RUB: 86.765738, USD: 1.184603 },
};

var req = () =>
  $.get(
    "http://data.fixer.io/api/latest",
    {
      access_key: "aaa9e17d310cdbab4bbddaa492cde276",
      symbols: "RUB,USD",
    },
    handler
  );

var handler = (response) => {
  let EurUsd = response.rates.USD;
  let EurRub = response.rates.RUB;
  $(".js_exchange_EUR").text(
    response.base + " - " + EurRub.toFixed(2) + " RUB"
  );
  $(".js_exchange_USD").text(
    "RUB" + " - " + (EurRub / EurUsd).toFixed(2) + " RUB"
  );
};

$(function () {
  req();
});
