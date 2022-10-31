const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const design = urlParams.get('design');
const designIDX = parseInt(urlParams.get('designIDX'));
const designOBJ = designsList[designIDX];

$(".title").html(designOBJ.name);
$(".info").html("Instructions on How to Fold the <b>" + designOBJ.name + "</b>.");

$(".ratings").html("");

var captions = ["Difficulty", "Distance", "Fly Time"];
var values = [designOBJ.difficulty, designOBJ.distance, designOBJ.flyTime];

for(i = 0; i < 3; i++) {
    var rating = document.createElement("div");
    rating.classList.add("rating");
    if(i == 0) {
        var difSpan = document.createElement("span");
        difSpan.id = values[i];
        difSpan.innerHTML = values[i];

        var capSpan = document.createElement("span");
        capSpan.innerHTML = captions[i] + ": ";

        rating.appendChild(capSpan);
        rating.appendChild(difSpan);
    } else {
        rating.innerHTML = captions[i] + ": " + values[i];
    }

    document.querySelector(".ratings").appendChild(rating);
}