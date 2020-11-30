import * as jspb from 'google-protobuf'



export class ChromosomeSearchRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): ChromosomeSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChromosomeSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChromosomeSearchRequest): ChromosomeSearchRequest.AsObject;
  static serializeBinaryToWriter(message: ChromosomeSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChromosomeSearchRequest;
  static deserializeBinaryFromReader(message: ChromosomeSearchRequest, reader: jspb.BinaryReader): ChromosomeSearchRequest;
}

export namespace ChromosomeSearchRequest {
  export type AsObject = {
    query: string,
  }
}

export class ChromosomeSearchReply extends jspb.Message {
  getChromosomesList(): Array<string>;
  setChromosomesList(value: Array<string>): ChromosomeSearchReply;
  clearChromosomesList(): ChromosomeSearchReply;
  addChromosomes(value: string, index?: number): ChromosomeSearchReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChromosomeSearchReply.AsObject;
  static toObject(includeInstance: boolean, msg: ChromosomeSearchReply): ChromosomeSearchReply.AsObject;
  static serializeBinaryToWriter(message: ChromosomeSearchReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChromosomeSearchReply;
  static deserializeBinaryFromReader(message: ChromosomeSearchReply, reader: jspb.BinaryReader): ChromosomeSearchReply;
}

export namespace ChromosomeSearchReply {
  export type AsObject = {
    chromosomesList: Array<string>,
  }
}

