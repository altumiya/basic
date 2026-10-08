var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
let userRole;
userRole = Role.Admin;
console.log(userRole);
userRole = Role.User;
console.log(userRole);
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
function showStatus(status) {
    console.log(status);
}
showStatus(OrderStatus.Shipped);
var seatssl;
(function (seatssl) {
    seatssl[seatssl["lower"] = 1] = "lower";
    seatssl[seatssl["middle"] = 2] = "middle";
    seatssl[seatssl["upper"] = 3] = "upper";
})(seatssl || (seatssl = {}));
let t = ["upper", 10];
t.push("side");
console.log(t);
export {};
//# sourceMappingURL=enums.js.map