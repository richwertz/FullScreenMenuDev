/**
 * Created by liddohx on 10/29/2018.
 */
window.addEventListener ("load", function() {

    var nodes = document.querySelectorAll('nav[data-action="expand"] *:first-child');
    for (var k=0; k<nodes.length; k++) {
        nodes[k].addEventListener("click", function() {
            var parent = this.parentNode;
            if (parent.classList.contains("open") == false)parent.classList.add("open");
            else parent.classList.remove("open");
        });
    }
    var nodes = document.querySelectorAll('nav[data-action="expand"] *:nth-child(2) > *');
    for (var k=0; k<nodes.length; k++) {
        nodes[k].style.transitionDelay = (0.5+(k/3)) + "s";
    }
});