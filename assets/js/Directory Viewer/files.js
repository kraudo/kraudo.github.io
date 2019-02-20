function setAttrs(elem, attrs) {
    for (let p in attrs) elem.setAttribute(p, attrs[p]);
}

function addListLink(elem, links, id = "") {
    let li = document.createElement("li");
    let a  = document.createElement("a");
    a.href = "javascript.void(0);";
    li.appendChild(a);
    if (id !== "") {
        document.getElementById(id).appendChild(li);
    }
}


let keepup = {
    href : "https://raw.githubusercontent.com/hamzaowais/keepup/master/app/index.js",
    title : "keepup app source"
}

