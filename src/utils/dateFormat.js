/**
 * @format
 */
export default class DateFormat {
  constructor(date) {
    this.date = new Date(date);
  }

  getDate = () =>
    `${this.date.getMonth() + 1} / ${this.date.getDate()} /
      ${this.date.getFullYear()}`;

  getTime = () =>
    `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;

  // getDate = () =>
  //   this.date.toDateString()

  // getTime = () =>
  //   this.date.toLocaleTimeString("en-ph")
}
