var elTabItems = document.querySelectorAll(".features__item");
var elTabLinks = document.querySelectorAll(".features__link");
var elPanelItems = document.querySelectorAll(".features__tabs")

elTabLinks.forEach(function(link){
    link.addEventListener("click", function(evt){
        evt.preventDefault();

        elTabItems.forEach(function(item){
            item.classList.remove("features__item--active")
        })

        link.parentElement.classList.add("features__item--active");

        elPanelItems.forEach(function(panel){
            panel.classList.remove("features__tabs--active");
        })

        document.querySelector(link.getAttribute("href")).classList.add("features__tabs--active");
    })
})