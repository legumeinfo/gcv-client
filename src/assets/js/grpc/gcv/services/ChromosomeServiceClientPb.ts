/**
 * @fileoverview gRPC-Web generated client stub for gcv.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as services_chromosome_pb from '../services/chromosome_pb';


export class ChromosomeClient {
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

  methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(
    services_chromosome_pb.ChromosomeGetReply,
    (request: services_chromosome_pb.ChromosomeGetRequest) => {
      return request.serializeBinary();
    },
    services_chromosome_pb.ChromosomeGetReply.deserializeBinary
  );

  get(
    request: services_chromosome_pb.ChromosomeGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<services_chromosome_pb.ChromosomeGetReply>;

  get(
    request: services_chromosome_pb.ChromosomeGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: services_chromosome_pb.ChromosomeGetReply) => void): grpcWeb.ClientReadableStream<services_chromosome_pb.ChromosomeGetReply>;

  get(
    request: services_chromosome_pb.ChromosomeGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: services_chromosome_pb.ChromosomeGetReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gcv.services.Chromosome/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gcv.services.Chromosome/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

}

