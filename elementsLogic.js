function tabBarToggle(event, tabName) {
    let tabContent, tabs;
    tabContent = document.getElementsByClassName('tabcontent')
    var i;
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }
    tabs = document.getElementsByClassName('tabs');
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(' active', '')
    }

    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += " active";

}


function move() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("bar");
        var width = 1;
        var id = setInterval(frame, 50);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

// Slider Global

let slider = document.getElementById('ranges');
let value = document.getElementById('sliderVal');
value.innerHTML = slider.value;
slider.oninput = function () {
    value.innerHTML = this.value;
}