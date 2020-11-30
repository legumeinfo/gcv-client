import * as jspb from 'google-protobuf'



export class Region extends jspb.Message {
  getGene(): string;
  setGene(value: string): Region;

  getNeighbors(): number;
  setNeighbors(value: number): Region;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Region.AsObject;
  static toObject(includeInstance: boolean, msg: Region): Region.AsObject;
  static serializeBinaryToWriter(message: Region, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Region;
  static deserializeBinaryFromReader(message: Region, reader: jspb.BinaryReader): Region;
}

export namespace Region {
  export type AsObject = {
    gene: string,
    neighbors: number,
  }
}

