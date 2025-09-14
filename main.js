// task 1
window.addEventListener("scroll",function(){
    var scrollValue= window.scrollY ;
    console.log(scrollValue) ;
    var navbar= this.document.querySelector(".navbar");
    if(scrollValue>300){
        navbar.setAttribute("class","navbar navbar-expand-lg navbar-light bg-success") ;

    }else{
        navbar.setAttribute("class","navbar navbar-expand-lg navbar-light bg-danger");
    }
});

// task 2 

var date= setInterval(myTimer,1000);
function myTimer(){
    var d= new Date();
    document.querySelector("#demo").innerHTML=d;
}

//task3
function getData(){
    alert("Hello World!")
}









