//Using JavaScript Module patterns for this app
const setClock = ( function() {
    //Set the clock with hours, mins, and secs
    
    let theDate = new Date();
    let theHours = theDate.getHours();
    let theMinutes = theDate.getMinutes();
    let theSeconds = theDate.getSeconds();
    
    //Change the text of the div with id "clock"
    
    let clockDiv = document.getElementById('clock');
    clockDiv.textContent = `${theHours}:${theMinutes}:${theSeconds}`;

    //Set a function to change the div clock textContent perpetually, every second

    let tickTock = setInterval( function() {
        
        //Assign time again for the tickTock
        
        let theDate = new Date();
        let theHours = theDate.getHours();
        let theMinutes = theDate.getMinutes();
        let theSeconds = theDate.getSeconds();
        
        //Change clock textContent perpetually
        
        clockDiv.textContent = `${theHours}:${theMinutes}:${theSeconds}`;

    }, 1000 );

}());
