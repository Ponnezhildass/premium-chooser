const irr = (a1, a2, f1, f2) => {
  var xirr = require("xirr");
  var diff = a1 - a2;
  var time = f1 / f2;
  var values = [];
  values.push({ amount: diff, when: new Date(2021, 0, 2) });
  for (let i = 1; i < time; i++) {
    let ele = { amount: -a2, when: new Date(2021, (i * 12) / time, 2) };
    values.push(ele);
  }
  var rate = xirr(values);
  return rate * 100;
};

export { irr };
