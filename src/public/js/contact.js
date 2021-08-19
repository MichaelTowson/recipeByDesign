//Nav bar animation/styling
window.onload = function() {
    setActivePage("contact");
};

function setActivePage(id) {
    document.getElementById(id).classList.add('active')
}
//----