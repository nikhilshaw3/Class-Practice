AFRAME.registerComponent("create-buttons",{
init:function(){

var button1 = document.createElement("button")
button1.innerHTML = "RATE US"
button1.setAttribute("id","rating-button")
button1.setAttribute("class","btn btn-warning")

var button2 = document.createElement("button")
button2.innerHTML = "ORDER NOW"
button2.setAttribute("id","order-button")
button2.setAttribute("class","btn btn-warning")

var buttonDIV = document.getElementById("button-div")
buttonDIV.appendChild(button1)
buttonDIV.appendChild(button2)
}
})