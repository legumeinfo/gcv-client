import * as jspb from 'google-protobuf'

import * as structures_track_pb from '../structures/track_pb';


export class MicroTrack extends jspb.Message {
  getName(): string;
  setName(value: string): MicroTrack;

  getTrack(): structures_track_pb.Track | undefined;
  setTrack(value?: structures_track_pb.Track): MicroTrack;
  hasTrack(): boolean;
  clearTrack(): MicroTrack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MicroTrack.AsObject;
  static toObject(includeInstance: boolean, msg: MicroTrack): MicroTrack.AsObject;
  static serializeBinaryToWriter(message: MicroTrack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MicroTrack;
  static deserializeBinaryFromReader(message: MicroTrack, reader: jspb.BinaryReader): MicroTrack;
}

export namespace MicroTrack {
  export type AsObject = {
    name: string,
    track?: structures_track_pb.Track.AsObject,
  }
}

