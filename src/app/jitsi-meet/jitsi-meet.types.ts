export type JitsiUserInfo = {
  email?: string
  displayName?: string
}

export type JitsiOptions = {
  roomName: string,
  parentNode?: HTMLElement,
  width?: number | string,
  height?: number | string,
  userInfo?: JitsiUserInfo,
  lang?: string,
  configOverwrite?: object,
  interfaceConfigOverwrite?: object
}

export enum JitsiEvent {
  PARTICIPANT_JOINED = "participantJoined",
}

export enum JitsiCommand {
  TOGGLE_AUDIO = 'toggleAudio',
  TOGGLE_VIDEO = 'toggleVideo',
  HANGUP = "hangup",
  DISPLAY_NAME = "displayName"
}

export type ParticipantJoinedEvent = {
  id: string
  displayName: string
}

