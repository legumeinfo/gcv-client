import { PairwiseBlocks } from '@gcv/gene/models';


export const grpcBlocksToModel =
(grpcBlocks, reference, chromosomeSource): PairwiseBlocks => {
  const {blocksList, genus, species, ...rest} = grpcBlocks.toObject();
  const blocks = {
      reference: reference.name,
      referenceSource: reference.source,
      chromosomeSource,
      chromosomeGenus: genus,
      chromosomeSpecies: species,
      blocks: blocksList,
      ...rest
    };
  return blocks as PairwiseBlocks;
}
