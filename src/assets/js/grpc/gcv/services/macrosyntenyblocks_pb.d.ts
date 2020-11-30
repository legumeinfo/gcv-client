import * as jspb from 'google-protobuf'

import * as structures_block_pb from '../structures/block_pb';


export class MacroSyntenyBlocksComputeRequest extends jspb.Message {
  getChromosomeList(): Array<string>;
  setChromosomeList(value: Array<string>): MacroSyntenyBlocksComputeRequest;
  clearChromosomeList(): MacroSyntenyBlocksComputeRequest;
  addChromosome(value: string, index?: number): MacroSyntenyBlocksComputeRequest;

  getMatched(): number;
  setMatched(value: number): MacroSyntenyBlocksComputeRequest;

  getIntermediate(): number;
  setIntermediate(value: number): MacroSyntenyBlocksComputeRequest;

  getMask(): number;
  setMask(value: number): MacroSyntenyBlocksComputeRequest;

  getTargetsList(): Array<string>;
  setTargetsList(value: Array<string>): MacroSyntenyBlocksComputeRequest;
  clearTargetsList(): MacroSyntenyBlocksComputeRequest;
  addTargets(value: string, index?: number): MacroSyntenyBlocksComputeRequest;

  getMaskCase(): MacroSyntenyBlocksComputeRequest.MaskCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MacroSyntenyBlocksComputeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MacroSyntenyBlocksComputeRequest): MacroSyntenyBlocksComputeRequest.AsObject;
  static serializeBinaryToWriter(message: MacroSyntenyBlocksComputeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MacroSyntenyBlocksComputeRequest;
  static deserializeBinaryFromReader(message: MacroSyntenyBlocksComputeRequest, reader: jspb.BinaryReader): MacroSyntenyBlocksComputeRequest;
}

export namespace MacroSyntenyBlocksComputeRequest {
  export type AsObject = {
    chromosomeList: Array<string>,
    matched: number,
    intermediate: number,
    mask: number,
    targetsList: Array<string>,
  }

  export enum MaskCase { 
    _MASK_NOT_SET = 0,
    MASK = 4,
  }
}

export class MacroSyntenyBlocksComputeReply extends jspb.Message {
  getBlocksList(): Array<structures_block_pb.Blocks>;
  setBlocksList(value: Array<structures_block_pb.Blocks>): MacroSyntenyBlocksComputeReply;
  clearBlocksList(): MacroSyntenyBlocksComputeReply;
  addBlocks(value?: structures_block_pb.Blocks, index?: number): structures_block_pb.Blocks;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MacroSyntenyBlocksComputeReply.AsObject;
  static toObject(includeInstance: boolean, msg: MacroSyntenyBlocksComputeReply): MacroSyntenyBlocksComputeReply.AsObject;
  static serializeBinaryToWriter(message: MacroSyntenyBlocksComputeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MacroSyntenyBlocksComputeReply;
  static deserializeBinaryFromReader(message: MacroSyntenyBlocksComputeReply, reader: jspb.BinaryReader): MacroSyntenyBlocksComputeReply;
}

export namespace MacroSyntenyBlocksComputeReply {
  export type AsObject = {
    blocksList: Array<structures_block_pb.Blocks.AsObject>,
  }
}

