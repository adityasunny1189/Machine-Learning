let classifier;
let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('images/dog2.jpg');
}

function setup() {
  createCanvas(600, 600);
  classifier.classify(img, gotResult);
  image(img, 0, 0);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  createDiv('Label: ' + results[0].label);
  createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
}