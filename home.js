//styling

$("a").on("mouseover", function(evt){
    evt.target.style.backgroundColor = "rgba(0,0,0,.6)";
})

$("a").on("mouseleave", function(evt){
    evt.target.style.backgroundColor = null;
})

document.querySelector("h3").style.margin = "1vw";
document.querySelector("h3").style.padding = "6vh 0 0 0";