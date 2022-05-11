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
function letThereBeLight(evt){
    $.ajax(URL).then(function(zzt){
        $name1.text(zzt.data[0][8]);
        $usage1.text(`${zzt.data[0][9]} KWH/sqft`);
        
        $name2.text(zzt.data[1][8]);
        $usage2.text(`${zzt.data[1][9]} KWH/sqft`);

        $name3.text(zzt.data[2][8]);
        $usage3.text(`${zzt.data[2][9]} KWH/sqft`);

        $name4.text(zzt.data[3][8]);
        $usage4.text(`${zzt.data[3][9]} KWH/sqft`);

        $name5.text(zzt.data[4][8]);
        $usage5.text(`${zzt.data[4][9]} KWH/sqft`);

        $name6.text(zzt.data[5][8]);
        $usage6.text(`${zzt.data[5][9]} KWH/sqft`);
    })
}
letThereBeLight();




//styling

$("a").on("mouseover", function(evt){
    evt.target.style.backgroundColor = "rgba(0,0,0,.6)";
})

$("a").on("mouseleave", function(evt){
    evt.target.style.backgroundColor = null;
})