document.getElementById('form-submit').addEventListener('submit' , post);

function post(e){
    e.preventDefault();    
    var text = document.getElementById('input-text').value;
    var prams = "text="+text;
    var request = new XMLHttpRequest();
    request.open('POST','./fasttext',true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.onload = function(){
        var classftion = JSON.parse(this.responseText)
        console.log(classftion.data);
    }
    request.send(prams);


}