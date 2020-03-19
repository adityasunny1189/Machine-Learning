// let classifier;
// let img;

// function preload() {
//   classifier = ml5.imageClassifier('MobileNet');
//   img = loadImage('images/dog2.jpg');
// }

// function setup() {
//   createCanvas(600, 600);
//   classifier.classify(img, gotResult);
//   image(img, 0, 0);
// }

// function gotResult(error, results) {
//   if (error) {
//     console.error(error);
//   }
//   console.log(results);
//   createDiv('Label: ' + results[0].label);
//   createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
// }






let classifier;
let video;
let resultsP;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  classifier = ml5.imageClassifier('MobileNet', video, modelReady);
  resultsP = createP('Loading model and video...');
}

function modelReady() {
  console.log('Model Ready');
  classifyVideo();
}

function classifyVideo() {
  classifier.classify(gotResult);
}

function gotResult(err, results) {
  resultsP.html(results[0].label + ' ' + nf(results[0].confidence, 0, 2));
  classifyVideo();
}