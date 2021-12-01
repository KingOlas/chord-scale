import { Injectable } from '@angular/core';
import { Howl, Howler } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {

  constructor() {
    console.log('Media Service Running')

    Howler.volume(0.45);

  }
   
  keyChoice: string
  chordType: string
  location: string

  //file: MediaObject
  player: Howl

  getTrack(location: string) {
    console.log(`Getting Chord Audio`)
    this.player = new Howl ({
      src: [location]
    })
    const filename = location.split('\\').pop().split('/').pop()
    console.log(` Successfully Loaded ${filename}`)
    return this.player
  }

  playTrack(player) {
    player.play()
  }

  stopTrack(player) {
    player.stop()
  }

}
