import * as jspb from 'google-protobuf'



export class Gene extends jspb.Message {
  getName(): string;
  setName(value: string): Gene;

  getFmin(): number;
  setFmin(value: number): Gene;

  getFmax(): number;
  setFmax(value: number): Gene;

  getStrand(): number;
  setStrand(value: number): Gene;

  getFamily(): string;
  setFamily(value: string): Gene;

  getChromosome(): string;
  setChromosome(value: string): Gene;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Gene.AsObject;
  static toObject(includeInstance: boolean, msg: Gene): Gene.AsObject;
  static serializeBinaryToWriter(message: Gene, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Gene;
  static deserializeBinaryFromReader(message: Gene, reader: jspb.BinaryReader): Gene;
}

export namespace Gene {
  export type AsObject = {
    name: string,
    fmin: number,
    fmax: number,
    strand: number,
    family: string,
    chromosome: string,
  }
}

