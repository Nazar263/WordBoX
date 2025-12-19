

if (localStorage.getItem("flag")) {
 
} else {
 let flex1 = document.getElementById("left_dictionary");
flex1.classList.add("flex");
}
function dont() {
 
 let flex2= document.getElementById("left_dictionary");
 flex2.classList.remove("flex");
flex2.classList.add("dont_flex");
localStorage.setItem("flag","true")
}

function viddil1_yes() {
 let vid1 = document.getElementById("vidil_1");
 vid1.classList.remove("vidil_1_no");
 vid1.classList.add("vidil_1_yes");
 
}
function viddil1_no() {
let vid_1 = document.getElementById("vidil_1");
 vid_1.classList.remove("vidil_1_yes");
 vid_1.classList.add("vidil_1_no")
}

function save_table() {
 let tableHTML = document.getElementById("word").innerHTML;
 localStorage.setItem("my_save",tableHTML);
 alert("СЛОВНИК ЗБЕРЕЖЕНО!")
 
}

function addRow() {
 let table= document.getElementById("word");
 let row = table.insertRow();
 row.contentEditable = "true";
 row.insertCell(0).innerText = "";
 row.insertCell(1).innerText = "";
 row.insertCell(2).innerText = "";
}

function viddil2_yes() {
 let vid2 = document.getElementById("vidil_2");
 vid2.classList.remove("vidil_1_no");
 vid2.classList.add("vidil_1_yes");
}

function viddil2_no() {
let vid_2 = document.getElementById("vidil_2");
 vid_2.classList.remove("vidil_1_yes");
 vid_2.classList.add("vidil_1_no");
}

function save_table2() {
 let tableHTML2 = document.getElementById("word2").innerHTML;
 localStorage.setItem("my_save2",tableHTML2);
 alert("СЛОВНИК ЗБЕРЕЖЕНО!")
}

function addRow2() {
 let table2= document.getElementById("word2");
 let row2 = table2.insertRow();
 row2.contentEditable = "true";
 row2.insertCell(0).innerText = "";
 row2.insertCell(1).innerText = "";
 row2.insertCell(2).innerText = "";
 
}

function viddil3_yes() {
 let vid3 = document.getElementById("vidil_3");
 vid3.classList.remove("vidil_1_no");
 vid3.classList.add("vidil_1_yes");
}


function viddil3_no() {
let vid_3 = document.getElementById("vidil_3");
 vid_3.classList.remove("vidil_1_yes");
 vid_3.classList.add("vidil_1_no");
}

function save_table3() {
 let tableHTML3 = document.getElementById("word3").innerHTML;
 localStorage.setItem("my_save3",tableHTML3);
 alert("СЛОВНИК ЗБЕРЕЖЕНО!")
}

function addRow3() {
 let table3= document.getElementById("word3");
 let row3 = table3.insertRow();
 row3.contentEditable = "true";
 row3.insertCell(0).innerText = "";
 row3.insertCell(1).innerText = "";
 row3.insertCell(2).innerText = "";
 
}


function viddil4_yes() {
 let vid4 = document.getElementById("vidil_4");
 vid4.classList.remove("vidil_1_no");
 vid4.classList.add("vidil_1_yes");
}


function viddil4_no() {
let vid_4 = document.getElementById("vidil_4");
 vid_4.classList.remove("vidil_1_yes");
 vid_4.classList.add("vidil_1_no");
}

function save_table4() {
 let tableHTML4 = document.getElementById("word4").innerHTML;
 localStorage.setItem("my_save4",tableHTML4);
 alert("СЛОВНИК ЗБЕРЕЖЕНО!")
}

function addRow4() {
 let table4= document.getElementById("word4");
 let row4 = table4.insertRow();
 row4.contentEditable = "true";
 row4.insertCell(0).innerText = "";
 row4.insertCell(1).innerText = "";
 row4.insertCell(2).innerText = "";
 
}


function viddil5_yes() {
 let vid5 = document.getElementById("vidil_5");
 vid5.classList.remove("vidil_1_no");
 vid5.classList.add("vidil_1_yes");
}


function viddil5_no() {
let vid_5 = document.getElementById("vidil_5");
 vid_5.classList.remove("vidil_1_yes");
 vid_5.classList.add("vidil_1_no");
}

function save_table5() {
 let tableHTML5 = document.getElementById("word5").innerHTML;
 localStorage.setItem("my_save5",tableHTML5);
 alert("СЛОВНИК ЗБЕРЕЖЕНО!")
}
window.onload = function () {
 let saved5 = localStorage.getItem("my_save5");
 if (saved5) {
  document.getElementById("word5").innerHTML=saved5
 }
}
function addRow5() {
 let table5= document.getElementById("word5");
 let row5 = table5.insertRow();
 row5.contentEditable = "true";
 row5.insertCell(0).innerText = "";
 row5.insertCell(1).innerText = "";
 row5.insertCell(2).innerText = "";
 
}



function viddil6_yes() {
 let vid6 = document.getElementById("vidil_6");
 vid6.classList.remove("vidil_1_no");
 vid6.classList.add("vidil_1_yes");
}


