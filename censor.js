function censor() {
  let mas = new Array();
  let str = "0";

  return function (arg, arg2 = 0) {
    if (arg2 == 0) {
      str = arg.replace(new RegExp(mas[0], "gi"), mas[1]);
      for (var i = 0; i < mas.length / 2; i++) {
        str = str.replace(new RegExp(mas[2 * i], "gi"), mas[1 + 2 * i]);
      }
    } else {
      masPush = mas.push(arg, arg2);

      return masPush;
    }
    console.log(str);
  };
}
const ChangeScene = censor();

ChangeScene("PHP", "JS");
ChangeScene("backend", "frontend");
ChangeScene("asd", "asd");
ChangeScene("bacasdakend", "asdasdasd");
ChangeScene("good", "cools");

ChangeScene("PHP PHPPHP is good form Backend BackendBackend");

// то же самое через двумерный массив с выводом в html
// document.querySelector("button").onclick = myClick;
// let index = 0;
// let mas = new Array();
// function myClick() {
//   let elementMas = document.querySelector(".inputText").value;
//   let test = elementMas.split(",");

//   if (test[1] == undefined) {
//     endEltmtntSplit = elementMas.split(" ");
//     let length = endEltmtntSplit.length;
//     for (var k = 0; k < lengthMas; k++) {
//       for (var i = 0; i < length; i++) {
//         if (mas[k][0] == endEltmtntSplit[i]) {
//           endEltmtntSplit[i] = mas[k][1];
//         }
//       }
//     }
//     console.log(endEltmtntSplit);
//     let out = endEltmtntSplit.join(" ");
//     document.querySelector(".out").innerHTML = out;
//   } else {
//     mas[index] = test;
//     index = index + 1;
//     lengthMas = mas.length;
//     document.querySelector(".outMas").innerHTML = "[" + mas + "]" + "\n";
//   }

//   document.querySelector(".inputText").value = "";
// }
