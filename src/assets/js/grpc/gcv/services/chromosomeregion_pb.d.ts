import * as jspb from 'google-protobuf'

import * as structures_region_pb from '../structures/region_pb';


export class ChromosomeRegionGetRequest extends jspb.Message {
  getChromosome(): string;
  setChromosome(value: string): ChromosomeRegionGetRequest;

  getStart(): number;
  setStart(value: number): ChromosomeRegionGetRequest;

  getStop(): number;
  setStop(value: number): ChromosomeRegionGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChromosomeRegionGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChromosomeRegionGetRequest): ChromosomeRegionGetRequest.AsObject;
  static serializeBinaryToWriter(message: ChromosomeRegionGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChromosomeRegionGetRequest;
  static deserializeBinaryFromReader(message: ChromosomeRegionGetRequest, reader: jspb.BinaryReader): ChromosomeRegionGetRequest;
}

export namespace ChromosomeRegionGetRequest {
  export type AsObject = {
    chromosome: string,
    start: number,
    stop: number,
  }
}

export class ChromosomeRegionGetReply extends jspb.Message {
  getRegion(): structures_region_pb.Region | undefined;
  setRegion(value?: structures_region_pb.Region): ChromosomeRegionGetReply;
  hasRegion(): boolean;
  clearRegion(): ChromosomeRegionGetReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChromosomeRegionGetReply.AsObject;
  static toObject(includeInstance: boolean, msg: ChromosomeRegionGetReply): ChromosomeRegionGetReply.AsObject;
  static serializeBinaryToWriter(message: ChromosomeRegionGetReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChromosomeRegionGetReply;
  static deserializeBinaryFromReader(message: ChromosomeRegionGetReply, reader: jspb.BinaryReader): ChromosomeRegionGetReply;
}

export namespace ChromosomeRegionGetReply {
  export type AsObject = {
    region?: structures_region_pb.Region.AsObject,
  }
}

