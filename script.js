const URL = 'https://data.cityofchicago.org/api/views/atzs-u7pv/rows.json?accessType=DOWNLOAD'
console.log($.ajax(URL))








//styling

$("a").on("mouseover", function(evt){
    evt.target.style.backgroundColor = "rgba(0,0,0,.6)";
})

$("a").on("mouseleave", function(evt){
    evt.target.style.backgroundColor = null;
})