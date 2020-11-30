/**
 * @fileoverview gRPC-Web generated client stub for gcv.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as services_chromosomeregion_pb from '../services/chromosomeregion_pb';


export class ChromosomeRegionClient {
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
    services_chromosomeregion_pb.ChromosomeRegionGetReply,
    (request: services_chromosomeregion_pb.ChromosomeRegionGetRequest) => {
      return request.serializeBinary();
    },
    services_chromosomeregion_pb.ChromosomeRegionGetReply.deserializeBinary
  );

  get(
    request: services_chromosomeregion_pb.ChromosomeRegionGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<services_chromosomeregion_pb.ChromosomeRegionGetReply>;

  get(
    request: services_chromosomeregion_pb.ChromosomeRegionGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: services_chromosomeregion_pb.ChromosomeRegionGetReply) => void): grpcWeb.ClientReadableStream<services_chromosomeregion_pb.ChromosomeRegionGetReply>;

  get(
    request: services_chromosomeregion_pb.ChromosomeRegionGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: services_chromosomeregion_pb.ChromosomeRegionGetReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gcv.services.ChromosomeRegion/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gcv.services.ChromosomeRegion/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

}

