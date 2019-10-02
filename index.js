function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

let words = shuffle([
"blížit k nule na nekonečně malou vzdálenost",
"přesvědčen o tom",
"uvědom si",
"stotožnit se",
"všimni si",
"jestli ti to místo nevyhovuje",
"přijmi to",
"tak třebá",
"udělej si tabulku",
"asymptota",
"méně x",
"Matěj čáp",
"Pepa Kubr",
"Kartézská soustava",
"Petr Pelda",
"Petr Jiroušek",
]);


let table = document.createElement("table");

for (let i = 0; i < 3; i++) {
  let tr = document.createElement("tr");

  for (let j = 0; j < 3; j++) {
    let test = document.createElement("td");
    test.innerHTML = words[i * 3 + j];
    tr.appendChild(test);
  }

  table.appendChild(tr);
}

document.body.appendChild(table);
