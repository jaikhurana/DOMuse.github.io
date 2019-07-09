var button=document.getElementById("click");
var text=document.getElementById("inputtext");
function length(){
    return text.value.length;
}
function addtolist(){
    var ul=document.getElementById("list");
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(text.value));
    ul.appendChild(li);
    text.value="";
}
button.addEventListener('click',function(){
    
    if(length() > 0){
    addtolist();   
}
})
text.addEventListener('keypress',function(event){
    //var text=document.getElementById("inputtext");
    
    if(length() > 0 && event.keyCode==13){
    addtolist();
}
})