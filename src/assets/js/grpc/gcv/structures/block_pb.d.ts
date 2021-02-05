import * as jspb from 'google-protobuf'



export class Blocks extends jspb.Message {
  getChromosome(): string;
  setChromosome(value: string): Blocks;

  getGenus(): string;
  setGenus(value: string): Blocks;

  getSpecies(): string;
  setSpecies(value: string): Blocks;

  getBlocksList(): Array<Block>;
  setBlocksList(value: Array<Block>): Blocks;
  clearBlocksList(): Blocks;
  addBlocks(value?: Block, index?: number): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blocks.AsObject;
  static toObject(includeInstance: boolean, msg: Blocks): Blocks.AsObject;
  static serializeBinaryToWriter(message: Blocks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blocks;
  static deserializeBinaryFromReader(message: Blocks, reader: jspb.BinaryReader): Blocks;
}

export namespace Blocks {
  export type AsObject = {
    chromosome: string,
    genus: string,
    species: string,
    blocksList: Array<Block.AsObject>,
  }
}

export class Block extends jspb.Message {
  getI(): number;
  setI(value: number): Block;

  getJ(): number;
  setJ(value: number): Block;

  getFmin(): number;
  setFmin(value: number): Block;

  getFmax(): number;
  setFmax(value: number): Block;

  getOrientation(): string;
  setOrientation(value: string): Block;

  getOptionalmetricsList(): Array<number>;
  setOptionalmetricsList(value: Array<number>): Block;
  clearOptionalmetricsList(): Block;
  addOptionalmetrics(value: number, index?: number): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    i: number,
    j: number,
    fmin: number,
    fmax: number,
    orientation: string,
    optionalmetricsList: Array<number>,
  }
}

