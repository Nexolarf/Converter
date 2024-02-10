  /*===========================SELECT===========================*/

  function getValue1(value) {
    if (value == Number(value)) {
      share1 = value;
      if (share1 < 5) {
        select1TXT.innerHTML = "-ичный";
      } else {
        select1TXT.innerHTML = "-ричный";
      }  
      for (let i = 0; i < 36; i++) {
        let none = document.getElementById(i);
        none.style.display = "none";
      }
      for (let i = 0; i < value; i++) {
        let inline = document.getElementById(i);
        inline.style.display = "inline";
      }
    } else {
      select1.innerHTML = "";
      if (value == "all") {
        let back = document.createElement("option");
        back.value = "back";
        back.innerHTML = "&#8617;";
        select1.appendChild(back);
        for (let i = 2; i < 37; i++) {
          let j = document.createElement("option");
          j.value = i;
          j.innerHTML = i;
          select1.appendChild(j);
        }
        select1[9].selected = true;
      } else {
        for (let i = 0; i < 4; i++) {
          let j = document.createElement("option");
          j.value = options[i];
          j.innerHTML = options[i];
          select1.appendChild(j);
        }
        let all = document.createElement("option");
        all.value = "all";
        all.innerHTML = "Все";
        select1.appendChild(all);
        select1[2].selected = true;
      }
    }
    erase();
  }

  function getValue2(value) {
    if (value == Number(value)) {
      share2 = value;
      if (share2 < 5) {
        select2TXT.innerHTML = "-ичный";
      } else {
        select2TXT.innerHTML = "-ричный";
      }
    } else {
      select2.innerHTML = "";
      if (value == "all") {
        let back = document.createElement("option");
        back.value = "back";
        back.innerHTML = "&#8617;";
        select2.appendChild(back);
        for (let i = 2; i < 37; i++) {
          let j = document.createElement("option");
          j.value = i;
          j.innerHTML = i;
          select2.appendChild(j);
        }
        select2[9].selected = true;
      } else {
        for (let i = 0; i < 4; i++) {
          let j = document.createElement("option");
          j.value = options[i];
          j.innerHTML = options[i];
          select2.appendChild(j);
        }
        let all = document.createElement("option");
        all.value = "all";
        all.innerHTML = "Все";
        select2.appendChild(all);
        select2[2].selected = true;
      }
    }
    if(enter.innerHTML != "Введите число"){
    final();
    }
  }

  /*===========================CHECKBOX===========================*/

  function decisionON(check) {
    if (enter.innerHTML != "Введите число"){
      if (check) {
        decision.style.display = "block";
      } else {
        decision.style.display = "none";
      }
    }
  }

  /*===========================INPUT & DELETE===========================*/

  function num(i) {
    console.log(String(antiTrans(enter.innerHTML, false)).split('').indexOf('e'))
    if (
      enter.innerHTML == "Введите число" ||
      String(antiTrans(enter.innerHTML, false)).split('').indexOf('e') == -1
    ) {
      if (enter.innerHTML == "Введите число") {
        enter.innerHTML = "";
      }
      enter.innerHTML = enter.innerHTML + String(i);
      final();
    } else {
      alert("Слишком большое число!");
    }
  }

  function del() {
    if (enter.innerHTML != "Введите число") {
      let i = enter.innerHTML.split("");
      delete i[i.length - 1];
      if (i.length == 1) {
        enter.innerHTML = "Введите число";
        res.innerHTML = "Ответ";
        decision.style.display = "none";
        decisionB.style.display = "none";
      } else {
        enter.innerHTML = i.join("");
        final();
      }
    }
  }

  function erase() {
    enter.innerHTML = "Введите число";
    res.innerHTML = "Ответ";
    decision.style.display = "none";
    decisionB.style.display = "none";
  }

  /*===========================TRANSLATE===========================*/

  function final() {
    let result = enter.innerHTML;
    if (share1 == 10) {
      result = trans(result);
    } else {
      result = antiTrans(result);
      if (share2 != 10) {
        result = trans(result);
      }
    }
    res.innerHTML = result;
  }
  function getRandom(min = 1, max = 4) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function trans(ent) {
    ent = Number(ent);
    let ansDemo = [],
      ans = [];
    decision.style.display = "inline";
    decision.innerHTML = "";
    decision.appendChild(saverow);
    for (let i = 0; ent > 0; i++) {
      ansDemo[i] = ent % share2;
      if (ansDemo[i] > 9) {
        ansDemo[i] = AlfaNum(ansDemo[i]);
      }
      let row = document.createElement("tr");
      row.style.fontSize = "17px";
      row.style.fontFamily = "TekturTight";
      row.innerHTML = "<td>" + ent + "/" + share2 + "</td><td>" + ((ent - (ent % share2)) / share2) + "</td>";
      if (ent % share2 > 9) {
        row.innerHTML = row.innerHTML +"<td>" +(ent % share2) +"&#8594;" + AlfaNum(ent % share2) +"</td>";
      } else {
        row.innerHTML = row.innerHTML + "<td>" + (ent % share2) + "</td>";
      }
      switch (decColor) {
        case 1:
          row.style.color = "#FFCF40";
          break;
        case 2:
          row.style.color = "#F4A900";
          break;
        default:
        case 3:
          row.style.color = "#EDFF21";
          break;
        case 4:
          row.style.color = "#E1CC4F";
          break;
      }
      decColor++
      if (decColor == 5) {
        decColor = 1;
      }  
      decision.appendChild(row);
      ent = (ent - (ent % share2)) / share2;
    }
    ans = ansDemo.reverse();
    ans = ans.join("");
    return ans;
  }

  function antiTrans(ent, aboba = true) {
    let ansDemo = [],
      ans = 0;
    ent = ent.split(" ").join("");
    ent = ent.split("");
    ansDemo = ent.reverse();
    for (let i = 0; i < ent.length; i++) {
      if (ansDemo[i] != Number(ansDemo[i])) {
        ansDemo[i] = AlfaNum(ansDemo[i]);
      }
    }
    ansDemo = ansDemo.map(Number);
    if (aboba) {
      decisionB.style.display = "inline";
      decisionB.innerHTML = "";
      decisionB.appendChild(saverow2);
    }
    for (let i = 0; i < ent.length; i++) {
      ans = ans + ansDemo[i] * share1 ** i;
      if (aboba) {
        let row = document.createElement("tr");
        row.innerHTML = "<td>" + ansDemo[i] + "&#xD7;" + share1 + "<sup>" + i + "</sup></td><td>" + ansDemo[i] * share1 ** i + "</td><td>" + ans;
        row.style.fontSize = "17px";
        row.style.fontFamily = "TekturTight";
        switch (decBColor) {
          case 1:
            row.style.color = "#FF2400";
            break;
          case 2:
            row.style.color = "#900020";
            break;
          default:
          case 3:
            row.style.color = "#FF0033";
            break;
          case 4:
            row.style.color = "#92000A";
            break;
        }
        decBColor++
        if (decBColor == 5) {
          decBColor = 1;
        }  
          decisionB.appendChild(row);
        }
    }
    return ans;
  }

  /*===========================OTHER BUTTONS===========================*/

  function reverse() {
    let save = share1;
    share1 = Number(share2);
    share2 = Number(save);
    console.log([share1, share2])
    if (select1.length > 6) {
      select1[share1 - 1].selected = true;
    } else {
      select1[options.indexOf(share1)].selected = true;
    }
    if (select2.length > 6) {
      select2[share2 - 1].selected = true;
    } else {
      select2[options.indexOf(share2)].selected = true;
    }
    if (share1 < 11) {
      select1TXT.innerHTML = "-ичный";
    } else {
      select1TXT.innerHTML = "-ричный";
    }
    for (let i = 0; i < 36; i++) {
      let none = document.getElementById(i);
      none.style.display = "none";
    }
    for (let i = 0; i < share1; i++) {
      let inline = document.getElementById(i);
      inline.style.display = "inline";
    }
    if (enter.innerHTML != "Введите число") {
      save = enter.innerHTML;
      enter.innerHTML = res.innerHTML;
      res.innerHTML = save;
    }
  }

  function AlfaNum(an) {
    let alfabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");
    if (an == Number(an)) {
      return alfabet[an - 10];
    } else {
      return alfabet.indexOf(an) + 10;
    }
  }

