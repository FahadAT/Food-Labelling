document.getElementById('form-submit').addEventListener('submit', post);

function post(e) {
    e.preventDefault();
    var text = document.getElementById('Text').value;
    var prams = "text=" + text;
    var request = new XMLHttpRequest();
    request.open('POST', './fasttext', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.onload = function () {
        var classification = JSON.parse(this.responseText)
        // console.log(classftion.data);
        if (classification.data.length > 3){
            var label = classification.data.substring(9, classification.data.length); 
            var result = "<div class = 'card'> <div class='inner_card'>" + text + "</div> <div class = 'right_side'>" +"LABEL:"+ label+ "</div></div>"
            document.getElementById("result_card").innerHTML +=result;
        }else{
            if (text.length == 0){
                text = "Empty text";
            }
            var result = "<div class = 'card'> <div class='inner_card'>" + text+ "</div> <div class = 'right_side'>" +"LABEL:"+ classification.data+ "</div></div>"
            document.getElementById("result_card").innerHTML +=result;
        }

    }
    request.send(prams);


}
