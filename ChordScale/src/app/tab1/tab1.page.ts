import { Component } from '@angular/core';
import { ChordServiceService } from '../chord-service.service';
import { MediaServiceService } from '../media-service.service';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // User Input: Chord Variables
  keyChoice: string;
  chordType: string;

  // variable for Processed Chord Data
  data: any;

  // variables for Main Howler Objects
  scaleFile: any;
  chordToneFile: any;
  chordFile: any;

  // variable for Howler Functions
  track: any;

  constructor(
    public chordService: ChordServiceService,
    public mediaService: MediaServiceService,
    public contactService: ContactService
  ) { }

  async getChord(keyChoice: string, chordType: string) {
    // Input validation
    if (this.keyChoice == null || this.chordType == null) {
      return await this.contactService.chordAlert();
    } else {
      console.log('Getting Chord Data: ' + keyChoice + ' ' + chordType);
      switch (chordType) {

        // Major Chord
        case 'maj':
          this.data = this.chordService.majorChord(keyChoice);
          console.log(this.data);

          // Assigning Main Howler Objects via mediaService
          this.scaleFile = this.mediaService.getTrack(this.data.scaleFile);
          this.chordToneFile = this.mediaService.getTrack(this.data.chordGuideTone.path);
          this.chordFile = this.mediaService.getTrack(this.data.chordFile);

          // Re-Assigning Track Path Objects as Howler Objects via mediaService
          this.data.extensions[0].track = this.mediaService.getTrack(this.data.extensions[0].path);
          this.data.extensions[1].track = this.mediaService.getTrack(this.data.extensions[1].path);
          this.data.extensions[2].track = this.mediaService.getTrack(this.data.extensions[2].path);

          this.data.extraExtensions[0].track = this.mediaService.getTrack(this.data.extraExtensions[0].path);

          this.data.notesToAvoid[0].track = this.mediaService.getTrack(this.data.notesToAvoid[0].path);
          this.data.notesToAvoid[1].track = this.mediaService.getTrack(this.data.notesToAvoid[1].path);
          this.data.notesToAvoid[2].track = this.mediaService.getTrack(this.data.notesToAvoid[2].path);
          break;

        // Minor Chord
        case 'min':
          this.data = this.chordService.minorChord(keyChoice);
          console.log(this.data);

          // Assigning Main Howler Objects
          this.scaleFile = this.mediaService.getTrack(this.data.scaleFile);
          this.chordToneFile = this.mediaService.getTrack(this.data.chordGuideTone.path);
          this.chordFile = this.mediaService.getTrack(this.data.chordFile);

          // Re-Assigning Track Path Objects as Howler Objects
          this.data.extensions[0].track = this.mediaService.getTrack(this.data.extensions[0].path);
          this.data.extensions[1].track = this.mediaService.getTrack(this.data.extensions[1].path);
          this.data.extensions[2].track = this.mediaService.getTrack(this.data.extensions[2].path);

          this.data.extraExtensions[0].track = this.mediaService.getTrack(this.data.extraExtensions[0].path);

          this.data.notesToAvoid[0].track = this.mediaService.getTrack(this.data.notesToAvoid[0].path);
          this.data.notesToAvoid[1].track = this.mediaService.getTrack(this.data.notesToAvoid[1].path);
          break;

        // Dominant (7) Chord
        case 'dom':
          this.data = this.chordService.domChord(keyChoice);
          console.log(this.data);

          // Assigning Main Howler Objects
          this.scaleFile = this.mediaService.getTrack(this.data.scaleFile);
          this.chordToneFile = this.mediaService.getTrack(this.data.chordGuideTone.path);
          this.chordFile = this.mediaService.getTrack(this.data.chordFile);

          // Re-Assigning Track Path Objects as Howler Objects
          this.data.extensions[0].track = this.mediaService.getTrack(this.data.extensions[0].path);
          this.data.extensions[1].track = this.mediaService.getTrack(this.data.extensions[1].path);
          this.data.extensions[2].track = this.mediaService.getTrack(this.data.extensions[2].path);
          this.data.extensions[3].track = this.mediaService.getTrack(this.data.extensions[3].path);
          this.data.extensions[4].track = this.mediaService.getTrack(this.data.extensions[4].path);
          this.data.extensions[5].track = this.mediaService.getTrack(this.data.extensions[5].path);
          this.data.extensions[6].track = this.mediaService.getTrack(this.data.extensions[6].path);

          this.data.extraExtensions[0].track = this.mediaService.getTrack(this.data.extraExtensions[0].path);
          this.data.extraExtensions[1].track = this.mediaService.getTrack(this.data.extraExtensions[1].path);

          this.data.notesToAvoid[0].track = this.mediaService.getTrack(this.data.notesToAvoid[0].path);
          break;

        // Half-Diminished Chord
        case 'half':
          this.data = this.chordService.halfDimChord(keyChoice);
          console.log(this.data);

          // Assigning Main Howler Objects
          this.scaleFile = this.mediaService.getTrack(this.data.scaleFile);
          this.chordToneFile = this.mediaService.getTrack(this.data.chordGuideTone.path);
          this.chordFile = this.mediaService.getTrack(this.data.chordFile);

          this.data.notesToAvoid[0].track = this.mediaService.getTrack(this.data.notesToAvoid[0].path);
          this.data.notesToAvoid[1].track = this.mediaService.getTrack(this.data.notesToAvoid[1].path);
          break;

        // Fully-Diminished Chord
        case 'full':
          this.data = this.chordService.fullDimChord(keyChoice);
          console.log(this.data);

          // Assigning Main Howler Objects
          this.scaleFile = this.mediaService.getTrack(this.data.scaleFile);
          this.chordToneFile = this.mediaService.getTrack(this.data.chordGuideTone.path);
          this.chordFile = this.mediaService.getTrack(this.data.chordFile);

          this.data.extraExtensions[0].track = this.mediaService.getTrack(this.data.extraExtensions[0].path);

          this.data.notesToAvoid[0].track = this.mediaService.getTrack(this.data.notesToAvoid[0].path);
          this.data.notesToAvoid[1].track = this.mediaService.getTrack(this.data.notesToAvoid[1].path);
          break;

        default:
          this.data = null;
          break;
      }
      return this.data;
    }
  }

  // Utilizing "track" object to control specific Howler Objects with the correct play/stop buttons
  play(track: any) {
    this.mediaService.playTrack(track);
    console.log('Audio Playing');
  }

  stop(track: any) {
    this.mediaService.stopTrack(track);
    console.log('Audio Stopped');
  }
}
