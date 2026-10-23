// 1. Extend TypeScript's global interface definitions
declare global {
  interface Object {
    altaf(): void;
  }
  interface Array<T> {
    heyaltaf(): void;
  }
}

const myhero: string[] = ['thor', 'spiderman'];

const heropower: { thor: string; spider: string } = {
  thor: "thunder",
  spider: "slinger"
};

Object.prototype.altaf = function (): void {
  console.log("altaf is present in all");
};

Array.prototype.heyaltaf = function (): void {
  console.log("altaf is present in array");
};

// 4. Invocations
heropower.altaf(); // Output: altaf is present in all
myhero.heyaltaf();  // Output: altaf is present in array

// Required when using 'declare global' inside a module
export {};