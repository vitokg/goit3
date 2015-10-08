window.addEventListener("load", renderGrid, false);
window.addEventListener("resize", renderGrid, false);
function renderGrid() {
    var blocks = document.getElementById("gridContainer").children;
    var blockAmount=10;
    var columns=3;
    var newLeftPosition, newTopPosition;
    for (var i=1; i<blocks.length; i++) {


        if (i%columns==0) {
            newTopPosition=(getTop(blocks[i-columns])+getLeft(blocks[i-columns]))+blockAmount;
            blocks[i].style.top=newTopPosition+"px";
        } else {
            if (blocks[i-columns]) {
                newTopPosition=(getTop(blocks[i-columns])+getLeft(blocks[i-columns]))+blockAmount;
                blocks[i].style.top=newTopPosition+"px";
            }
            newLeftPosition=(getTop(blocks[i-1])+getLeft(blocks[i-1]))+blockAmount;
            blocks[i].style.left=newLeftPosition+"px";
        }
    }
}

function getTop(element) {
    var box = element.getBoundingClientRect();
    return box.top + pageYOffset;
}

function getLeft(element) {
    var  box=element.getBoundingClientRect();
    return box.left + pageXOffset;
}
console.log(getTop(document.getElementById("square")));


