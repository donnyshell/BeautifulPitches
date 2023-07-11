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
        if(pitchDescriptionArray[i].search());
		}
}

function createTable(pitchDescriptionArray){
    let numberOfPitches = pitchDescriptionArray.length;
    let pitchTable = document.createElement("table");
    pitchTable.id = "beautifulPitchesTable";
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

function beautifulPitches() {
    console.log("beautiful Pitches start");
    //get number of pitches, run if multipitch
    let numberOfPitches = getNumberOfPitches();
    if(!numberOfPitches){
        console.log("pitches do not match expected value");
        return 0;
    }
    console.log("pitches match expected value");

    //parse the description, break it up and pass it to create table
    //let pitchDescriptionArray = routeDescription.innerText.split('\n').filter(pitch => pitch.match(/^P\d/));

    let pitchDescriptionArray = breakDescriptionByPitches(routeDescription.innerText);
    if( pitchDescriptionArray.length === numberOfPitches){
        var pitchTable = createTable(pitchDescriptionArray);
    }
    routeDescription.insertAdjacentHTML('afterend', pitchTable.outerHTML);
};
console.log("beautifulpitches started");
const routeDescription = document.getElementsByClassName("fr-view")[0];
beautifulPitches();


style = "table #beautifulPitchesTable {border-collapse: collapse;width: 100%;}th, td {text-align: left;padding: 8px;}{tr:nth-child(even) {background-color: #f2f2f2;}";
let styleSheet = document.createElement("style");
styleSheet.innerText = style;
document.head.appendChild(styleSheet)

