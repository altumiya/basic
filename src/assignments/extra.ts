let day: number = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}

type Weekday = 1 | 2 | 3;

function printWeekday(day2: Weekday): void {
  switch (day2) {
    case 1:
      console.log("Monday");
      break;

    case 2:
      console.log("Tuesday");
      break;

    case 3:
      console.log("Wednesday");
      break;

    default: {
      // If add 4 to Weekday and forget a case, this line will throw a compile error:
      const _exhaustiveCheck: never = day2;
      console.log(`Unhandled day: ${_exhaustiveCheck}`);
    }
  }
}

printWeekday(2);