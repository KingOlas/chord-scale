import { Injectable } from '@angular/core';
import { Howl, Howler } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {

  constructor() {
    console.log('Media Service Running')

    // Setting Overall Volume to 45% to ensure no distortion or blown speakers/headphones
    Howler.volume(0.45);

  }
  
  // Variables From ChordService / User Input
  keyChoice: string
  chordType: string

  // Path for Howler to Create Howler Object
  location: string

  // Variable for Howler Object
  player: Howl

  getTrack(location: string) {
    console.log(`Getting Chord Audio`)
    this.player = new Howl ({
      src: [location]
    })
    const filename = location.split('\\').pop().split('/').pop()
    console.log(` Successfully Loaded ${filename}`)
    // Howler Object (mp3) returned
    return this.player
  }

  // "player" object passed into argument from tab1.ts to play/stop correct audio
  playTrack(player) {
    player.play()
  }

  stopTrack(player) {
    player.stop()
  }

}
