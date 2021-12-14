const express = require('express')
const app = express();
var FastText = require('node-fasttext');
const cors = require('cors');


let config = { 
  dim: 100,
  input: "train.txt",
  output: "model"
}

FastText.train("supervised", config, function (success, error) {

  if(error) {
    console.log(error)
    return;
  }
  
  console.log(success)
  
})

//middleware
app.use(express.static(__dirname+'/public'))
app.use(cors())
app.use(express.urlencoded({extended:false}))



app.post('/fasttext', (req,res)=>{
  var statement = req.body.text;
  var clasfaction = getFastTextResults(statement);
    res.json({success:true, data:clasfaction});
})

function getFastTextResults(statement) {
	//predict returns an array with the input and predictions for best cateogires
  var statment2 = '';
	FastText.predict(
		"model.bin", 3,
		[statement],
		function (success, error) {

		  if(error) {
			console.log(error)
			return;
		  }
       statment2 = success[0].label;
		  // console.log(success)
		})
	return statment2;
}

app.listen(3000, () => {
  console.log('Listening on port 8000!')
});
