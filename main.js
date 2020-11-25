function setup()
{
   Canvas = createCanvas(300 , 300);
   Canvas.center();
   Video = createCapture(VIDEO);
   Video.hide();
   Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uF4NLslli/model.json' , ModelLoaded );
}

function ModelLoaded()
{
   console.log("Model is Loaded");
}

function draw()
{
    image(Video , 0 , 0 , 300 , 300);
   Classifier.classify(Video , GotResult); 
}

function GotResult(error , results)
{
   if (error) {
      console.error(error);
   } 
   else {
   console.log(results);
   

   if(results[0].label == "Mom"){
      document.getElementById("Result_Object_Name").innerHTML = "Mom"
    }
    
        if(results[0].label == "Dad"){
      document.getElementById("Result_Object_Name").innerHTML = "Dad"
    }
   document.getElementById("Result_Object_Accuracy").innerHTML = results[0].confidence.toFixed(2);

   }
}