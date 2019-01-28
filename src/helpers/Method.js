export const urlConverter = (url) => {
  let urlConverted = '';
  if (url) {
    urlConverted = url.replace(/\s+/g, '-').toLowerCase();
  }
  return urlConverted;
};

export const priceConverter = (rate) => {
  let price = 3500;
  if (rate >= 1 && rate < 4) {
    price = 3500;
  } else if (rate >= 4 && rate < 7) {
    price = 8250;
  } else if (rate >= 7 && rate < 9) {
    price = 16350;
  } else if (rate >= 9 && rate <= 10) {
    price = 21250;
  }
  return price;
};

export const IDRFormatter = number => new Intl.NumberFormat('id-ID', { currency: 'IDR' }).format(number);

export const truncateString = (str) => {
  const stringSplitted = `${str.substring(0, 50)}...`;
  return stringSplitted;
};
