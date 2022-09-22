import * as MODEL from "./model.js";

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    let pageIDArray = pageID.split("/");
    pageID = pageIDArray[0];
    let subPageID = pageIDArray[1];
    //console.log("sub " + subPageID);

    if (pageID == "") {
        MODEL.changePage("home")
    } else {
        if (pageID == subPageID) {
            MODEL.changePage(pageID)
        } else {
            MODEL.changePage(pageID, subPageID)
        }
    }
}

function initListeners() {
    //console.log("Hello world");
    $("nav a").click((e) => {

    })
}

function initApp() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initApp();
    initListeners();
})