import * as jspb from 'google-protobuf'



export class GeneSearchRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): GeneSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GeneSearchRequest): GeneSearchRequest.AsObject;
  static serializeBinaryToWriter(message: GeneSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneSearchRequest;
  static deserializeBinaryFromReader(message: GeneSearchRequest, reader: jspb.BinaryReader): GeneSearchRequest;
}

export namespace GeneSearchRequest {
  export type AsObject = {
    query: string,
  }
}

export class GeneSearchReply extends jspb.Message {
  getGenesList(): Array<string>;
  setGenesList(value: Array<string>): GeneSearchReply;
  clearGenesList(): GeneSearchReply;
  addGenes(value: string, index?: number): GeneSearchReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneSearchReply.AsObject;
  static toObject(includeInstance: boolean, msg: GeneSearchReply): GeneSearchReply.AsObject;
  static serializeBinaryToWriter(message: GeneSearchReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneSearchReply;
  static deserializeBinaryFromReader(message: GeneSearchReply, reader: jspb.BinaryReader): GeneSearchReply;
}

export namespace GeneSearchReply {
  export type AsObject = {
    genesList: Array<string>,
  }
}