function viddil6_no() {
let vid_6 = document.getElementById("vidil_6");
 vid_6.classList.remove("vidil_1_yes");
 vid_6.classList.add("vidil_1_no");
}

function save_table6() {
 let tableHTML6 = document.getElementById("word6").innerHTML;
 localStorage.setItem("my_save6",tableHTML6);
 alert("СЛОВНИК ЗБЕРЕЖЕНО!")
}

function addRow6() {
 let table6= document.getElementById("word6");
 let row6 = table6.insertRow();
 row6.contentEditable = "true";
 row6.insertCell(0).innerText = "";
 row6.insertCell(1).innerText = "";
 row6.insertCell(2).innerText = "";
 
}


function viddil7_yes() {
 let vid7 = document.getElementById("vidil_7");
 vid7.classList.remove("vidil_1_no");
 vid7.classList.add("vidil_1_yes");
}

function viddil7_no() {
let vid_7 = document.getElementById("vidil_7");
 vid_7.classList.remove("vidil_1_yes");
 vid_7.classList.add("vidil_1_no");
}

function save_table7() {
 let tableHTML7 = document.getElementById("word7").innerHTML;
 localStorage.setItem("my_save7",tableHTML7);
 alert("СЛОВНИК ЗБЕРЕЖЕНО!")
}

function addRow7() {
 let table7 = document.getElementById("word7");
 let row7 = table7.insertRow();
 row7.contentEditable = "true";
 row7.insertCell(0).innerText = "";
 row7.insertCell(1).innerText = "";
 row7.insertCell(2).innerText = "";
 
}



function viddil8_yes() {
 let vid8 = document.getElementById("vidil_8");
 vid8.classList.remove("vidil_1_no");
 vid8.classList.add("vidil_1_yes");
}

function viddil8_no() {
let vid_8 = document.getElementById("vidil_8");
 vid_8.classList.remove("vidil_1_yes");
 vid_8.classList.add("vidil_1_no");
}

function save_table8() {
 let tableHTML8 = document.getElementById("word8").innerHTML;
 localStorage.setItem("my_save8",tableHTML8);
 alert("СЛОВНИК ЗБЕРЕЖЕНО!")
}

function addRow8() {
 let table8 = document.getElementById("word8");
 let row8 = table8.insertRow();
 row8.contentEditable = "true";
 row8.insertCell(0).innerText = "";
 row8.insertCell(1).innerText = "";
 row8.insertCell(2).innerText = "";
 
}

function open5() {
 let platforma1= document.getElementById("open");
 platforma1.classList.remove("no");
 platforma1.classList.add("open_yes");
}

function closed() {
let platforma2= document.getElementById("open");
 platforma2.classList.remove("open_yes");
 platforma2.classList.add("no");
}


function see_glob() {
 let see1 = document.getElementById("see");
 see1.classList.remove("no");
 see1.classList.add("see_yes")
}
function no_see() {
 let see2 = document.getElementById("see");
 see2.classList.remove("see_yes");
 see2.classList.add("no")
}


function delte() {
 localStorage.clear()
 alert("СЛОВНИК ОЧИЩЕНИЙ! ( ПЕРЕЗАЙДІТЬ НА СТОРІНКУ, ЩОБ ЗМІНИ ВВІЙШЛИ В ДІЮ)")
}

window.onload = function () {
 let saved = localStorage.getItem("my_save");
 if (saved) {
  document.getElementById("word").innerHTML=saved
 }
 
 let saved2 = localStorage.getItem("my_save2");
 if (saved2) {
  document.getElementById("word2").innerHTML=saved2
 }
 
 let saved3 = localStorage.getItem("my_save3");
 if (saved3) {
  document.getElementById("word3").innerHTML=saved3
 }
 
 let saved4 = localStorage.getItem("my_save4");
 if (saved4) {
  document.getElementById("word4").innerHTML=saved4
 }
 
 let saved5 = localStorage.getItem("my_save5");
 if (saved5) {
  document.getElementById("word5").innerHTML=saved5
 }
 
 let saved6 = localStorage.getItem("my_save6");
 if (saved6) {
  document.getElementById("word6").innerHTML=saved6
 }
 
 let saved7 = localStorage.getItem("my_save7");
 if (saved7) {
  document.getElementById("word7").innerHTML=saved7
 }
 
 let saved8 = localStorage.getItem("my_save8");
 if (saved8) {
  document.getElementById("word8").innerHTML=saved8
 }

 
}

function see3() {
 let r = document.getElementById("one");
 r.classList.remove("no")
 r.classList.add("one")
}

function see_no() {
 let r1 = document.getElementById("one");
 r1.classList.remove("one")
 r1.classList.add("no")
}

function rows() {
 const row = document.querySelectorAll("tr[contenteditable='true']");
 let count = 0;
 row.forEach(r=>{
  if (Array.from(r.cells).some(c=>c.textContent.trim() !== ''))count++;
   
  });
  document.getElementById("rahunok_glob").textContent = count;
}
function see_no2() {
 let r2 = document.getElementById("one2");
 r2.classList.remove("one")
 r2.classList.add("no")
}

function see4() {
 let r3 = document.getElementById("one2");
 r3.classList.remove("no");
 r3.classList.add("one");
}
function minus() {
document.getElementById("wordd10").value ="";
}



