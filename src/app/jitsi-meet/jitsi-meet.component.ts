import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from "../../environments/environment";
import { JitsiCommand, JitsiEvent, JitsiOptions, ParticipantJoinedEvent, } from "./jitsi-meet.types";
import { FormsModule } from "@angular/forms";
import { v4 as uuid } from 'uuid'

declare var JitsiMeetExternalAPI: any;


@Component({
  selector: 'app-jitsi-meet',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './jitsi-meet.component.html',
  styleUrl: './jitsi-meet.component.css'
})
export class JitsiMeetComponent implements AfterViewInit {

  @ViewChild('jitsiMeetElement') jitsiElement: ElementRef | undefined;
  domain!: string
  options!: JitsiOptions
  roomName!: string
  api: any

  displayName: string = 'DefaultName'

  isAudioMuted: boolean = true
  isVideoMuted: boolean = true

  ngAfterViewInit(): void {
    this.domain = environment.jitsiMeetDomainURL
    this.roomName = uuid().toString().substring(0, 12)
    this.options = {
      roomName: this.roomName,
      lang: 'en',
      parentNode: this.jitsiElement?.nativeElement,
      height: 600,
      configOverwrite: {
        startWithAudioMuted: this.isAudioMuted,
        startWithVideoMuted: this.isVideoMuted,
      },
      userInfo: {
        displayName: this.displayName,
      }
    }
    this.api = new JitsiMeetExternalAPI(this.domain, this.options)

    this.setEventHandlers()
  }

  setEventHandlers() {
    this.api.addEventListener(JitsiEvent.PARTICIPANT_JOINED, this.handleParticipantJoin)
  }

  executeCommand(command: JitsiCommand, ...args: any[]) {
    try {
      this.api.executeCommand(command, ...args)
    } catch (e) {
      console.error("[ERROR]: ExecuteCommand: ", e)
    }
  }

  handleParticipantJoin(participant: ParticipantJoinedEvent) {
    console.log(`${participant.displayName} joined into the room.`)

  }

  setDisplayName() {
    this.executeCommand(JitsiCommand.DISPLAY_NAME, this.displayName)
  }

  toggleAudio() {
    this.executeCommand(JitsiCommand.TOGGLE_AUDIO)
    this.isAudioMuted = !this.isAudioMuted
  }

  toggleVideo() {
    this.executeCommand(JitsiCommand.TOGGLE_VIDEO)
    this.isVideoMuted = !this.isVideoMuted
  }

  hangup() {
    this.executeCommand(JitsiCommand.HANGUP)
  }
}
