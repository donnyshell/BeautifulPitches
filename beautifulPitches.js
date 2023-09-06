function getNumberOfPitches(){

    let routeDescription = document.getElementsByClassName("description-details")[0].rows[0].cells[1];
    let numberOfPitches = parseInt(routeDescription.innerText.match(/\d* pitches/));
    return numberOfPitches;
}

function breakDescriptionByPitches(pitchDescription){
    let pitchIterator = pitchDescription.matchAll(/(?:^p(itch)? ?\d.{0,4})\w.*/gim);
    let pitchDescriptionArray = Array.from(pitchIterator, (x) => {return(x.toString().replace(/^p(itch)? ?\d.*?(?=\w)/im, ""))});
    return pitchDescriptionArray;
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

function styleTable(){
    let style = "#beautifulPitchesTable {table-layout: auto; border-collapse: collapse; width: 100%; background-color: #ecf2f9}th, #beautifulPitchesTable td{text-align: left;padding: 8px} #beautifulPitchesTable tr:nth-child(even) {background-color: #ffffff}";
    let styleSheet = document.createElement("style");
    styleSheet.innerText = style;
    document.head.insertAdjacentElement("beforeend", styleSheet)
    return 0;
}


function beautifulPitches() {

    let routeDescription = document.getElementsByClassName("fr-view")[0];
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

    routeDescription.insertAdjacentHTML('afterend', pitchTable.outerHTML);
    styleTable();

    return 0;
};
beautifulPitches();


