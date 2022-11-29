function getFormatter(balance) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  console.log(balance);
  return formatter.format(balance);
}

module.exports = getFormatter;
