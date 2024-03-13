let bgContainerEl = document.getElementById("bgContainer");
let userInputEl = document.getElementById("themeUserInput");
let headingEl = document.getElementById("heading");

function changeTheme(event) {
    let userInputValue = userInputEl.value;
    if (event.key === "Enter") {
        if (userInputValue === "Light") {
            bgContainerEl.style.backgroundImage = "URL('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        } else if (userInputValue === "Dark") {
            bgContainerEl.style.backgroundImage = "URL('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
            headingEl.style.color = "white";
        } else {
            alert("Invalid Theme");
        }
    }
}
userInputEl.addEventListener("keydown", changeTheme);