function fv1() {
    var i = prompt("Kérem a számot!");
    var str = "";
    for (j = 1; j <= i; j++)
        str += "<option>" + j + "</option>";
    document.getElementById("s").innerHTML = str
}

function displayDate() {
    console.log("Hello");
    alert("Hello...\n\nMost a böngésző értelmezi a JavaScript kódot.");
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleDateString();
    document.getElementById("demo2").innerHTML = d.toLocaleTimeString();

}

function fv2() {

    var x, y, z, s, t;
    x = prompt("Type a number");
    y = prompt("Type a number");
    z = prompt("Type a number");
    s = prompt("Type a number");
    t = prompt("Type a number");
    var tomb = [x, y, z, s, t]
    var osszeg = Number(x) + Number(y) + Number(z) + Number(s) + Number(t);
    var szorzat = Number(x) * Number(y) * Number(z) * Number(s) * Number(t);
    document.getElementById("ossz").innerHTML = "A tömb elemeinek összege: " + osszeg;
    document.getElementById("szorz").innerHTML = "A tömb elemeinek szorzata: " + szorzat;
}   

function kirajzol() {
    switch (document.getElementById("sikidom").value) {
        case "kor":
            r = prompt("Kérem a sugarat");
            rand = Math.floor(Math.random() * t.length);
            str = "A kör területe: " + r * r * Math.PI + "<br><br><svg><circle cx=100 cy=100 r=" + r + " fill=" + t[rand] + "></circle></svg>"
            document.getElementById("ide").innerHTML = str;
            break;
        case "teglalap":
            szel = prompt("Kérem a szélességet");
            mag = prompt("Kérem a magasságot");
            random = Math.floor(Math.random() * t.length);
            szoveg = "A téglalap területe: " + szel * mag + "<br><br><svg><rect width=" + szel + " height=" + mag + " fill=" + t[random] + "></rect></svg>"
            document.getElementById("ide").innerHTML = szoveg;
            break;

    }
}

t = new Array("red");
function felvesz() {
    t.push(document.getElementById("szin").value);

}

function csere()
{
var kepjobbid = document.getElementById("kepjobb");
var kepbalid = document.getElementById("kepbal");
var kepjobbsrc = kepjobbid.src;
var kepbalsrc = kepbalid.src;
kepjobb.src = kepbalsrc;
kepbal.src = kepjobbsrc;

}
