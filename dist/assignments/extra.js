let day = 2;
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
function printWeekday(day2) {
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
            const _exhaustiveCheck = day2;
            console.log(`Unhandled day: ${_exhaustiveCheck}`);
        }
    }
}
printWeekday(2);
// Explicitly typed as string | null so the fallback is meaningful
let username = null;
// 'name' is inferred as string (null is stripped away by ??)
let displayName = username ?? "Guest";
console.log(displayName); // Output: "Guest"
// --- The Core Difference: ?? vs || ---
let age = 0;
// ?? considers ONLY null or undefined as missing values
console.log(age ?? 18); // Output: 0
// || considers ANY falsy value (0, "", false, NaN, null, undefined) as missing
console.log(age || 18); // Output: 18
export {};
//# sourceMappingURL=extra.js.map