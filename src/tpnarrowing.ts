
function getseat(kind: string | number): string {
    if (typeof kind === "string") {
        return `selecting seat ${kind}`;
    }
    return `seat order: ${kind}`;
}

console.log("--- 1. typeof narrowing ---");
console.log(getseat("12B")); // selecting seat 12B
console.log(getseat(45));    // seat order: 45


function getseat2(kind: "window" | "middle" | "corner"): string {
    return `selecting seat ${kind}`;
}

console.log("\n--- 2. Literal Union ---");
console.log(getseat2("window")); // selecting seat window
console.log(getseat2("middle")); // selecting seat middle


class SideUpper {
    serve(): string {
        return "serving food";
    }
}

class SideLower {
    serve(): string {
        return "serving tea";
    }
}

function serve(seat: SideUpper | SideLower): string {
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


type SeatOrder = {
    type: string;
    order: number;
};

function isSeatOrder(obj: unknown): obj is SeatOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        "type" in obj &&
        "order" in obj &&
        typeof (obj as SeatOrder).type === "string" &&
        typeof (obj as SeatOrder).order === "number"
    );
}

function serveSeatOrder(item: SeatOrder | string): string {
    if (isSeatOrder(item)) {
        return `serving ${item.type} with order number ${item.order}`;
    }
    return `serving custom seat: ${item}`;
}

console.log("\n--- 4. Custom Type Guard ---");
console.log(serveSeatOrder({ type: "berth", order: 101 })); // serving berth with order number 101
console.log(serveSeatOrder("unreserved cabin"));            // serving custom seat: unreserved cabin



type LowerSeat = { type: "lower"; order: number };
type MiddleSeat = { type: "middle"; order: number };
type UpperSeat = { type: "upper"; order: number };

type Seat = LowerSeat | MiddleSeat | UpperSeat;

function serveSeat(item: Seat): string {
    switch (item.type) {
        case "lower":
            return `serving lower seat with order number ${item.order}`;
        case "middle":
            return `serving middle seat with order number ${item.order}`;
        case "upper":
            return `serving upper seat with order number ${item.order}`;
        default: {
            const _exhaustiveCheck: never = item;
            throw new Error(`Unhandled seat type: ${_exhaustiveCheck}`);
        }
    }
}

console.log("\n--- 5. Discriminated Union ---");
console.log(serveSeat({ type: "lower", order: 12 }));   // serving lower seat with order number 12
console.log(serveSeat({ type: "middle", order: 13 }));  // serving middle seat with order number 13
console.log(serveSeat({ type: "upper", order: 14 }));   // serving upper seat with order number 14