var designs = [
    {
        name: "Classic Plane",
        id: "classicPlane",
        image: "ClassicPlane2.png",
        difficulty: "Easy",
        distance: "4",
        flyTime: "3",
    },
    {
        name: "Classic Plane copy",
        id: "classicPlaneC",
        image: "ClassicPlane2.png",
        difficulty: "Extreme",
        distance: "4",
        flyTime: "3",
    }
];

function loadAll() {
    $(".designs").html("");

    for(i = 0; i < designs.length; i++) {
        var design = document.createElement("div");
        design.classList.add("design");
        design.id = designs[i].id;

        var designImage = document.createElement("div");
        designImage.classList.add("designImage");
        designImage.style.backgroundImage = "url(" + designs[i].image + ");";

        var designTitle = document.createElement("div");
        designTitle.classList.add("designTitle");
        designTitle.innerHTML = designs[i].name;

        designImage.appendChild(designTitle);

        var designInfo = document.createElement("div");
        designInfo.classList.add("designInfo");

        var classes = ["Difficulty", "Distance", "FlyTime"];
        var html = ["Easy", "Distance: 4", "Fly Time: 3"];

        for(i = 0; i < classes.length; i++) {
            var info = document.createElement("div");
            info.classList.add("info" + classes[i]);
            info.innerHTML = html[i];
            i == 0 ? info.id = html[i] : info.id = "designInfo";

            designInfo.appendChild(info);
        }

        designImage.appendChild(designInfo);

        design.appendChild(designImage);

        document.querySelector(".designs").appendChild(design);
    }
}

loadAll();