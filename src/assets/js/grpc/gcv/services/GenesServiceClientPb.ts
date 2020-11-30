/**
 * @fileoverview gRPC-Web generated client stub for gcv.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as services_genes_pb from '../services/genes_pb';


export class GenesClient {
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
    services_genes_pb.GenesGetReply,
    (request: services_genes_pb.GenesGetRequest) => {
      return request.serializeBinary();
    },
    services_genes_pb.GenesGetReply.deserializeBinary
  );

  get(
    request: services_genes_pb.GenesGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<services_genes_pb.GenesGetReply>;

  get(
    request: services_genes_pb.GenesGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: services_genes_pb.GenesGetReply) => void): grpcWeb.ClientReadableStream<services_genes_pb.GenesGetReply>;

  get(
    request: services_genes_pb.GenesGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: services_genes_pb.GenesGetReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gcv.services.Genes/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gcv.services.Genes/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

}

