import { Injectable } from '@angular/core';
import * as jsonData from './keyDict.json';


@Injectable({
  providedIn: 'root'
})
export class ChordServiceService {

  keyDict

  constructor() { 
    console.log('ChordService Running...')
    this.keyDict = jsonData['default']

    // MongoConnect();

    //   function MongoConnect() {
    //       const { MongoClient } = require('mongodb');
    //       const uri = "mongodb+srv://admin:cpOLSOd6dOnhA1tS@capstonecluster.sgbgy.mongodb.net/ChordScale?retryWrites=true&w=majority";
    //       const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    //       client.connect(err => {
    //           const collection = client.db("ChordScale").collection("keyDict");
    //           // perform actions on the collection object
    //           client.close();
    //       });
    //   }
  }

  majorChord(keyChoice: string) {
    console.log(keyChoice + ' Major Chord Data Returned')
    return {
        //The SHARP Problem: a bug I've encountered in Howler separates the location of mp3 files by the # sign - a strangely inauspicious crossover between music and programming...
        //Instead of using more code and processing power/time to properly parse the strings to connect to the appropriate audio file, I've added more data to the JSON
        //keyDict Dictionary - ('Root') - in order to avoid the Sharp/(#) bug in Howler, while processing the correct (and more visually appealing) note/scale data.
        name: `${this.keyDict[keyChoice]['Root']} maj7`,
        chordScale: `${this.keyDict[keyChoice]['Root']} Major Scale`,
        scale: [this.keyDict[keyChoice]['1'], this.keyDict[keyChoice]['2'], this.keyDict[keyChoice]['3'], this.keyDict[keyChoice]['4'], this.keyDict[keyChoice]['5'], this.keyDict[keyChoice]['6'], this.keyDict[keyChoice]['7']],
        scaleFile: `./assets/mp3s/${keyChoice} Major scale.mp3`,
        chordFile: `./assets/mp3s/${keyChoice} Major chord.mp3`,
        chord_guide_tone: {
            "name": `${this.keyDict[keyChoice]['Root']} Major Chord Tones`,
            "keys": [this.keyDict[keyChoice]['1'], this.keyDict[keyChoice]['3'], this.keyDict[keyChoice]['5'], this.keyDict[keyChoice]['7']],
            "path": `./assets/mp3s/${keyChoice} Major chord tones.mp3`
        },
        extensions: [
            {
                "name": `9`,
                "keys": this.keyDict[keyChoice]['2'],
                "path": `./assets/mp3s/${keyChoice} 9.mp3`
            },
            {
                "name": `13`,
                "keys": this.keyDict[keyChoice]['6'],
                "path": `./assets/mp3s/${keyChoice} 13.mp3`

            },
            {
                "name": `#11`,
                "keys": this.keyDict[keyChoice]["b5"],
                "path": `./assets/mp3s/${keyChoice} Sharp_11.mp3`
            }
        ],
        extra_extensions: [
            {
                "name": `${this.keyDict[keyChoice]['Root']} Lydian Scale`,
                "keys": [this.keyDict[keyChoice]['1'], this.keyDict[keyChoice]['2'], this.keyDict[keyChoice]['3'], this.keyDict[keyChoice]['b5'], this.keyDict[keyChoice]['5'], this.keyDict[keyChoice]['6'], this.keyDict[keyChoice]['7']],
                "path": `./assets/mp3s/${keyChoice} Lydian scale.mp3`
            }
        ],
        notes_to_avoid: [
            {
                "name": `b3`,
                "key": this.keyDict[keyChoice]["b3"],
                "path": `./assets/mp3s/${keyChoice} Flat_3.mp3`
            },
            {
                "name": `4`,
                "keys": this.keyDict[keyChoice]["4"],
                "path": `./assets/mp3s/${keyChoice} 4.mp3`
            },
            {
                "name": `b7`,
                "keys": this.keyDict[keyChoice]["b7"],
                "path": `./assets/mp3s/${keyChoice} Flat_7.mp3`
            }
        ]
    }
   }

