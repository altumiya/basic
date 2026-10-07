enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);

enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

console.log(Direction2.Up);

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let userRole: Role;

userRole = Role.Admin; 
console.log(userRole);
userRole = Role.User; 
console.log(userRole);

enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED"
}

function showStatus(status: OrderStatus) {
  console.log(status);
}

showStatus(OrderStatus.Shipped); 

 enum seatssl {
    lower = 1,
    middle = 2,
    upper = 3,
}
let t: [string, number] = ["upper", 10]
t.push("side")
console.log(t)