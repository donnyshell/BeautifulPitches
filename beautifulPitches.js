// ==UserScript==
// @name         Beautiful Pitches
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script makes moutnain project pitch descriptions beautiful
// @author       Jonah
// @match        https://www.mountainproject.com/route/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mountainproject.com
// @grant        none
// ==/UserScript==

function getNumberOfPitches(){
    let routeDescription = document.getElementsByClassName("description-details")[0].rows[0].cells[1];
    let numberOfPitches = parseInt(routeDescription.innerText.match(/\d* pitches/));
    return numberOfPitches;
}

function breakDescriptionByPitches(pitchDescriptionArray){
    
}

function createTable(pitchDescriptionArray){
    let routeDescription = document.getElementsByClassName("fr-view")[0];
    let numberOfPitches = pitchDescriptionArray.length;
    let pitchTable = document.createElement("table");

    for( let i = 0; i < numberOfPitches; i++){
        const tableRow = pitchTable.insertRow();
        for( let j = 0; j <2; j++){
            const tableCell = tableRow.insertCell();
            if(j === 0){
                tableCell.appendChild(document.createTextNode("P" + (i+1)));
            }
            else{
                tableCell.appendChild(document.createTextNode(pitchDescriptionArray[i]));
            }
        }
    }
    routeDescription.insertAdjacentHTML('afterend', pitchTable.outerHTML);
}

(function() {
    'use strict';

    // Your code here...
    let numberOfPitches = GetNumberOfPitches();
    if(!numberOfPitches){
        return 0;
    }


    //parse the description, break it up and pass it to create table
    let routeDescription = document.getElementsByClassName("fr-view")[0];
    let pitchDescriptionArray = routeDescription.innerText.split('\n').filter(pitch => pitch.match(/^P\d/));
    if( pitchDescriptionArray.length === numberOfPitches){
        createTable(pitchDescriptionArray);
    }

})();