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
    return pitchTable;
}

function beautifulPitches() {
    //get number of pitches, run if multipitch
    let numberOfPitches = GetNumberOfPitches();
    if(!numberOfPitches){
        return 0;
    }

    //parse the description, break it up and pass it to create table
    1let pitchDescriptionArray = routeDescription.innerText.split('\n').filter(pitch => pitch.match(/^P\d/));
    if( pitchDescriptionArray.length === numberOfPitches){
        var pitchTable = createTable(pitchDescriptionArray);
    }
    routeDescription.insertAdjacentHTML('afterend', pitchTable.outerHTML);
};

const routeDescription = document.getElementsByClassName("fr-view")[0];
beautifulPitches();
