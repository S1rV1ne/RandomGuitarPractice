//userFileName, savingPresets
const fsLibrary = require('fs');
const readline = require('readline');
import {stringToInt, guitarSrings, naturalNotes, sharpNotes, flatNotes, ttNotesS, ttNotesF, sNote, fNote, nNote, ttNoteS, ttNoteF, RanNNote, RanFNote, RanSNote, RanTTNoteS, RanTTNoteF} from './GeneralFunctions.js';
(async function start() {
    let masterAnswers = [0, 0, 0, 0, 0, 0, 0];
    let notePractice = await ask("Do you want to practice where notes are on the strings? 1 for yes, 0 for no. ");
    masterAnswers[0,0] = stringToInt(notePractice);

    
    
    //savingPresets(masterAnswers);

})();





function ask(prompt) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question(prompt, (answer) => {
            resolve(answer)
            rl.close();
        });
    })
}