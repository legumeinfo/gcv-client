import * as jspb from 'google-protobuf'

import * as structures_gene_pb from '../structures/gene_pb';


export class GenesGetRequest extends jspb.Message {
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): GenesGetRequest;
  clearNamesList(): GenesGetRequest;
  addNames(value: string, index?: number): GenesGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenesGetRequest): GenesGetRequest.AsObject;
  static serializeBinaryToWriter(message: GenesGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesGetRequest;
  static deserializeBinaryFromReader(message: GenesGetRequest, reader: jspb.BinaryReader): GenesGetRequest;
}

export namespace GenesGetRequest {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class GenesGetReply extends jspb.Message {
  getGenesList(): Array<structures_gene_pb.Gene>;
  setGenesList(value: Array<structures_gene_pb.Gene>): GenesGetReply;
  clearGenesList(): GenesGetReply;
  addGenes(value?: structures_gene_pb.Gene, index?: number): structures_gene_pb.Gene;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesGetReply.AsObject;
  static toObject(includeInstance: boolean, msg: GenesGetReply): GenesGetReply.AsObject;
  static serializeBinaryToWriter(message: GenesGetReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesGetReply;
  static deserializeBinaryFromReader(message: GenesGetReply, reader: jspb.BinaryReader): GenesGetReply;
}

export namespace GenesGetReply {
  export type AsObject = {
    genesList: Array<structures_gene_pb.Gene.AsObject>,
  }
}

