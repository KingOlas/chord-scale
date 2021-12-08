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

  data

  scaleFile
  chordToneFile
  chordFile

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

          this.data.extensions[0]['track'] = this.mediaService.getTrack(this.data.extensions[0]['path'])
          this.data.extensions[1]['track'] = this.mediaService.getTrack(this.data.extensions[1]['path'])
          this.data.extensions[2]['track'] = this.mediaService.getTrack(this.data.extensions[2]['path'])

          this.data.extra_extensions[0]['track'] = this.mediaService.getTrack(this.data.extra_extensions[0]['path'])

          this.data.notes_to_avoid[0]['track'] = this.mediaService.getTrack(this.data.notes_to_avoid[0]['path'])
          this.data.notes_to_avoid[1]['track'] = this.mediaService.getTrack(this.data.notes_to_avoid[1]['path'])
          this.data.notes_to_avoid[2]['track'] = this.mediaService.getTrack(this.data.notes_to_avoid[2]['path'])
            break;

        case 'min':
          this.data = this.chordService.minorChord(keyChoice);
          console.log(this.data)

          this.scaleFile = this.mediaService.getTrack(this.data.scaleFile)
          this.chordToneFile = this.mediaService.getTrack(this.data.chord_guide_tone['path'])
          this.chordFile = this.mediaService.getTrack(this.data.chordFile)

          this.data.extensions[0]['track'] = this.mediaService.getTrack(this.data.extensions[0]['path'])
          this.data.extensions[1]['track'] = this.mediaService.getTrack(this.data.extensions[1]['path'])
          this.data.extensions[2]['track'] = this.mediaService.getTrack(this.data.extensions[2]['path'])

          this.data.extra_extensions[0]['track'] = this.mediaService.getTrack(this.data.extra_extensions[0]['path'])

          this.data.notes_to_avoid[0]['track'] = this.mediaService.getTrack(this.data.notes_to_avoid[0]['path'])
          this.data.notes_to_avoid[1]['track'] = this.mediaService.getTrack(this.data.notes_to_avoid[1]['path'])
            break;

        case 'dom':
          this.data = this.chordService.domChord(keyChoice);
          console.log(this.data)

          this.scaleFile = this.mediaService.getTrack(this.data.scaleFile)
          this.chordToneFile = this.mediaService.getTrack(this.data.chord_guide_tone['path'])
          this.chordFile = this.mediaService.getTrack(this.data.chordFile)

          this.data.extensions[0]['track'] = this.mediaService.getTrack(this.data.extensions[0]['path'])
          this.data.extensions[1]['track'] = this.mediaService.getTrack(this.data.extensions[1]['path'])
          this.data.extensions[2]['track'] = this.mediaService.getTrack(this.data.extensions[2]['path'])
          this.data.extensions[3]['track'] = this.mediaService.getTrack(this.data.extensions[3]['path'])
          this.data.extensions[4]['track'] = this.mediaService.getTrack(this.data.extensions[4]['path'])
          this.data.extensions[5]['track'] = this.mediaService.getTrack(this.data.extensions[5]['path'])
          this.data.extensions[6]['track'] = this.mediaService.getTrack(this.data.extensions[6]['path'])

          this.data.extra_extensions[0]['track'] = this.mediaService.getTrack(this.data.extra_extensions[0]['path'])
          this.data.extra_extensions[1]['track'] = this.mediaService.getTrack(this.data.extra_extensions[1]['path'])

          this.data.notes_to_avoid[0]['track'] = this.mediaService.getTrack(this.data.notes_to_avoid[0]['path'])
            break;

        case 'half':
          this.data = this.chordService.halfDimChord(keyChoice);
          console.log(this.data)

          this.scaleFile = this.mediaService.getTrack(this.data.scaleFile)
          this.chordToneFile = this.mediaService.getTrack(this.data.chord_guide_tone['path'])
          this.chordFile = this.mediaService.getTrack(this.data.chordFile)

          this.data.notes_to_avoid[0]['track'] = this.mediaService.getTrack(this.data.notes_to_avoid[0]['path'])
          this.data.notes_to_avoid[1]['track'] = this.mediaService.getTrack(this.data.notes_to_avoid[1]['path'])
            break;

        case 'full':
          this.data = this.chordService.fullDimChord(keyChoice);
          console.log(this.data)

          this.scaleFile = this.mediaService.getTrack(this.data.scaleFile)
          this.chordToneFile = this.mediaService.getTrack(this.data.chord_guide_tone['path'])
          this.chordFile = this.mediaService.getTrack(this.data.chordFile)

          this.data.extra_extensions[0]['track'] = this.mediaService.getTrack(this.data.extra_extensions[0]['path'])

          this.data.notes_to_avoid[0]['track'] = this.mediaService.getTrack(this.data.notes_to_avoid[0]['path'])
          this.data.notes_to_avoid[1]['track'] = this.mediaService.getTrack(this.data.notes_to_avoid[1]['path'])
            break;

        default:
          this.data = null;
            break;
    }
    return this.data;
  }

  play(track) {
    this.mediaService.playTrack(track);
    console.log('Audio Playing')
  }

  stop(track) {
    this.mediaService.stopTrack(track);
    console.log('Audio Stopped');
  }

}
