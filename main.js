Webcam.set({
    width:360,
    height:250,
    Image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='image' src='" + data_uri + "'>";
    });
}

console.log("ml5 version", ml5.version);

//https://teachablemachine.withgoogle.com/models/ButkXW7xJ/

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ButkXW7xJ/model/json", modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded!");
}

