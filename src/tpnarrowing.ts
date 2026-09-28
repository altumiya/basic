// 1. Primitive Narrowing using typeof
function getseat(kind: string | number) {
    if (typeof kind === "string") {
        return `selecting seat ${kind}`;
    }
    return `seat order: ${kind}`;
}

// 2. Literal Union Narrowing
function getseat2(kind: "window" | "middle" | "corner") {
    return `selecting seat ${kind}`;
}

// 3. Class Instance Narrowing using instanceof
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

function serve(seat: SideUpper | SideLower): string {
    if (seat instanceof SideUpper) {
        return seat.serve();
    }
    return seat.serve();
}

// 4. Custom User-Defined Type Guard (obj is Type)
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

function serveSeatOrder(item: SeatOrder | string) {
    if (isSeatOrder(item)) {
        return `serving ${item.type} with order number ${item.order}`;
    }
    return `serving custom seat: ${item}`;
}

// 5. Discriminated Union with Exhaustiveness Check
type LowerSeat = { type: "lower"; order: number };
type MiddleSeat = { type: "middle"; order: number };
type UpperSeat = { type: "upper"; order: number };

type Seat = LowerSeat | MiddleSeat | UpperSeat;

function serveSeatDiscriminated(item: Seat): string {
    switch (item.type) {
        case "lower":
            return `serving lower seat with order number ${item.order}`;
        case "middle":
            return `serving middle seat with order number ${item.order}`;
        case "upper":
            return `serving upper seat with order number ${item.order}`;
        default: {
            const _exhaustiveCheck: never = item;
            return _exhaustiveCheck;
        }
    }
}