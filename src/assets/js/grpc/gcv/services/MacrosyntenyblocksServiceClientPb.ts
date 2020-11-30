/**
 * @fileoverview gRPC-Web generated client stub for gcv.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as services_macrosyntenyblocks_pb from '../services/macrosyntenyblocks_pb';


export class MacroSyntenyBlocksClient {
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
    services_macrosyntenyblocks_pb.MacroSyntenyBlocksComputeReply,
    (request: services_macrosyntenyblocks_pb.MacroSyntenyBlocksComputeRequest) => {
      return request.serializeBinary();
    },
    services_macrosyntenyblocks_pb.MacroSyntenyBlocksComputeReply.deserializeBinary
  );

  compute(
    request: services_macrosyntenyblocks_pb.MacroSyntenyBlocksComputeRequest,
    metadata: grpcWeb.Metadata | null): Promise<services_macrosyntenyblocks_pb.MacroSyntenyBlocksComputeReply>;

  compute(
    request: services_macrosyntenyblocks_pb.MacroSyntenyBlocksComputeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: services_macrosyntenyblocks_pb.MacroSyntenyBlocksComputeReply) => void): grpcWeb.ClientReadableStream<services_macrosyntenyblocks_pb.MacroSyntenyBlocksComputeReply>;

  compute(
    request: services_macrosyntenyblocks_pb.MacroSyntenyBlocksComputeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: services_macrosyntenyblocks_pb.MacroSyntenyBlocksComputeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gcv.services.MacroSyntenyBlocks/Compute',
        request,
        metadata || {},
        this.methodInfoCompute,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gcv.services.MacroSyntenyBlocks/Compute',
    request,
    metadata || {},
    this.methodInfoCompute);
  }

}

