let items = [
    {
        "city": "Rostov-on-Don",
        "residential": "LCD admiral",
        "area": "81 m2",
        "time": "3.5 months",
        "cost": "Upon request",
        "img": "image_1.jpg"
    },
    {
        "city": "Sochi",
        "residential": "Thieves", // очень странное название для жк)
        "area": "105 m2",
        "time": "4 months",
        "cost": "Upon request",
        "img": "image_2.jpg"
    },
    {
        "city": "Rostov-on-Don",
        "residential": "Patriotic",
        "area": "93 m2",
        "time": "3 months",
        "cost": "Upon request",
        "img": "image_3.jpg"
    }
];
let selected = 0;
function selectProject(project, number) {
    Array.from(document.querySelectorAll(".slider__p")).forEach(
        (el) => el.classList.remove("slider__img_active")
    );
    document.querySelector(".slider__img").classList.remove("slider__img_active");
    document.querySelector(".slider__p_city").innerHTML = `${project[number].city}<br>${project[number].residential}`;
    document.querySelector(".slider__p_area").innerHTML = `${project[number].area}`;
    document.querySelector(".slider__p_time").innerHTML = `${project[number].time}`;
    document.querySelector(".slider__p_cost").innerHTML = `${project[number].cost}`;
    document.querySelector(".slider__img").style.background = `url(images/jpg/${project[number].img}), lightgray 50% / cover no-repeat`;

    setTimeout(function() {
        Array.from(document.querySelectorAll(".slider__p")).forEach(
            (el) => el.classList.add("slider__img_active")
        );
        document.querySelector(".slider__img").classList.add("slider__img_active");
    }, 100);
    for (let i = 0; i < project.length; i++) {
        document.querySelectorAll(".slider__dot")[i].classList.remove("slider__dot_active");
    }
    document.querySelectorAll(".slider__dot")[number].classList.add("slider__dot_active");
    for (let i = 0; i < project.length; i++) {
        document.querySelectorAll(".slider__right_item")[i].innerHTML = `${project[i].city}, ${project[i].residential}`;
        document.querySelectorAll(".slider__right_item")[i].classList.remove("slider__right_active");
    }
    document.querySelectorAll(".slider__right_item")[number].classList.add("slider__right_active");
};
window.addEventListener("load", function (event) {selectProject(items, selected)});
document.querySelector(".slider__icon_left").addEventListener("click", () => {
    if (selected == 0) {
        selected = items.length - 1;
    } else {
        selected -= 1;
    }
    selectProject(items, selected);
});
document.querySelector(".slider__icon_right").addEventListener("click", () => {
    if (selected == 2) {
        selected = 0;
    } else {
        selected += 1;
    }
    selectProject(items, selected);
});
document.querySelector(".slider__dot_0").addEventListener("click", () => {
    selected = 0;
    selectProject(items, selected);
});
document.querySelector(".slider__dot_1").addEventListener("click", () => {
    selected = 1;
    selectProject(items, selected);
});
document.querySelector(".slider__dot_2").addEventListener("click", () => {
    selected = 2;
    selectProject(items, selected);
});

document.querySelector(".slider__right_item0").addEventListener("click", () => {
    selected = 0;
    selectProject(items, selected);
});
document.querySelector(".slider__right_item1").addEventListener("click", () => {
    selected = 1;
    selectProject(items, selected);
});
document.querySelector(".slider__right_item2").addEventListener("click", () => {
    selected = 2;
    selectProject(items, selected);
});