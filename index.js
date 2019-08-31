// Course: MMM (Make Money with Machine Learning) 
// Student: Ravi Kasarla
// Date: 30-Aug-2019
  
var loadFile = function(event) {
	var image = document.getElementById('img');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var classify = function(event) {
	document.getElementById("classify_result").innerHTML = "Hello World";
};


let net;

async function app() {
  const imgEl = document.getElementById('img');
  // console.log("Hello World, imgEl:" + imgEl.naturalWidth  + ":");
  if (imgEl.naturalWidth === 0) {
    document.getElementById("classify_result").innerHTML = "Select Image First...";
    return  
  }
  document.getElementById("classify_result").innerHTML = "Loading MobileNet...";
  // console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  document.getElementById("classify_result").innerHTML = "Sucessfully loaded model...";
  // console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const result = await net.classify(imgEl);
  document.getElementById("classify_result").innerHTML = "<h5>Object: " + result[0].className + "<br>" +
                                                    "Probability:" + result[0].probability + "</h5>";
  console.log(result);
}

app();








