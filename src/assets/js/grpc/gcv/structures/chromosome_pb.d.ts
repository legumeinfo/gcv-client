import * as jspb from 'google-protobuf'

import * as structures_track_pb from '../structures/track_pb';


export class Chromosome extends jspb.Message {
  getLength(): number;
  setLength(value: number): Chromosome;

  getTrack(): structures_track_pb.Track | undefined;
  setTrack(value?: structures_track_pb.Track): Chromosome;
  hasTrack(): boolean;
  clearTrack(): Chromosome;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chromosome.AsObject;
  static toObject(includeInstance: boolean, msg: Chromosome): Chromosome.AsObject;
  static serializeBinaryToWriter(message: Chromosome, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chromosome;
  static deserializeBinaryFromReader(message: Chromosome, reader: jspb.BinaryReader): Chromosome;
}

export namespace Chromosome {
  export type AsObject = {
    length: number,
    track?: structures_track_pb.Track.AsObject,
  }
}

