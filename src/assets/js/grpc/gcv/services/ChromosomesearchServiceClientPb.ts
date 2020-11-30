/**
 * @fileoverview gRPC-Web generated client stub for gcv.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as services_chromosomesearch_pb from '../services/chromosomesearch_pb';


export class ChromosomeSearchClient {
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

  methodInfoSearch = new grpcWeb.AbstractClientBase.MethodInfo(
    services_chromosomesearch_pb.ChromosomeSearchReply,
    (request: services_chromosomesearch_pb.ChromosomeSearchRequest) => {
      return request.serializeBinary();
    },
    services_chromosomesearch_pb.ChromosomeSearchReply.deserializeBinary
  );

  search(
    request: services_chromosomesearch_pb.ChromosomeSearchRequest,
    metadata: grpcWeb.Metadata | null): Promise<services_chromosomesearch_pb.ChromosomeSearchReply>;

  search(
    request: services_chromosomesearch_pb.ChromosomeSearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: services_chromosomesearch_pb.ChromosomeSearchReply) => void): grpcWeb.ClientReadableStream<services_chromosomesearch_pb.ChromosomeSearchReply>;

  search(
    request: services_chromosomesearch_pb.ChromosomeSearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: services_chromosomesearch_pb.ChromosomeSearchReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gcv.services.ChromosomeSearch/Search',
        request,
        metadata || {},
        this.methodInfoSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gcv.services.ChromosomeSearch/Search',
    request,
    metadata || {},
    this.methodInfoSearch);
  }

}

