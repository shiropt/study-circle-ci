function getTimezoneOffsetHours() {
  return new Date().getTimezoneOffset() / 60;
}

module.exports = getTimezoneOffsetHours;
