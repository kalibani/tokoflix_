import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);
export const durationConverter = duration => (moment.duration(duration, 'minutes').format('h[h], m[min]'));

/* ----------- example format date: 19 Januari 2008 ----------- */
export const standardDate = date => (date ? moment(date).format('D MMMM YYYY') : '-');

export const urlConverter = (url) => {
  let urlConverted = '';
  if (url) {
    urlConverted = url.replace(/\s+/g, '-').toLowerCase();
  }
  return urlConverted;
};

export const priceConverter = (rate) => {
  let price = 35000;
  if (rate >= 1 && rate < 4) {
    price = 35000;
  } else if (rate >= 4 && rate < 7) {
    price = 82500;
  } else if (rate >= 7 && rate < 9) {
    price = 163500;
  } else if (rate >= 9 && rate <= 10) {
    price = 212500;
  }
  return price;
};

export const IDRFormatter = number => new Intl.NumberFormat('id-ID', { currency: 'IDR' }).format(number);

export const truncateString = (str) => {
  const stringSplitted = `${str.substring(0, 50)}...`;
  return stringSplitted;
};


export const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const randomDelay = () => 300 + Math.random() * 1000;

export const inputDate = date => (date ? moment(date).format('YYYY-MM-DD') : '-');
