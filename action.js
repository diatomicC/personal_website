/********************************* 
Name:Juhee Hur
Student ID:1155174175 
**********************************/


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function processform(){

    validateForm();
   
    while(validateForm()==true){

        let newComment = document.createElement("div");
        let element = '<div><svg height="100" width="100"><circle cx="50" cy="50" r="40"></svg></div><div><h5></h5><p></p></div>';
        newComment.innerHTML = element;
    
        newComment.className = "d-flex";
        newComment.querySelectorAll("div")[0].className
        = "flex-shrink-0"; 
        newComment.querySelectorAll("div")[1].className
        = "flex-grow-1"; 
    
        let lastComment = document.querySelector("#comments").lastElementChild; 
        newComment.id = 'c' + (Number(lastComment.id.substr(1)) + 1);
        newComment.querySelector("h5").innerHTML = 
        document.querySelector("#new-email").value;
        newComment.querySelector("p").innerHTML = 
        document.querySelector("#new-comment").value;
    
        let color = document.querySelectorAll("input[name=new-color]:checked")[0].value;
        newComment.querySelector("circle").setAttribute("fill", color); 
    
        document.querySelector("#comments").appendChild(newComment);
        document.querySelector("form").reset();

        savefile();

        return 0;


    }
 
}



function validateForm() {

    const comment= document.getElementById("new-comment");
    const email= document.getElementById("new-email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    

    if(comment.value==""){
        comment.classList.add("is-invalid");
        alert("Box must be filled out");
        return false;
    }
    else if(email.value=="")
        {
            alert("incorrect email format");
            email.classList.add("is-invalid");
    
            return false ;
        }
    else if(!email.value.match(mailformat))
    {
        alert("incorrect email format");
            email.classList.add("is-invalid");
    
            return false ;

    }
    else if(email.value.match(mailformat)&&email.value!=""&&comment.value!="")
    {
        comment.classList.remove("is-invalid")
        return true;
    }
  }


 function loadfile(){

    fetch("comments.txt")
    .then(res => res.text())
    .then(txt=>document.querySelector("#comments").innerHTML=txt);
 }

 function savefile(){
    fetch("comments.txt",
    {
        method:'PUT',
        body: document.querySelector("#comments").innerHTML
    
    });
}

function special(){

    var sp = document.getElementById("special");
    if (sp.style.display === "none") {
        sp.style.display = "block";
    } else {
        sp.style.display = "none";
    }


}

function scrollhide(){

    var x = document.getElementById("progressbar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


}
function newhobby(){

    let hobby = prompt("Enter a new hobby");
    var tag = document.createElement("div");
    var text = document.createTextNode(hobby);
    tag.appendChild(text);
    var element = document.getElementById("hobbies");
    element.appendChild(tag);
}

function align(){

    let h = document.querySelectorAll("[id='header']");
    for(var i = 0; i < h.length; i++) 
    {
        h[i].style.textAlign="start";

        if( h[i].style.textAlign = "start")
        {
            h[i].style.textAlign = "center";
        }
        else if( h[i].style.textAlign = "center")
        {
            h[i].style.textAlign = "end";
        }
        else if( h[i].style.textAlign = "end")
        {
            h[i].style.textAlign = "start";
        }

    }
        
    

}

function menuclick()
{
    var nav = document.getElementById("navigation");
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }

}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var sli = document.getElementsByClassName("mySlides");
  if (n > sli.length) {slideIndex = 1}
  if (n < 1) {slideIndex = sli.length}
  for (i = 0; i < sli.length; i++) {
    sli[i].style.display = "none";  
  }
  sli[slideIndex-1].style.display = "block";  
}