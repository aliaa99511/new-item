


/********************************************************* */
var head=document.querySelector("h2");
var ul=document.getElementById("ul");
var li=document.getElementById("ul").getElementsByTagName("li");
var button=document.querySelector("button");
var counter=1;

/*********************************************************** */






/************************************************************ */
//click on li
var i;
for (i = 0; i < li.length; i++) {
  li[i].addEventListener("click",function(){

    for (i = 0; i < li.length; i++) {
      li[i].classList.remove("rdd");
    }

    this.classList.toggle("rdd");
    head.innerHTML=this.innerHTML;

  })
}
/*************************************************************** */





/************************************************ */
//click on button
button.addEventListener("click",function(){

  var newitem = document.createElement("LI");   // Create a <li> element
  newitem.innerHTML = "new" +counter;           // Insert text with counter
  ul.appendChild(newitem);                     // Append <li> to <ul>
  counter++;
  

  var i;
  for (i = 0; i < li.length; i++) {
    li[i].addEventListener("click",function(){

      for (i = 0; i < li.length; i++) {
        li[i].classList.remove("rdd");
      }
      
      this.classList.toggle("rdd");
      head.innerHTML=this.innerHTML;

    })
  }
})

/*
function myFunction() {
    var x = document.getElementsByTagName("P");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "red";
    }
  }*/
/**************************************************** */