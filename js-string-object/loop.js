let mobile = {
  name: "vivo",
  price: 20000,
  color: "sky",
  isNew: true,
  cemera: "25mq",
};
// console.log(mobile);

// object = for in
for (let pops in mobile) {
  //   console.log(pops);
  //   console.log(pops + " : " + mobile[pops]);
}

for (let pops in mobile) {
  console.log(pops);
  console.log(mobile[pops]);
}
const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

for (let prop in myObject) {
  console.log(myObject[prop]);
}
// =====================================
const x = "";
if (!x.length) {
  console.log("Hey");
} else {
  console.log("Hi");
}
// ---------------
const str = "Hello";
str[0] = "h";
console.log(str);
