// Block new tabs and auto-close them
window.open = function() { alert("New tabs are blocked!"); return null; };
setInterval(() => { for (let win of window.openedWindows || []) { if (!win.closed) win.close(); } }, 500);

// Prevent popups
document.addEventListener("click", function(event) {
    if (event.target.tagName === "A" && event.target.target === "_blank") {
        event.preventDefault();
        alert("Popups are blocked!");
    }
});

// Load sites in fullscreen iframe and hide the main UI
function loadSite(url) {
    document.getElementById("header").style.display = "none";
    document.querySelector(".container").style.display = "none";
    document.getElementById("iframe-container").style.display = "block";
    document.getElementById("siteFrame").src = url;
}

// Search system using Google site search
function searchSites() {
    let query = document.getElementById("searchBox").value.trim();
    if (query.length > 2) {
        document.querySelectorAll(".site-box").forEach(box => {
            let siteUrl = box.getAttribute("data-url");
            let searchUrl = `https://www.google.com/search?q=site:${siteUrl}+${query}`;
            window.open(searchUrl, "_blank"); 
        });
    }
}
