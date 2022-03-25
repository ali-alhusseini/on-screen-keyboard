let shift = false;
let capsLock = false;
let deleteKey = false;

// toggle keys
function toggleShift() {
    shift = true;
}
function toggleCapsLock() {
    capsLock = capsLock !== true;
}

// add or delete characters to/from input area
function addChar(selection) {
    var currChars = $("#inputArea").val();
    if (selection === "delete") {
        $("#inputArea").val(currChars.substring(0, currChars.length - 1));
    } else {
        if (capsLock === true) {
            $("#inputArea").val(currChars.concat(selection.toUpperCase()));
        } else if (shift === true && isNaN(selection)) {
            $("#inputArea").val(currChars.concat(selection.toUpperCase()));
            shift = false;
        } else {
            $("#inputArea").val(currChars.concat(selection));
        }
    }
}

// save blog to local storage
function saveBlog(blog) {
    if (typeof Storage !== "undefined") {
        window.localStorage.setItem("blog", document.getElementById(blog).value);
    }
}

// delete blog from local storage
function cancelBlog() {
    window.localStorage.removeItem("blog");
}