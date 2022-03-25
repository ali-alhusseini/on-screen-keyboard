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