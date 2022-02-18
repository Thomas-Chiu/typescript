/**
 * 1. Types by Inference 型別推論
 * */

let helloWorld = "Hello World";
// === let helloWorld: string

/**
 * 2. Defining Types 定義型別
 * */

interface User {
  name: string;
  id: number;
}

// 2.1 宣告 interface 物件
const user: User = {
  name: "Thomas",
  id: 1,
};

// 2.2 支援 OOP 寫法
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user2: User = new UserAccount("Thomas2", 2);
// console.log(user, user2);

/**
 * 3. Composing Types 型別組成
 */

// 3.1 Unions 聯合型別
type ErrorStates = "條碼錯誤" | "順序錯誤" | "組裝錯誤";
type ErrorId = 0 | 1 | 2;

function wrapInArray(obj: string | string[]) {
  // 判斷參數型別
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

// 3.2 Generics <泛型>
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Bike<Type> {
  // 自訂泛型型別
  add: (obj: Type) => void;
  get: () => Type;
}
// 宣告變數時才定義型別
declare const bike: Bike<string>;

/**
 * Structural Type System (比對 value shape)
 */

// 變數型態若和介面相同可省略
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
logPoint(point); // logs "12, 26"

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const color = { hex: "#187ABF" };
logPoint(color); // Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.

// 若和類別相同也可省略
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
