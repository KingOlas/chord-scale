import { Injectable } from '@angular/core';
import * as jsonData from './keyDict.json';
/* eslint-disable max-len */
@Injectable({
  providedIn: 'root'
})
export class ChordServiceService {
  keyDict: any;
  db: any;

  constructor() {
    console.log('ChordService Running...');
    // Below is the old keyDict initialization when pulled from local JSON
    // eslint-disable-next-line @typescript-eslint/dot-notation
    this.keyDict = jsonData['default'];
    console.log(this.keyDict);
    // Initial Data Pull - keyDict population
    // this.db = ref(getDatabase());
    // get(child(this.db, `keyDict`)).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     this.keyDict = snapshot.val();
    //     console.log(snapshot.val());
    //   } else {
    //     console.log('No data available');
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });
  }

  majorChord(keyChoice: string) {
    console.log(keyChoice + ' Major Chord Data Returned');
    return {
      name: `${this.keyDict[keyChoice].Root}maj7`,
      chordScale: `${this.keyDict[keyChoice].Root} Major Scale`,
      scale: [
        this.keyDict[keyChoice]['1'],
        this.keyDict[keyChoice]['2'],
        this.keyDict[keyChoice]['3'],
        this.keyDict[keyChoice]['4'],
        this.keyDict[keyChoice]['5'],
        this.keyDict[keyChoice]['6'],
        this.keyDict[keyChoice]['7']
      ],
      scaleFile: `./assets/mp3s/${keyChoice} Major scale.mp3`,
      chordFile: `./assets/mp3s/${keyChoice} Major chord.mp3`,
      mainText: `Major Chords are usually either the tonic (the key of the whole song), or passing chords (chords that lead to tension chords). They can also be alternate landing points - in the key of ${this.keyDict[keyChoice]['6']} Minor, you could resolve to a ${this.keyDict[keyChoice].Root} Major chord to indicate a different section of the song. In the key of ${this.keyDict[keyChoice]['3']} Minor, you can do what's called a "Deceptive Cadence" and resolve to ${this.keyDict[keyChoice].Root} Major instead of the tonic!`,
      chordGuideTone: {
        name: `${this.keyDict[keyChoice].Root} Major Chord Tones`,
        keys: [
          this.keyDict[keyChoice]['1'],
          this.keyDict[keyChoice]['3'],
          this.keyDict[keyChoice]['5'],
          this.keyDict[keyChoice]['7']
        ],
        path: `./assets/mp3s/${keyChoice} Major chord tones.mp3`
      },
      extensions: [
        {
          name: '9',
          keys: this.keyDict[keyChoice]['2'],
          path: `./assets/mp3s/${keyChoice} 9.mp3`,
          chord: `${this.keyDict[keyChoice].Root}maj9`
        },
        {
          name: '13',
          keys: this.keyDict[keyChoice]['6'],
          path: `./assets/mp3s/${keyChoice} 13.mp3`,
          chord: `${this.keyDict[keyChoice].Root}maj13, ${this.keyDict[keyChoice].Root}maj6`
        },
        {
          name: '#11',
          keys: this.keyDict[keyChoice].b5,
          path: `./assets/mp3s/${keyChoice} Sharp_11.mp3`,
          chord: `${this.keyDict[keyChoice].Root}maj7(#11)`
        }
      ],
      extraExtensions: [
        {
          name: `${this.keyDict[keyChoice].Root} Lydian Scale`,
          keys: [
            this.keyDict[keyChoice]['1'],
            this.keyDict[keyChoice]['2'],
            this.keyDict[keyChoice]['3'],
            this.keyDict[keyChoice].b5,
            this.keyDict[keyChoice]['5'],
            this.keyDict[keyChoice]['6'],
            this.keyDict[keyChoice]['7']
          ],
          path: `./assets/mp3s/${keyChoice} Lydian scale.mp3`
        }
      ],
      notesToAvoid: [
        {
          name: 'b3',
          keys: this.keyDict[keyChoice].b3,
          path: `./assets/mp3s/${keyChoice} Flat_3.mp3`
        },
        {
          name: '4',
          keys: this.keyDict[keyChoice]['4'],
          path: `./assets/mp3s/${keyChoice} 4.mp3`
        },
        {
          name: 'b7',
          keys: this.keyDict[keyChoice].b7,
          path: `./assets/mp3s/${keyChoice} Flat_7.mp3`
        }
      ]
    };
  }

  minorChord(keyChoice: string) {
    console.log(keyChoice + ' Minor Chord Data Returned');
    return {
      name: `${this.keyDict[keyChoice].Root}min7`,
      chordScale: `${this.keyDict[keyChoice].Root} (Dorian) Minor Scale`,
      scale: [
        this.keyDict[keyChoice]['1'],
        this.keyDict[keyChoice]['2'],
        this.keyDict[keyChoice].b3,
        this.keyDict[keyChoice]['4'],
        this.keyDict[keyChoice]['5'],
        this.keyDict[keyChoice]['6'],
        this.keyDict[keyChoice].b7
      ],
      scaleFile: `./assets/mp3s/${keyChoice} Minor scale.mp3`,
      chordFile: `./assets/mp3s/${keyChoice} Minor chord.mp3`,
      mainText: `Minor Chords are usually either the tonic (the key of the whole song), or passing chords (chords that lead to tension chords). They can also be alternate landing points - in the key of ${this.keyDict[keyChoice].b3} Major, you could resolve to a ${this.keyDict[keyChoice].Root} Minor chord to indicate a different section of the song. In a large percentage of music, a minor chord functions as the ii (2) in the ii-V-I (2 - 5 - 1) chord progression - one of the most commonly used chord progressions in western music. If this is the case for you, the next chord is likely ${this.keyDict[keyChoice]['4']}7 (Dominant).`,
      chordGuideTone: {
        name: `${this.keyDict[keyChoice].Root} Minor Chord Tones`,
        keys: [
          this.keyDict[keyChoice]['1'],
          this.keyDict[keyChoice].b3,
          this.keyDict[keyChoice]['5'],
          this.keyDict[keyChoice].b7
        ],
        path: `./assets/mp3s/${keyChoice} Minor chord tones.mp3`
      },
      extensions: [
        {
          name: '9',
          keys: this.keyDict[keyChoice]['2'],
          path: `./assets/mp3s/${keyChoice} 9.mp3`,
          chord: `${this.keyDict[keyChoice].Root}min9`
        },
        {
          name: '11',
          keys: this.keyDict[keyChoice]['4'],
          path: `./assets/mp3s/${keyChoice} 11.mp3`,
          chord: `${this.keyDict[keyChoice].Root}min11`
        },
        {
          name: '13',
          keys: this.keyDict[keyChoice]['6'],
          path: `./assets/mp3s/${keyChoice} 13.mp3`,
          chord: `${this.keyDict[keyChoice].Root}min13, ${this.keyDict[keyChoice].Root}min6`
        }
      ],
      extraExtensions: [
        {
          // Relative Lydian Scale, based on the flat 3rd of the Minor Scale
          name: `${this.keyDict[keyChoice].b3} Lydian Scale`,
          keys: [
            this.keyDict[keyChoice].b3,
            this.keyDict[keyChoice]['4'],
            this.keyDict[keyChoice]['5'],
            this.keyDict[keyChoice]['6'],
            this.keyDict[keyChoice].b7,
            this.keyDict[keyChoice]['1'],
            this.keyDict[keyChoice]['2']
          ],
          path: `./assets/mp3s/${this.keyDict[keyChoice].b3} Lydian scale.mp3`
        }
      ],
      notesToAvoid: [
        {
          name: '3',
          keys: this.keyDict[keyChoice]['3'],
          path: `./assets/mp3s/${keyChoice} 3.mp3`
        },
        {
          name: '7',
          keys: this.keyDict[keyChoice]['7'],
          path: `./assets/mp3s/${keyChoice} 7.mp3`
        }
      ]
    };
  }

  domChord(keyChoice: string) {
    console.log(keyChoice + ' Dominant Chord Data Returned');
    return {
      name: `${this.keyDict[keyChoice].Root}7`,
      chordScale: `${this.keyDict[keyChoice].Root} Mixolydian Scale`,
      scale: [
        this.keyDict[keyChoice]['1'],
        this.keyDict[keyChoice]['2'],
        this.keyDict[keyChoice]['3'],
        this.keyDict[keyChoice]['4'],
        this.keyDict[keyChoice]['5'],
        this.keyDict[keyChoice]['6'],
        this.keyDict[keyChoice].b7
      ],
      scaleFile: `./assets/mp3s/${keyChoice} Mixolydian scale.mp3`,
      chordFile: `./assets/mp3s/${keyChoice} Dominant chord.mp3`,
      mainText: `Dominant Chords are traditionally 'tension' chords, meaning that they build tension towards other chords by resolving in certain ways. That being said, many genres such as blues, rock, jazz, electronic, and pop use the Dominant Chord as the tonic (key of the song)! In the ii-V-I (2 - 5 - 1) chord progression, the Dominant chord is the V (5) - which resolves to the I (1). The 'Guide Tones' in the dominant chord are the 3rd (${this.keyDict[keyChoice]['3']}), which normally resolves to the root of the next chord (usually ${this.keyDict[keyChoice]['4']} Major or Minor), and the 7th (${this.keyDict[keyChoice].b7}), which typically resolves to the 3rd of the next chord (${this.keyDict[keyChoice]['6']} for ${this.keyDict[keyChoice]['4']} Major, ${this.keyDict[keyChoice].b6} for ${this.keyDict[keyChoice]['4']} Minor). If the next chord is another dominant chord (${this.keyDict[keyChoice]['4']}7), you can resolve the 3rd down to the 7th of the next chord (${this.keyDict[keyChoice]['4']} -> ${this.keyDict[keyChoice].b3}), essentially switching the roles of the 3rd and the 7th. Theoretically you can loop this motion as long as physically possible on your instrument, which is a great exercise!`,
      chordGuideTone: {
        name: `${this.keyDict[keyChoice].Root} 7 Chord Tones`,
        keys: [
          this.keyDict[keyChoice]['1'],
          this.keyDict[keyChoice]['3'],
          this.keyDict[keyChoice]['5'],
          this.keyDict[keyChoice].b7
        ],
        path: `./assets/mp3s/${keyChoice} Dominant chord tones.mp3`
      },
      extensions: [
        {
          name: '9',
          keys: this.keyDict[keyChoice]['2'],
          path: `./assets/mp3s/${keyChoice} 9.mp3`,
          chord: `${this.keyDict[keyChoice].Root}9`
        },
        {
          name: '13',
          keys: this.keyDict[keyChoice]['6'],
          path: `./assets/mp3s/${keyChoice} 13.mp3`,
          chord: `${this.keyDict[keyChoice].Root}13`
        },
        {
          name: 'b9',
          keys: this.keyDict[keyChoice].b2,
          path: `./assets/mp3s/${keyChoice} Flat_9.mp3`,
          chord: `${this.keyDict[keyChoice].Root}7b9`
        },
        {
          name: '#9',
          keys: this.keyDict[keyChoice].b3,
          path: `./assets/mp3s/${keyChoice} Sharp_9.mp3`,
          chord: `${this.keyDict[keyChoice].Root}7#9`
        },
        {
          name: '11',
          keys: this.keyDict[keyChoice]['4'],
          path: `./assets/mp3s/${keyChoice} 11.mp3`,
          chord: `${this.keyDict[keyChoice].Root}11`
        },
        {
          name: '#11',
          keys: this.keyDict[keyChoice].b5,
          path: `./assets/mp3s/${keyChoice} Sharp_11.mp3`,
          chord: `${this.keyDict[keyChoice].Root}7#11`
        },
        {
          name: 'b13',
          keys: this.keyDict[keyChoice].b6,
          path: `./assets/mp3s/${keyChoice} Flat_13.mp3`,
          chord: `${this.keyDict[keyChoice].Root}7b13, ${this.keyDict[keyChoice].Root}7#5`
        }
      ],
      extraExtensions: [
        {
          name: `${this.keyDict[keyChoice].Root} Half-Whole Diminished Scale`,
          keys: [
            this.keyDict[keyChoice]['1'],
            this.keyDict[keyChoice].b2,
            this.keyDict[keyChoice].b3,
            this.keyDict[keyChoice]['3'],
            this.keyDict[keyChoice].b5,
            this.keyDict[keyChoice]['5'],
            this.keyDict[keyChoice]['6'],
            this.keyDict[keyChoice].b7
          ],
          path: `./assets/mp3s/${keyChoice} Half-Diminished scale.mp3`
        },
        {
          name: `${this.keyDict[keyChoice].Root} Lydian Dominant Scale`,
          keys: [
            this.keyDict[keyChoice]['1'],
            this.keyDict[keyChoice]['2'],
            this.keyDict[keyChoice]['3'],
            this.keyDict[keyChoice].b5,
            this.keyDict[keyChoice]['5'],
            this.keyDict[keyChoice]['6'],
            this.keyDict[keyChoice].b7
          ],
          path: `./assets/mp3s/${keyChoice} Lydian Dominant scale.mp3`
        }
      ],
      notesToAvoid: [
        {
          name: '7',
          keys: this.keyDict[keyChoice]['7'],
          path: `./assets/mp3s/${keyChoice} 7.mp3`
        }
      ]
    };
  }

  halfDimChord(keyChoice: string) {
    console.log(keyChoice + ' Half-Diminished Chord Data Returned');
    return {
      name: `${this.keyDict[keyChoice].Root}min7b5`,
      chordScale: `${this.keyDict[keyChoice].Root} Locrian Scale`,
      scale: [
        this.keyDict[keyChoice]['1'],
        this.keyDict[keyChoice].b2,
        this.keyDict[keyChoice].b3,
        this.keyDict[keyChoice]['4'],
        this.keyDict[keyChoice].b5,
        this.keyDict[keyChoice].b6,
        this.keyDict[keyChoice].b7
      ],
      scaleFile: `./assets/mp3s/${keyChoice} Locrian scale.mp3`,
      chordFile: `./assets/mp3s/${keyChoice} Half-Diminished chord.mp3`,
      mainText: `Half-Diminished Chords are almost exclusively used as passing chords. Most commonly it is the ii (2) in the Minor ii-V-i (2 - 5 - 1) chord progression. If this is the case for you, the next two chords for you will likely be ${this.keyDict[keyChoice]['4']}7 (Dominant), followed by ${this.keyDict[keyChoice].b7} Minor.`,
      chordGuideTone: {
        name: `${this.keyDict[keyChoice].Root} Half-Diminished Chord Tones`,
        keys: [
          this.keyDict[keyChoice]['1'],
          this.keyDict[keyChoice].b3,
          this.keyDict[keyChoice].b5,
          this.keyDict[keyChoice].b7
        ],
        path: `./assets/mp3s/${keyChoice} Half-Diminished chord tones.mp3`
      },
      extensions: null,
      extraExtensions: null,
      notesToAvoid: [
        {
          name: '3',
          keys: this.keyDict[keyChoice]['3'],
          path: `./assets/mp3s/${keyChoice} 3.mp3`
        },
        {
          name: '7',
          keys: this.keyDict[keyChoice]['7'],
          path: `./assets/mp3s/${keyChoice} 7.mp3`
        }
      ]
    };
  }

  fullDimChord(keyChoice: string) {
    console.log(keyChoice + ' Fully-Diminished Chord Data Returned');
    return {
      name: `${this.keyDict[keyChoice].Root}o7`,
      chordScale: `${this.keyDict[keyChoice].Root} Whole-Half Diminished Scale`,
      scale: [
        this.keyDict[keyChoice]['1'],
        this.keyDict[keyChoice]['2'],
        this.keyDict[keyChoice].b3,
        this.keyDict[keyChoice]['4'],
        this.keyDict[keyChoice].b5,
        this.keyDict[keyChoice].b6,
        this.keyDict[keyChoice]['6'],
        this.keyDict[keyChoice]['7']
      ],
      scaleFile: `./assets/mp3s/${keyChoice} Fully-Diminished scale.mp3`,
      chordFile: `./assets/mp3s/${keyChoice} Fully-Diminished chord.mp3`,
      mainText: `Fully-Diminished Chords are strange, to say the least. They are traditionally used as tension chords AND passing chords. A ${this.keyDict[keyChoice].Root}o7 would traditionally resolve to a ${this.keyDict[keyChoice].b2} Minor chord, but because of its instability it is a 'weaker' tension chord than a Dominant Chord. Every chord tone is a minor 3rd away from the next, making it the only completely symmetrical chord in traditional western music. In fact, because this chord is completely symmetrical, a ${this.keyDict[keyChoice].Root}o7 chord has the same exact chord tones as ${this.keyDict[keyChoice].b3}o7, ${this.keyDict[keyChoice].b5}o7, and ${this.keyDict[keyChoice]['6']}o7!`,
      chordGuideTone: {
        name: `${this.keyDict[keyChoice].Root} Diminished Chord Tones`,
        keys: [
          this.keyDict[keyChoice]['1'],
          this.keyDict[keyChoice].b3,
          this.keyDict[keyChoice].b5,
          this.keyDict[keyChoice]['6']
        ],
        path: `./assets/mp3s/${keyChoice} Fully-Diminished chord tones.mp3`
      },
      extensions: null,
      extraExtensions: [
        {
          name: `${this.keyDict[keyChoice].b3} Whole-Half Diminished Scale`,
          keys: [
            this.keyDict[keyChoice].b3,
            this.keyDict[keyChoice]['4'],
            this.keyDict[keyChoice].b5,
            this.keyDict[keyChoice].b6,
            this.keyDict[keyChoice]['6'],
            this.keyDict[keyChoice]['7'],
            this.keyDict[keyChoice]['1'],
            this.keyDict[keyChoice]['2']
          ],
          path: `./assets/mp3s/${this.keyDict[keyChoice].b3} Fully-Diminished scale.mp3`
        }
      ],
      notesToAvoid: [
        {
          name: '3',
          keys: this.keyDict[keyChoice]['3'],
          path: `./assets/mp3s/${keyChoice} 3.mp3`
        },
        {
          name: 'b7',
          keys: this.keyDict[keyChoice].b7,
          path: `./assets/mp3s/${keyChoice} Flat_7.mp3`
        }
      ]
    };
  }
}
