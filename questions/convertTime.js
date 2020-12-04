/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
    // let data = { hour: 0, minute: 0, second: 0 }
    if (typeof seconds === 'number') {
        minutes = Math.floor(seconds / 60);
        hours = Math.floor(minutes / 60);
        seconds = Math.floor(seconds % 60);
        if(minutes >= 60){
            minutes = 0;
        }
    } else {
        throw Error('Invalid Input');
    }
    return {
        hours, minutes, seconds
    };
};


module.exports = convertTime;
