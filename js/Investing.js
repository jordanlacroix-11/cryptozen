function rendeles() {
    alert("Successfull order! Email sent with information.");
}

function hozzaad() {
    var d = document.getElementById("ide");
    var v = document.getElementById("varos").value;
    var option = document.createElement("option");
    option.text = v;
    d.add(option);
}

function rendel(){
    var csomag = document.getElementById("csomag").value;
    var szoveg = "Végösszeg: ";
    var osszeg = 0;

    if (csomag == document.getElementById("1day").value)
        osszeg = 17000;
    else
        osszeg = 30000;
    szoveg = "Végösszeg: " + osszeg + " Ft";
    document.getElementById("vegosszeg").innerHTML = szoveg;

    var darab = document.getElementById("darab").value;
    if (darab > 0) {
        osszeg = osszeg + darab * 3000;
    }
    szoveg = "Végösszeg: " + osszeg + " Ft";
    document.getElementById("vegosszeg").innerHTML = szoveg;
}

function hideShowDiv(val){
  if (val==1){
    document.getElementById('div').style.display='block';
  }
  else {
    document.getElementById('div').style.display='none';
  }
}