// Standardmaessiges Ausblenden der Subsections
document.getElementById("_problemform").style.display = "none";
document.getElementById("_equipmentform").style.display = "none";
document.getElementById("_veranstaltungform").style.display = "none";

document.getElementById("_lichtsection").style.display = "none";
document.getElementById("_tonsection").style.display = "none";
document.getElementById("_praesisection").style.display = "none";

var lichtSection = document.getElementById("_lichtsection");
var lichtcount = 0;
var toncount = 0;
var praesicount = 0;

// Anlass Auswahl
function blendInProblemForm() {
    document.getElementById("_problemform").style.display = "block";
    document.getElementById("_equipmentform").style.display = "none";
    document.getElementById("_veranstaltungform").style.display = "none";
}

function blendInEquipmentForm() {
    document.getElementById("_problemform").style.display = "none";
    document.getElementById("_equipmentform").style.display = "block";
    document.getElementById("_veranstaltungform").style.display = "none";
}

function blendInVeranstaltungForm() {
    document.getElementById("_problemform").style.display = "none";
    document.getElementById("_equipmentform").style.display = "none";
    document.getElementById("_veranstaltungform").style.display = "block";
}

// Veranstaltung Wuensche
function blendInLichtSection() {
    lichtcount ++;

    if (lichtcount % 2 != 0) {
        document.getElementById("_lichtsection").style.display = "block";
    }
    if (lichtcount % 2 == 0) {
        document.getElementById("_lichtsection").style.display = "none";
    }   
}

function blendInTonSection() {
    toncount ++;

    if (toncount % 2 != 0) {
        document.getElementById("_tonsection").style.display = "block";
    }
    if (toncount % 2 == 0) {
        document.getElementById("_tonsection").style.display = "none";
    }   
}

function blendInPraesiSection() {
    praesicount ++;

    if (praesicount % 2 != 0) {
        document.getElementById("_praesisection").style.display = "block";
    }
    if (praesicount % 2 == 0) {
        document.getElementById("_praesisection").style.display = "none";
    }   
}