  minorChord(keyChoice: string) {
    console.log(keyChoice + ' Minor Chord Data Returned')
    return {
        name: `${this.keyDict[keyChoice]['Root']} min7`,
        chordScale: `${this.keyDict[keyChoice]['Root']} (Dorian) Minor Scale`,
        scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
        scaleFile: `./assets/mp3s/${keyChoice} Minor scale.mp3`,
        chordFile: `./assets/mp3s/${keyChoice} Minor chord.mp3`,
        chord_guide_tone: {
            "name": `${this.keyDict[keyChoice]['Root']} Minor Chord Tones`,
            "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["b7"]],
            "path": `./assets/mp3s/${keyChoice} Minor chord tones.mp3`
        },
        extensions: [
            {
                "name": `9`,
                "keys": this.keyDict[keyChoice]['2'],
                "path": `./assets/mp3s/${keyChoice} 9.mp3`
            },
            {
                "name": `11`,
                "keys": this.keyDict[keyChoice]['4'],
                "path": `./assets/mp3s/${keyChoice} 11.mp3`

            },
            {
                "name": `13`,
                "keys": this.keyDict[keyChoice]["6"],
                "path": `./assets/mp3s/${keyChoice} 13.mp3`
            }
        ],
        extra_extensions: [
            {
                // Relative Lydian Scale, based on the flat 3rd of the Minor Scale
                "name": this.majorChord(this.keyDict[keyChoice]['b3']).extra_extensions[0].name,
                "keys": this.majorChord(this.keyDict[keyChoice]['b3']).extra_extensions[0].keys,
                "path": this.majorChord(this.keyDict[keyChoice]['b3']).extra_extensions[0].path
            }
        ],
        notes_to_avoid: [
            {
                "name": `3`,
                "keys": this.keyDict[keyChoice]["3"],
                "path": `./assets/mp3s/${keyChoice} 3.mp3`
            },
            {
                "name": `7`,
                "keys": this.keyDict[keyChoice]["7"],
                "path": `./assets/mp3s/${keyChoice} 7.mp3`
            }
        ]
    }
  }

  domChord(keyChoice: string) {
    console.log(keyChoice + ' Dominant Chord Data Returned')
    return {
        name: `${this.keyDict[keyChoice]['Root']} 7`,
        chordScale: `${this.keyDict[keyChoice]['Root']} Mixolydian Scale`,
        scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
        scaleFile: `./assets/mp3s/${keyChoice} Mixolydian scale.mp3`,
        chordFile: `./assets/mp3s/${keyChoice} Dominant chord.mp3`,
        chord_guide_tone: {
            "name": `${this.keyDict[keyChoice]['Root']} 7 Chord Tones`,
            "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["b7"]],
            "path": `./assets/mp3s/${keyChoice} Dominant chord tones.mp3`
        },
        extensions: [
            {
                "name": `9`,
                "keys": this.keyDict[keyChoice]['2'],
                "path": `./assets/mp3s/${keyChoice} 9.mp3`
            },
            {
                "name": `13`,
                "keys": this.keyDict[keyChoice]['6'],
                "path": `./assets/mp3s/${keyChoice} 13.mp3`
            },
            {
                "name": `b9`,
                "keys": this.keyDict[keyChoice]["b2"],
                "path": `./assets/mp3s/${keyChoice} Flat_9.mp3`

            },
            {
                "name": `#9`,
                "keys": this.keyDict[keyChoice]["b3"],
                "path": `./assets/mp3s/${keyChoice} Sharp_9.mp3`
            },
            {
                "name": `11`,
                "keys": this.keyDict[keyChoice]["4"],
                "path": `./assets/mp3s/${keyChoice} 11.mp3`
            },
            {
                "name": `#11`,
                "keys": this.keyDict[keyChoice]["b5"],
                "path": `./assets/mp3s/${keyChoice} Sharp_11.mp3`
            },
            {
                "name": `b13`,
                "keys": this.keyDict[keyChoice]["b6"],
                "path": `./assets/mp3s/${keyChoice} Flat_13.mp3`
            }
            
        ],
        extra_extensions: [
            {
                "name": `${this.keyDict[keyChoice]['Root']} Half-Whole Dinimished Scale`,
                "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
                "path": `./assets/mp3s/${keyChoice} Half-Diminished scale.mp3`
            },
            {
                "name": `${this.keyDict[keyChoice]['Root']} Lydian Dominant Scale`,
                "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
                "path": `./assets/mp3s/${keyChoice} Lydian Dominant scale.mp3`
            }
        ],
        notes_to_avoid: [
            {
            "name": `7`,
            "keys": this.keyDict[keyChoice]["7"],
            "path": `./assets/mp3s/${keyChoice} 7.mp3`
            }
        ]
    }
  }

