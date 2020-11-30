import * as jspb from 'google-protobuf'

import * as structures_microtrack_pb from '../structures/microtrack_pb';


export class MicroSyntenySearchRequest extends jspb.Message {
  getQueryList(): Array<string>;
  setQueryList(value: Array<string>): MicroSyntenySearchRequest;
  clearQueryList(): MicroSyntenySearchRequest;
  addQuery(value: string, index?: number): MicroSyntenySearchRequest;

  getMatched(): number;
  setMatched(value: number): MicroSyntenySearchRequest;

  getIntermediate(): number;
  setIntermediate(value: number): MicroSyntenySearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MicroSyntenySearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MicroSyntenySearchRequest): MicroSyntenySearchRequest.AsObject;
  static serializeBinaryToWriter(message: MicroSyntenySearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MicroSyntenySearchRequest;
  static deserializeBinaryFromReader(message: MicroSyntenySearchRequest, reader: jspb.BinaryReader): MicroSyntenySearchRequest;
}

export namespace MicroSyntenySearchRequest {
  export type AsObject = {
    queryList: Array<string>,
    matched: number,
    intermediate: number,
  }
}

export class MicroSyntenySearchReply extends jspb.Message {
  getTracksList(): Array<structures_microtrack_pb.MicroTrack>;
  setTracksList(value: Array<structures_microtrack_pb.MicroTrack>): MicroSyntenySearchReply;
  clearTracksList(): MicroSyntenySearchReply;
  addTracks(value?: structures_microtrack_pb.MicroTrack, index?: number): structures_microtrack_pb.MicroTrack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MicroSyntenySearchReply.AsObject;
  static toObject(includeInstance: boolean, msg: MicroSyntenySearchReply): MicroSyntenySearchReply.AsObject;
  static serializeBinaryToWriter(message: MicroSyntenySearchReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MicroSyntenySearchReply;
  static deserializeBinaryFromReader(message: MicroSyntenySearchReply, reader: jspb.BinaryReader): MicroSyntenySearchReply;
}

export namespace MicroSyntenySearchReply {
  export type AsObject = {
    tracksList: Array<structures_microtrack_pb.MicroTrack.AsObject>,
  }
}

