//variables

const URL = 'https://data.cityofchicago.org/api/views/usfg-z9mx/rows.json?accessType=DOWNLOAD'
console.log($.ajax(URL))

//Element References
const $name1 = $("#name1");
const $name2 = $("#name2");
const $name3 = $("#name3");
const $name4 = $("#name4");
const $name5 = $("#name5");
const $name6 = $("#name6");

const $usage1 = $("#usage1");
const $usage2 = $("#usage2");
const $usage3 = $("#usage3");
const $usage4 = $("#usage4");
const $usage5 = $("#usage5");
const $usage6 = $("#usage6");

//Functions
function getFarmers(evt){
    $.ajax(URL).then(function(market){
        $name1.text(market.data[0][8]);
        $usage1.text(market.data[0][9]);
        
        $name2.text(market.data[1][8]);
        $usage2.text(market.data[1][9]);

        $name3.text(market.data[2][8]);
        $usage3.text(market.data[2][9]);

        $name4.text(market.data[3][8]);
        $usage4.text(market.data[3][9]);

        $name5.text(market.data[4][8]);
        $usage5.text(market.data[4][9]);

        $name6.text(market.data[5][8]);
        $usage6.text(market.data[5][9]);
    })
}
getFarmers()




//styling

$("a").on("mouseover", function(evt){
    evt.target.style.backgroundColor = "rgba(0,0,0,.6)";
})

$("a").on("mouseleave", function(evt){
    evt.target.style.backgroundColor = null;
})