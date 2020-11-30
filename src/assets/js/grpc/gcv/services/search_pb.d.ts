import * as jspb from 'google-protobuf'

import * as structures_region_pb from '../structures/region_pb';


export class SearchRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    query: string,
  }
}

export class SearchReply extends jspb.Message {
  getGenesList(): Array<string>;
  setGenesList(value: Array<string>): SearchReply;
  clearGenesList(): SearchReply;
  addGenes(value: string, index?: number): SearchReply;

  getRegionsList(): Array<structures_region_pb.Region>;
  setRegionsList(value: Array<structures_region_pb.Region>): SearchReply;
  clearRegionsList(): SearchReply;
  addRegions(value?: structures_region_pb.Region, index?: number): structures_region_pb.Region;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchReply.AsObject;
  static toObject(includeInstance: boolean, msg: SearchReply): SearchReply.AsObject;
  static serializeBinaryToWriter(message: SearchReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchReply;
  static deserializeBinaryFromReader(message: SearchReply, reader: jspb.BinaryReader): SearchReply;
}

export namespace SearchReply {
  export type AsObject = {
    genesList: Array<string>,
    regionsList: Array<structures_region_pb.Region.AsObject>,
  }
}

