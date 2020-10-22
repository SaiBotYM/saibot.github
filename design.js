function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h: h;
  m = (m < 10) ? "0" + m: m;
  s = (s < 10) ? "0" + s: s;

  var time = h + ":" + m + ":" + s;




  document.getElementById("dafaprasetya").innerText = time;
  document.getElementById("dafaprasetya").textContent = time;
}

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  } else if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h: h;
  m = (m < 10) ? "0" + m: m;
  s = (s < 10) ? "0" + s: s;

  var time = h + ":" + m + ":" + s;




  document.getElementById("jam").innerText = time;
  document.getElementById("jam").textContent = time;
}
setInterval(showTime, 1000);
showTime();

function pm() {
  date = new Date();
  h = date.getHours();
  waktu = "AM";
  if (h > 12) {
    h = h - 12;
    waktu = "PM";
  }
  var naon = waktu;

  document.getElementById('pm').innerText = naon;
  document.getElementById('pm').textContent = naon;
}


function ingat() {
  date = new Date();
  jam = date.getHours()
  waktu = "malam"

  if (jam == 0) {
    waktu = ">/////<"
  }
  if (jam == 22) {
    waktu = ">/////<"
  } else {
    waktu = ">/////<"
  }


  var oon = waktu
  document.getElementById("pengingat").innerText = oon;
  document.getElementById("pengingat").textContent = oon;
}
ingat();
function inget() {
  date = new Date();
  jam = date.getHours()
  waktu = "malam"



  if (jam == 0) {
    waktu = "Dibilangin Jangan Begadang!!"
  }

  if (jam >= 1) {
    waktu = "Tiduur!!"
  }
  if (jam == 6) {
    waktu = "Solat subuh dulu^^"
  }
  if (jam >= 5) {
    waktu = "Pagiii"
  }
  if (jam >= 8) {
    waktu = "Pagiii, Jangan Lupa Makan^^"
  }
  if (jam >= 10) {
    waktu = "Selamat pagi menjelang siang^^"
  }
  if (jam >= 12) {
    waktu = "Sianggg"
  }
  if (jam >= 13) {
    waktu = "Tidur siang dulu sana dan jangan lupa makan^^"
  }
  if (jam == 15) {
    waktu = "Udah bangun?"
  }
  if (jam >= 16) {
    waktu = "Mandi sana"
  }
  if (jam >= 18) {
    waktu = "solat"
  }
  if (jam == 19) {
    waktu = "Malam"

  }
  if (jam >= 20) {
    waktu = "Malam^^"
  }
  if (jam >= 22) {
    waktu = "Jangan Begadang"
  }
  if (jam == 23) {
    waktu = "jangan begadang!"
  }


  var oon = waktu
  var jjam = jam
  document.getElementById("test").innerText = jjam;
  document.getElementById("test").textContent = jjam;
  document.getElementById("inget").innerText = oon;
  ///document.getElementById("inget").textContent = oon;
}
inget();


var c = 0;
function clik() {
  if (c == 0) {
    document.getElementById('bok').style.display = "block"
    document.getElementById('themeSwitch').style.display = "block"
    c = 1
  } else {
    document.getElementById('bok').style.display = "none"
    document.getElementById('themeSwitch').style.display = "none"
    c = 0
  }
}
function musik() {
  if (c == 0) {
    document.getElementById('musik').style.display = "block"
    c = 1
  } else {
    document.getElementById('musik').style.display = "none"
    c = 0
  }
}
function gantitema() {
  if (c == 0) {
    document.getElementById('tema').style.display = "block"
    c = 1
  } else {
    document.getElementById('tema').style.display = "none"
    c = 0
  }
}



const quotes = [{
  "quote": "Hai Novia"
  "source": "Syahrul"
},
  {
    "quote": "klik tombolnya",
    "source": "Selamat Menjawab pertanyaan"
  },
  {
    "quote": "love you",
    "source": ">////<"
  },
  {
    "quote": "hehe",
    "source": ">////<"
  },
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `"${random.quote}"`;
  source.innerText = random.source;
}

setInterval(randomQuote, 2000);


function saran() {
  var search = document.getElementById("saran").value;
  var url = "https://api.whatsapp.com/send?phone=6285691441039&text="+search
  if (search == "") {
    alert("isi dulu tong")
    document.getElementById('link')
  } else {
    window.location.href = url;
  }
}
function sarantutup() {
  if (c == 0) {
    document.getElementById('saranbox').style.display = "block"
    c = 1
  } else {
    document.getElementById('saranbox').style.display = "none"
    c = 0
  }
}
