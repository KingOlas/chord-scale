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

  keyChoice: string
  chordType: string
  location: string

  data

  scaleFile
  chordToneFile
  chordFile

  extension1
  extension2
  extension3
  extension4
  extension5
  extension6
  extension7

  alternateScale1
  alternateScale2

  n2a1
  n2a2
  n2a3

  track

  constructor(public chordService: ChordServiceService, public mediaService: MediaServiceService, public contactService: ContactService) {}

  // main function switch for app - determines which keyDict array to pull from //
  getChord(keyChoice: string, chordType: string) {
    console.log('Getting Chord Data: ' + keyChoice + ' ' + chordType)
    switch (chordType) {
        case 'maj':
            this.data = this.chordService.majorChord(keyChoice);
            console.log(this.data);

            this.scaleFile = this.mediaService.getTrack(this.data.scaleFile)
            this.chordToneFile = this.mediaService.getTrack(this.data.chord_guide_tone['path'])
            this.chordFile = this.mediaService.getTrack(this.data.chordFile)

            this.extension1 = this.mediaService.getTrack(this.data.extensions[0]['path'])
            this.extension2 = this.mediaService.getTrack(this.data.extensions[1]['path'])
            this.extension3 = this.mediaService.getTrack(this.data.extensions[2]['path'])

            this.alternateScale1 = this.mediaService.getTrack(this.data.extra_extensions[0]['path'])

            this.n2a1 = this.mediaService.getTrack(this.data.notes_to_avoid[0]['path'])
            this.n2a2 = this.mediaService.getTrack(this.data.notes_to_avoid[1]['path'])
            this.n2a3 = this.mediaService.getTrack(this.data.notes_to_avoid[2]['path'])
              break;

        case 'min':
          this.data = this.chordService.minorChord(keyChoice);
          console.log(this.data)

          this.scaleFile = this.mediaService.getTrack(this.data.scaleFile)
          this.chordToneFile = this.mediaService.getTrack(this.data.chord_guide_tone['path'])
          this.chordFile = this.mediaService.getTrack(this.data.chordFile)

          this.extension1 = this.mediaService.getTrack(this.data.extensions[0]['path'])
          this.extension2 = this.mediaService.getTrack(this.data.extensions[1]['path'])
          this.extension3 = this.mediaService.getTrack(this.data.extensions[2]['path'])

          this.alternateScale1 = this.mediaService.getTrack(this.data.extra_extensions[0]['path'])

          this.n2a1 = this.mediaService.getTrack(this.data.notes_to_avoid[0]['path'])
          this.n2a2 = this.mediaService.getTrack(this.data.notes_to_avoid[1]['path'])
            break;

        case 'dom':
          this.data = this.chordService.domChord(keyChoice);
          console.log(this.data)

          this.scaleFile = this.mediaService.getTrack(this.data.scaleFile)
          this.chordToneFile = this.mediaService.getTrack(this.data.chord_guide_tone['path'])
          this.chordFile = this.mediaService.getTrack(this.data.chordFile)

          this.extension1 = this.mediaService.getTrack(this.data.extensions[0]['path'])
          this.extension2 = this.mediaService.getTrack(this.data.extensions[1]['path'])
          this.extension3 = this.mediaService.getTrack(this.data.extensions[2]['path'])
          this.extension4 = this.mediaService.getTrack(this.data.extensions[3]['path'])
          this.extension5 = this.mediaService.getTrack(this.data.extensions[4]['path'])
          this.extension6 = this.mediaService.getTrack(this.data.extensions[5]['path'])
          this.extension7 = this.mediaService.getTrack(this.data.extensions[6]['path'])

          this.alternateScale1 = this.mediaService.getTrack(this.data.extra_extensions[0]['path'])
          this.alternateScale2 = this.mediaService.getTrack(this.data.extra_extensions[1]['path'])

          this.n2a1 = this.mediaService.getTrack(this.data.notes_to_avoid[0]['path'])
            break;

        case 'half':
          this.data = this.chordService.halfDimChord(keyChoice);
          console.log(this.data)

          this.scaleFile = this.mediaService.getTrack(this.data.scaleFile)
          this.chordToneFile = this.mediaService.getTrack(this.data.chord_guide_tone['path'])
          this.chordFile = this.mediaService.getTrack(this.data.chordFile)

          this.n2a1 = this.mediaService.getTrack(this.data.notes_to_avoid[0]['path'])
          this.n2a2 = this.mediaService.getTrack(this.data.notes_to_avoid[1]['path'])
            break;

        case 'full':
          this.data = this.chordService.fullDimChord(keyChoice);
          console.log(this.data)

          this.scaleFile = this.mediaService.getTrack(this.data.scaleFile)
          this.chordToneFile = this.mediaService.getTrack(this.data.chord_guide_tone['path'])
          this.chordFile = this.mediaService.getTrack(this.data.chordFile)

          this.alternateScale1 = this.mediaService.getTrack(this.data.extra_extensions[0]['path'])

          this.n2a1 = this.mediaService.getTrack(this.data.notes_to_avoid[0]['path'])
          this.n2a2 = this.mediaService.getTrack(this.data.notes_to_avoid[1]['path'])
            break;
            
        default:
          this.data = null;
            break;
    }
    return this.data;
  }

  // play2(location: string) {
  //   this.mediaService.getTrack(location)
  //   const filename = location.split('\\').pop().split('/').pop()
  //   this.mediaService.playTrack();
  //   console.log(`Playing ${filename}`);
  // }

  play(track) {
    this.mediaService.playTrack(track);
    console.log('Audio Playing')
  }

  stop(track) {
    this.mediaService.stopTrack(track);
    console.log('Audio Stopped');
  }

}
