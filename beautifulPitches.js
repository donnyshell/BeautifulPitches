function getNumberOfPitches(){
    let routeDescription = document.getElementsByClassName("description-details")[0].rows[0].cells[1];
    let numberOfPitches = parseInt(routeDescription.innerText.match(/\d* pitches/));
    return numberOfPitches;
}

function breakDescriptionByPitches(pitchDescription){
    let pitchIterator = pitchDescription.matchAll(/(?:^p\d.{0,4})\w.*/gim);
    let pitchDescriptionArray = Array.from(pitchIterator);
    return pitchDescriptionArray;
}

function findGrades(pitchDescriptionArray){
    for( i = 0; i < pitchDescriptionArray.length; i++){
        //TODO Regex hurts my little brain
        if(pitchDescriptionArray[i].search(/5\.\d+[a-d]?/gim));
		}
}

function createTable(pitchDescriptionArray){
    let numberOfPitches = pitchDescriptionArray.length;
    let pitchTable = document.createElement("table");
    pitchTable.id = "beautifulPitchesTable";
    pitchTable.innerHTML+="<colgroup><col span=\"1\" style=\"width:10%\"></colgroup><tr><th>Pitch</th><th style=\"text-align:center\">Description</th></tr></table>"
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
    return pitchTable;
}

function createButton(){
    let revertButton = document.createElement("button");
    revertButton.innerText = "Make Pitches Ugly Again";
    revertButton.id = "revertButton"
    return revertButton
}

function swapDescription(active, pitchDescriptionArray){

    console.log("button clicked lmao");
    return 0;

}


function beautifulPitches() {
    //get number of pitches, run if multipitch
    let numberOfPitches = getNumberOfPitches();
    if(!numberOfPitches){
        return 0;
    }

    //break pitch description into table entries and create the table
    let pitchDescriptionArray = breakDescriptionByPitches(routeDescription.innerText);
    if( pitchDescriptionArray.length === numberOfPitches){
        var pitchTable = createTable(pitchDescriptionArray);
    }

    let active = true;
    let options = [pitchTable, pitchDescriptionArray];
    let revertButton = createButton();
    revertButton.addEventListener("click", swapDescription);
    routeDescription.insertAdjacentElement("afterbegin", revertButton);
    routeDescription.insertAdjacentHTML('afterend', pitchTable.outerHTML);


    return 0;
};
const routeDescription = document.getElementsByClassName("fr-view")[0];
beautifulPitches();


let style = "#beautifulPitchesTable {table-layout: auto; border-collapse: collapse; width: 100%; background-color: #ecf2f9}th, #beautifulPitchesTable td{text-align: left;padding: 8px} #beautifulPitchesTable tr:nth-child(even) {background-color: #ffffff}";
let styleSheet = document.createElement("style");
styleSheet.innerText = style;
document.head.insertAdjacentElement("beforeend", styleSheet)
