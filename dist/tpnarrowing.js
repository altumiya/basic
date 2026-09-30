function getseat(kind) {
    if (typeof kind === "string") {
        return `selecting seat ${kind}`;
    }
    return `seat order: ${kind}`;
}
console.log("--- 1. typeof narrowing ---");
console.log(getseat("12B")); // selecting seat 12B
console.log(getseat(45)); // seat order: 45
function getseat2(kind) {
    return `selecting seat ${kind}`;
}
console.log("\n--- 2. Literal Union ---");
console.log(getseat2("window")); // selecting seat window
console.log(getseat2("middle")); // selecting seat middle
class SideUpper {
    serve() {
        return "serving food";
    }
}
class SideLower {
    serve() {
        return "serving tea";
    }
}
function serve(seat) {
    if (seat instanceof SideUpper) {
        return seat.serve();
    }
    return seat.serve();
}
console.log("\n--- 3. instanceof narrowing ---");
const upperPassenger = new SideUpper();
const lowerPassenger = new SideLower();
console.log(serve(upperPassenger)); // serving food
console.log(serve(lowerPassenger)); // serving tea
function isSeatOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        "type" in obj &&
        "order" in obj &&
        typeof obj.type === "string" &&
        typeof obj.order === "number");
}
function serveSeatOrder(item) {
    if (isSeatOrder(item)) {
        return `serving ${item.type} with order number ${item.order}`;
    }
    return `serving custom seat: ${item}`;
}
console.log("\n--- 4. Custom Type Guard ---");
console.log(serveSeatOrder({ type: "berth", order: 101 })); // serving berth with order number 101
console.log(serveSeatOrder("unreserved cabin")); // serving custom seat: unreserved cabin
function serveSeat(item) {
    switch (item.type) {
        case "lower":
            return `serving lower seat with order number ${item.order}`;
        case "middle":
            return `serving middle seat with order number ${item.order}`;
        case "upper":
            return `serving upper seat with order number ${item.order}`;
        default: {
            const _exhaustiveCheck = item;
            throw new Error(`Unhandled seat type: ${_exhaustiveCheck}`);
        }
    }
}
console.log("\n--- 5. Discriminated Union ---");
console.log(serveSeat({ type: "lower", order: 12 })); // serving lower seat with order number 12
console.log(serveSeat({ type: "middle", order: 13 })); // serving middle seat with order number 13
console.log(serveSeat({ type: "upper", order: 14 })); // serving upper seat with order number 14
function printValue(value) {
    if (typeof value === "string") {
        console.log("It is a string");
        console.log(value.toUpperCase());
    }
    else {
        console.log("It is a number");
        console.log(value.toFixed(2));
    }
}
printValue("hello");
printValue(25);
export {};
//# sourceMappingURL=tpnarrowing.js.map