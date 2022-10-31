function loadAll() {
    $(".designs").html("");

    for(i = 0; i < designsList.length; i++) {
        var design = document.createElement("a");
        design.classList.add("design");
        design.target = "_blank";
        design.href = window.location.origin + "/design.html" + "?design=" + designsList[i].id + "&designIDX=" + i;
        design.id = designsList[i].id;

        var designImage = document.createElement("div");
        designImage.classList.add("designImage");
        designImage.style.backgroundImage = "url(" + designsList[i].image + ");";

        var designTitle = document.createElement("div");
        designTitle.classList.add("designTitle");
        designTitle.innerHTML = designsList[i].name;

        designImage.appendChild(designTitle);

        var designInfo = document.createElement("div");
        designInfo.classList.add("designInfo");

        var classes = ["Difficulty", "Distance", "FlyTime"];
        var html = [designsList[i].difficulty, designsList[i].distance, designsList[i].flyTime];

        for(ii = 0; ii < classes.length; ii++) {
            var info = document.createElement("div");
            info.classList.add("info" + classes[ii]);
            ii == 0 ? info.id = html[ii] : info.id = "designInfo";
            ii > 0 ? info.innerHTML = classes[ii] + ": " + html[ii] : info.innerHTML = html[ii];
            if (ii == 2) info.innerHTML = "Fly Time: " + html[ii];

            designInfo.appendChild(info);
        }

        designImage.appendChild(designInfo);

        design.appendChild(designImage);

        document.querySelector(".designs").appendChild(design);
    }
}

loadAll();