const _splitRangeTime = (rangeTime) => {
  const month = rangeTime.substring(0,2);
  const year = rangeTime.substring(2,6);

  return { month, year };
};

const _splitDate = (date) => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return { month, year };
};

const _getRangeMonth = (prev, current) => {
  const { month: prevMonth, year: prevYear } = prev;
  const { month: currentMonth, year: currentYear } = current;

  const diffYear = prevYear - currentYear;
  const monthYear = diffYear * 12;
  const diffMonth = prevMonth - currentMonth;

  return( monthYear + diffMonth) * -1;
};

const _getStringYear = (year) => {
  if (year === 1) {
    return `${year} year`;
  }
  if (year > 1) {
    return `${year} years`;
  }

  return '';
}

const _getStringMonth = (month) => {
  if (month === 1) {
    return `${month} month`;
  }
  if (month > 1) {
    return `${month} months`;
  }

  return '1 month';
}

const _constructRangeTime = (month, year) => {
  const rangeMonth = _getRangeMonth(month, year);
  const diffMonth = rangeMonth % 12;
  const diffYear = Math.floor(rangeMonth / 12);
  const stringYear = _getStringYear(diffYear);
  const stringMonth = _getStringMonth(diffMonth);

  return stringYear + ' ' + stringMonth;
};

const getRangeTime = (startDate, endDate) => {
  const start = _splitRangeTime(startDate);
  const end = endDate ? _splitRangeTime(endDate) : _splitDate(new Date());

  return _constructRangeTime(start, end);
};

export {
  getRangeTime
};