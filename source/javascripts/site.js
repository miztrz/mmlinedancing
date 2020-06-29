// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function addResponsiveNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

const handler = () =>
    fetch("/.netlify/functions/node-fetch", { headers: { accept: "Accept: application/json" } })
    .then((x) => x.json())
    .then(({ msg }) => setMsg(msg))