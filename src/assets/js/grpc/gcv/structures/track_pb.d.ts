import * as jspb from 'google-protobuf'



export class Track extends jspb.Message {
  getGenus(): string;
  setGenus(value: string): Track;

  getSpecies(): string;
  setSpecies(value: string): Track;

  getGenesList(): Array<string>;
  setGenesList(value: Array<string>): Track;
  clearGenesList(): Track;
  addGenes(value: string, index?: number): Track;

  getFamiliesList(): Array<string>;
  setFamiliesList(value: Array<string>): Track;
  clearFamiliesList(): Track;
  addFamilies(value: string, index?: number): Track;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Track.AsObject;
  static toObject(includeInstance: boolean, msg: Track): Track.AsObject;
  static serializeBinaryToWriter(message: Track, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Track;
  static deserializeBinaryFromReader(message: Track, reader: jspb.BinaryReader): Track;
}

export namespace Track {
  export type AsObject = {
    genus: string,
    species: string,
    genesList: Array<string>,
    familiesList: Array<string>,
  }
}

