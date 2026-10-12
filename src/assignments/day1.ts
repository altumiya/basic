const myDate: Date = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

const mysubDate: Date = new Date(2026, 10, 12); //yymmdd
console.log(mysubDate.toDateString());

const mysubDate2: Date = new Date(2026, 0, 12, 5, 7); //year, monthIndex, day, hours, minutes
console.log(mysubDate2.toLocaleString());

const now: Date = new Date();

console.log(now);
console.log(now.toLocaleString());