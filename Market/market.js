//variables

const URL =
  "https://data.cityofchicago.org/api/views/atzs-u7pv/rows.json?accessType=DOWNLOAD";
console.log($.ajax(URL));

//Element References
const $name1 = $("#name1");
const $name2 = $("#name2");
const $name3 = $("#name3");
const $name4 = $("#name4");
const $name5 = $("#name5");
const $name6 = $("#name6");

const $day1 = $("#day1");
const $day2 = $("#day2");
const $day3 = $("#day3");
const $day4 = $("#day4");
const $day5 = $("#day5");
const $day6 = $("#day6");

const $time1 = $("#time1");
const $time2 = $("#time2");
const $time3 = $("#time3");
const $time4 = $("#time4");
const $time5 = $("#time5");
const $time6 = $("#time6");

//Functions
function getFarmers(evt) {
  $.ajax(URL).then(function (market) {
    $name1.text(market.data[0][8]);
    //this accesses the 9th element in the 0 index of the array
    $day1.text(market.data[0][10]);
    $time1.text(`${market.data[0][11]} - ${market.data[0][12]}`);

    $name2.text(market.data[1][8]);
    $day2.text(market.data[1][10]);
    $time2.text(`${market.data[1][11]} - ${market.data[1][12]}`);

    $name3.text(market.data[2][8]);
    $day3.text(market.data[2][10]);
    $time3.text(`${market.data[2][11]} - ${market.data[2][12]}`);

    $name4.text(market.data[3][8]);
    $day4.text(market.data[3][10]);
    $time4.text(`${market.data[3][11]} - ${market.data[3][12]}`);

    $name5.text(market.data[4][8]);
    $day5.text(market.data[4][10]);
    $time5.text(`${market.data[4][11]} - ${market.data[4][12]}`);

    $name6.text(market.data[5][8]);
    $day6.text(market.data[5][10]);
    $time6.text(`${market.data[5][11]} - ${market.data[5][12]}`);
  });
}
$("#button").on("click", function () {
  getFarmers();
});

//styling

$("a").on("mouseover", function (evt) {
  evt.target.style.backgroundColor = "rgba(0,0,0,.6)";
});

$("a").on("mouseleave", function (evt) {
  evt.target.style.backgroundColor = null;
});
