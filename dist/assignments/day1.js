const myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
const mysubDate = new Date(2026, 10, 12); //yymmdd
console.log(mysubDate.toDateString());
const mysubDate2 = new Date(2026, 0, 12, 5, 7); //year, monthIndex, day, hours, minutes
console.log(mysubDate2.toLocaleString());
const now = new Date();
console.log(now);
console.log(now.toLocaleString());
export {};
//# sourceMappingURL=day1.js.map