const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const design = urlParams.get('design');
const designIDX = parseInt(urlParams.get('designIDX'));
const designOBJ = designsList[designIDX];

function loadInfo() {
    $(".title").html(designOBJ.name);
    $(".info").html("Instructions on How to Fold the <b>" + designOBJ.name + "</b>.");

    $(".ratings").html("");

    var captions = ["Difficulty", "Distance", "Fly Time", "Steps"];
    var values = [designOBJ.difficulty, designOBJ.distance, designOBJ.flyTime, designOBJ.instructions.text.length];

    for (i = 0; i < captions.length; i++) {
        var rating = document.createElement("div");
        rating.classList.add("rating");
        if (i == 0) {
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
}

function loadInstructions() {
    $(".instructions").html("");

    for (i = 0; i < designOBJ.instructions.text.length; i++) {
        var instruction = document.createElement("div");
        instruction.classList.add("instruction");
        instruction.id = "instruction." + i;

        var instructionTitle = document.createElement("div");
        instructionTitle.classList.add("instructionTitle");
        instructionTitle.innerHTML = "Step " + (i + 1).toString();

        instruction.appendChild(instructionTitle);

        var instructionImage = document.createElement("img");
        instructionImage.classList.add("instructionImage");
        instructionImage.src = designOBJ.instructions.images[i];

        instruction.appendChild(instructionImage);

        var instructionText = document.createElement("div");
        instructionText.classList.add("instructionText");
        instructionText.innerHTML = designOBJ.instructions.text[i];

        instruction.appendChild(instructionText);

        document.querySelector(".instructions").appendChild(instruction);
    }
}

loadInstructions();
loadInfo();