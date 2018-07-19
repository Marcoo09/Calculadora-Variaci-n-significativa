
function toSeconds(str) {
    var pieces = str.split(".");
    var result = Number(pieces[0]) + "minutos" + ":" + (Number(pieces[1]) * 6).toFixed(0) + " segundos";
    return(result);
}

function calculateTime(){
	let totalTime = 0;
	let ligthsQty = $("#light").val();
	let speed = $("#speed").val();
	let distance2 = (4/3)*ligthsQty;
	let distance1 = (60/speed)*(45-((3*(speed*0.278*15))/2000)*ligthsQty);
	let output = toSeconds((distance1 + distance2).toFixed(1).toString())
	$("#result").html(output)
	newElement(output, distance1 + distance2)
}

let parameters = {
"id": "ggbApplet",
"width":1000,
"height":700,
"showMenuBar":true,
"showAlgebraInput":true,
"showToolBar":true,
"customToolBar":"0 77 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
"showToolBarHelp":true,
"showResetIcon":false,
"enableLabelDrags":false,
"enableShiftDragZoom":true,
"enableRightClick":false,
"errorDialogsActive":false,
"useBrowserForJS":false,
"allowStyleBar":false,
"preventFocus":false,
"showZoomButtons":true,
// add code here to run when rhe applet starts
"appletOnLoad":function(api){ /* api.evalCommand('Segment((1,2),(3,4))');*/ },
"showFullscreenButton":true,
"scale":1,
"disableAutoScale":false,
"allowUpscale":false,
"clickToLoad":false,
"appName":"graphing",
"showSuggestionButtons":true,
"buttonRounding":0.7,
"buttonShadows":false,
"language":"es",
// use this instead of ggbBase64 to load a material from geogebra.org
// "material_id":"RHYH3UQ8",
// use this instead of ggbBase64 to load a .ggb file
// "filename":"myfile.ggb",
"ggbBase64":"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",
}
// is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
let views = {'is3D': 0,'AV': 1,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0}
let applet = new GGBApplet(parameters, '5.0', views)
window.onload = function() {applet.inject('ggbApplet')}
applet.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png')


/*To DO List con resultados*/

var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
/*var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);*/

// Create a new list item when clicking on the "Add" button
function newElement(output,result) {
  let resultToCompare = document.getElementById("variantSig").value;
  if(resultToCompare == ""){
    resultToCompare = 43;
  }
  let li = document.createElement("li");
  let t = document.createTextNode(output);
  li.appendChild(t);
  if (Math.abs(result - resultToCompare) > 5 ) {
  	li.className = "variant";
  } else {
    li.className = "without-variant";
  }
  document.getElementById("myUL").appendChild(li);

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}