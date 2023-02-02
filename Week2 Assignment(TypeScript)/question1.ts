var d = new Date();
var pred = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
console.log(pred);

var nowd;
let sat_array = ' ';

for (let i = 1; i <= pred; i++) {
  nowd = new Date(d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + i);

  console.log(nowd.toDateString());

  if (nowd.getUTCDay() == 5) {
    sat_array = sat_array + nowd.toDateString();
  }
}

console.log(`Saturday List: ` + ',' + sat_array);
