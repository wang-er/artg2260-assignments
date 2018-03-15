var mapimg;

var dunkinpin;
var starbuckspin;
var pinsize = 20;

var clat = 42.3477195;
var clon = -71.0675076;



var lat;
var lon;



var zoom = 12.5;
var dunkin;
var starbucks;

function preload() {
 mapimg = loadImage('https://api.mapbox.com/styles/v1/p0yo/cjeqfb9peeuv22qqqnmj5mecj/static/-71.0675076, 42.3477195,12.5,0,0/800x600?access_token=pk.eyJ1IjoicDB5byIsImEiOiJjamVxNmZ6YW8wMXQ0MnhwOTM1ZXd1dGNvIn0.xwXdh8Q1UIXEPV90g1Oq9g')
 dunkin = loadStrings('assets/dunkin.csv');
 starbucks = loadStrings('assets/starbucks.csv');

 dunkinpin = loadImage('assets/dunkinpin.png');
 starbuckspin = loadImage('assets/starbuckspin.png');

}

function setup() {
  createCanvas(800,600);
  translate(width/2, height/2);
  imageMode(CENTER);
  image(mapimg, 0 ,0);

  var cx = mercX(clon);
  var cy = mercY(clat);

  
      for (var i = 0; i < starbucks.length; i++) {
    var starbucksdata = starbucks[i].split(/,/);
    var lat = starbucksdata[4];
    var lon = starbucksdata[5];

  var x = mercX(lon) - cx;
  var y = mercY(lat) - cy;

  //fill(0, 255, 100, 200);
  //ellipse(x, y, 10, 10);
  image(starbuckspin, x, y, pinsize, pinsize);

  }

  for (var i = 0; i < dunkin.length; i++) {
    var dunkindata = dunkin[i].split(/,/);
    var lat = dunkindata[4];
    var lon = dunkindata[5];

  var x = mercX(lon) - cx;
  var y = mercY(lat) - cy;

  //fill(255, 0, 255, 200);
  //ellipse(x, y, 10, 10);

  image(dunkinpin, x, y, pinsize, pinsize);

  }


//northeastern's place

var lat = 42.3398;
var lon = -71.0892;

  var x = mercX(lon) - cx;
  var y = mercY(lat) - cy;

  fill(255, 0, 0, 200);
  ellipse(x, y, 10, 10);


}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI/4 + lat/2);
  var c = PI - log(b);
  return a * c;
}
