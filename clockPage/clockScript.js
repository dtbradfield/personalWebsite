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

        //Add 'am' or 'pm' and convert from 24hr time to 12hr time. also add 0 before single digit units.
        if ( theHours < 12 ) {
            if ( theHours.toString().length === 1 ) {
                theHours = `0${theHours}`;
            };
            if ( theMinutes.toString().length === 1 ) {
                theMinutes = `0${theMinutes}`;   
            };
            if ( theSeconds.toString().length === 1 ) {
                theSeconds = `0${theSeconds}`;
            };
            clockDiv.textContent = `${theHours}:${theMinutes}:${theSeconds} am`
        }   else {
                theHours = theHours - 12;
                if ( theHours.toString().length === 1 ) {
                    theHours = `0${theHours}`;
                };
                if ( theMinutes.toString().length === 1 ) {
                    theMinutes = `0${theMinutes}`;   
                };
                if ( theSeconds.toString().length === 1 ) {
                    theSeconds = `0${theSeconds}`;
                };
                clockDiv.textContent = `${theHours}:${theMinutes}:${theSeconds} pm`
            };
    }, 1000 );
}());
