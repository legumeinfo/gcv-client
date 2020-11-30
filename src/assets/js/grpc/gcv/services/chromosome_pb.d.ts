import * as jspb from 'google-protobuf'

import * as structures_chromosome_pb from '../structures/chromosome_pb';


export class ChromosomeGetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ChromosomeGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChromosomeGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChromosomeGetRequest): ChromosomeGetRequest.AsObject;
  static serializeBinaryToWriter(message: ChromosomeGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChromosomeGetRequest;
  static deserializeBinaryFromReader(message: ChromosomeGetRequest, reader: jspb.BinaryReader): ChromosomeGetRequest;
}

export namespace ChromosomeGetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ChromosomeGetReply extends jspb.Message {
  getChromosome(): structures_chromosome_pb.Chromosome | undefined;
  setChromosome(value?: structures_chromosome_pb.Chromosome): ChromosomeGetReply;
  hasChromosome(): boolean;
  clearChromosome(): ChromosomeGetReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChromosomeGetReply.AsObject;
  static toObject(includeInstance: boolean, msg: ChromosomeGetReply): ChromosomeGetReply.AsObject;
  static serializeBinaryToWriter(message: ChromosomeGetReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChromosomeGetReply;
  static deserializeBinaryFromReader(message: ChromosomeGetReply, reader: jspb.BinaryReader): ChromosomeGetReply;
}

export namespace ChromosomeGetReply {
  export type AsObject = {
    chromosome?: structures_chromosome_pb.Chromosome.AsObject,
  }
}

