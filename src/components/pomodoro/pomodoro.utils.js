const nwlz = (num) => ("0" + num).slice(-2);

export const minsToSec = (min) => min * 60;
export const secondsToTimeString = (sec) =>
  sec < 59
    ? nwlz(sec)
    : `${nwlz(Math.floor(sec / 60))}: ${nwlz(Math.floor(sec % 60))}`;