  halfDimChord(keyChoice: string) {
    console.log(keyChoice + ' Half-Diminished Chord Data Returned')
    return {
        name: `${this.keyDict[keyChoice]['Root']} min7b5`,
        chordScale: `${this.keyDict[keyChoice]['Root']} Half-Whole Dimimished Scale`,
        scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
        scaleFile: `./assets/mp3s/${keyChoice} Half-Diminished scale.mp3`,
        chordFile: `./assets/mp3s/${keyChoice} Half-Diminished chord.mp3`,
        chord_guide_tone: {
            "name": `${this.keyDict[keyChoice]['Root']} Half-Diminished Chord Tones`,
            "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["b7"]],
            "path": `./assets/mp3s/${keyChoice} Half-Diminished chord tones.mp3`
        },
        extensions: null,
        extra_extensions: null,
        notes_to_avoid: [
            {
                "name": `3`,
                "keys": this.keyDict[keyChoice]["3"],
                "path": `./assets/mp3s/${keyChoice} 3.mp3`
            },
            {
                "name": `7`,
                "keys": this.keyDict[keyChoice]["7"],
                "path": `./assets/mp3s/${keyChoice} 7.mp3`

            }
        ]
    }
  }

  fullDimChord(keyChoice: string) {
    console.log(keyChoice + ' Fully-Diminished Chord Data Returned')
    return {
        name: `${this.keyDict[keyChoice]['Root']} dim7`,
        chordScale: `${this.keyDict[keyChoice]['Root']} Whole-Half Dimimished Scale`,
        scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["b6"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["7"]],
        scaleFile: `./assets/mp3s/${keyChoice} Fully-Diminished scale.mp3`,
        chordFile: `./assets/mp3s/${keyChoice} Fully-Diminished chord.mp3`,
        chord_guide_tone: {
            "name": `${this.keyDict[keyChoice]['Root']} Diminished Chord Tones`,
            "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["6"]],
            "path": `./assets/mp3s/${keyChoice} Fully-Diminished chord tones.mp3`
        },
        extensions: null,
        extra_extensions: [
            {
            // Fully Diminished chords are entirely even in that the intervals between chord tones are exactly the same
            // and can be looped forever...
            // DO NOT USE RECURSIVE METHOD CALL HERE
            "name": this.keyDict[keyChoice]["b3"] + ` Whole-Half Diminished Scale`,
            "keys": [this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["b6"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["7"], this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"]],
            "path": `./assets/mp3s/` + this.keyDict[keyChoice]["b3"] + ` Fully-Diminished scale.mp3`
            }
        ],
        notes_to_avoid: [
            {
                "name": `3`,
                "keys": this.keyDict[keyChoice]["3"],
                "path": `./assets/mp3s/${keyChoice} 3.mp3`
            },
            {
                "name": `b7`,
                "keys": this.keyDict[keyChoice]["b7"],
                "path": `./assets/mp3s/${keyChoice} Flat_7.mp3`

            }
        ]
    }
  }

}
