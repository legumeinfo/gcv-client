import * as jspb from 'google-protobuf'

import * as structures_block_pb from '../structures/block_pb';


export class PairwiseMacroSyntenyBlocksComputeRequest extends jspb.Message {
  getChromosomeList(): Array<string>;
  setChromosomeList(value: Array<string>): PairwiseMacroSyntenyBlocksComputeRequest;
  clearChromosomeList(): PairwiseMacroSyntenyBlocksComputeRequest;
  addChromosome(value: string, index?: number): PairwiseMacroSyntenyBlocksComputeRequest;

  getTarget(): string;
  setTarget(value: string): PairwiseMacroSyntenyBlocksComputeRequest;

  getMatched(): number;
  setMatched(value: number): PairwiseMacroSyntenyBlocksComputeRequest;

  getIntermediate(): number;
  setIntermediate(value: number): PairwiseMacroSyntenyBlocksComputeRequest;

  getMask(): number;
  setMask(value: number): PairwiseMacroSyntenyBlocksComputeRequest;

  getMaskCase(): PairwiseMacroSyntenyBlocksComputeRequest.MaskCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PairwiseMacroSyntenyBlocksComputeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PairwiseMacroSyntenyBlocksComputeRequest): PairwiseMacroSyntenyBlocksComputeRequest.AsObject;
  static serializeBinaryToWriter(message: PairwiseMacroSyntenyBlocksComputeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PairwiseMacroSyntenyBlocksComputeRequest;
  static deserializeBinaryFromReader(message: PairwiseMacroSyntenyBlocksComputeRequest, reader: jspb.BinaryReader): PairwiseMacroSyntenyBlocksComputeRequest;
}

export namespace PairwiseMacroSyntenyBlocksComputeRequest {
  export type AsObject = {
    chromosomeList: Array<string>,
    target: string,
    matched: number,
    intermediate: number,
    mask: number,
  }

  export enum MaskCase { 
    _MASK_NOT_SET = 0,
    MASK = 5,
  }
}

export class PairwiseMacroSyntenyBlocksComputeReply extends jspb.Message {
  getBlocksList(): Array<structures_block_pb.Block>;
  setBlocksList(value: Array<structures_block_pb.Block>): PairwiseMacroSyntenyBlocksComputeReply;
  clearBlocksList(): PairwiseMacroSyntenyBlocksComputeReply;
  addBlocks(value?: structures_block_pb.Block, index?: number): structures_block_pb.Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PairwiseMacroSyntenyBlocksComputeReply.AsObject;
  static toObject(includeInstance: boolean, msg: PairwiseMacroSyntenyBlocksComputeReply): PairwiseMacroSyntenyBlocksComputeReply.AsObject;
  static serializeBinaryToWriter(message: PairwiseMacroSyntenyBlocksComputeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PairwiseMacroSyntenyBlocksComputeReply;
  static deserializeBinaryFromReader(message: PairwiseMacroSyntenyBlocksComputeReply, reader: jspb.BinaryReader): PairwiseMacroSyntenyBlocksComputeReply;
}

export namespace PairwiseMacroSyntenyBlocksComputeReply {
  export type AsObject = {
    blocksList: Array<structures_block_pb.Block.AsObject>,
  }
}

