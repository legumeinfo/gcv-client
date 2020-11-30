/**
 * @fileoverview gRPC-Web generated client stub for gcv.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as services_pairwisemacrosyntenyblocks_pb from '../services/pairwisemacrosyntenyblocks_pb';


export class PairwiseMacroSyntenyBlocksClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCompute = new grpcWeb.AbstractClientBase.MethodInfo(
    services_pairwisemacrosyntenyblocks_pb.PairwiseMacroSyntenyBlocksComputeReply,
    (request: services_pairwisemacrosyntenyblocks_pb.PairwiseMacroSyntenyBlocksComputeRequest) => {
      return request.serializeBinary();
    },
    services_pairwisemacrosyntenyblocks_pb.PairwiseMacroSyntenyBlocksComputeReply.deserializeBinary
  );

  compute(
    request: services_pairwisemacrosyntenyblocks_pb.PairwiseMacroSyntenyBlocksComputeRequest,
    metadata: grpcWeb.Metadata | null): Promise<services_pairwisemacrosyntenyblocks_pb.PairwiseMacroSyntenyBlocksComputeReply>;

  compute(
    request: services_pairwisemacrosyntenyblocks_pb.PairwiseMacroSyntenyBlocksComputeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: services_pairwisemacrosyntenyblocks_pb.PairwiseMacroSyntenyBlocksComputeReply) => void): grpcWeb.ClientReadableStream<services_pairwisemacrosyntenyblocks_pb.PairwiseMacroSyntenyBlocksComputeReply>;

  compute(
    request: services_pairwisemacrosyntenyblocks_pb.PairwiseMacroSyntenyBlocksComputeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: services_pairwisemacrosyntenyblocks_pb.PairwiseMacroSyntenyBlocksComputeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gcv.services.PairwiseMacroSyntenyBlocks/Compute',
        request,
        metadata || {},
        this.methodInfoCompute,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gcv.services.PairwiseMacroSyntenyBlocks/Compute',
    request,
    metadata || {},
    this.methodInfoCompute);
  }

}

