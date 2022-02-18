/**
 * 1. Types by Inference 型別推論
 * */
var helloWorld = "Hello World";
// 2.1 宣告 interface 物件
var user = {
    name: "Thomas",
    id: 1
};
// 2.2 支援 OOP 寫法
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user2 = new UserAccount("Thomas2", 2);
function wrapInArray(obj) {
    // 判斷參數型別
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
var point = { x: 12, y: 26 };
logPoint(point); // logs "12, 26"
var point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
var rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
var color = { hex: "#187ABF" };
logPoint(color); // Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
// 若和類別相同也可省略
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
