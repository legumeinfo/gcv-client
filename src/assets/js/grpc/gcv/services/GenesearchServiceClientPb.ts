/**
 * @fileoverview gRPC-Web generated client stub for gcv.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as services_genesearch_pb from '../services/genesearch_pb';


export class GeneSearchClient {
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
    services_genesearch_pb.GeneSearchReply,
    (request: services_genesearch_pb.GeneSearchRequest) => {
      return request.serializeBinary();
    },
    services_genesearch_pb.GeneSearchReply.deserializeBinary
  );

  search(
    request: services_genesearch_pb.GeneSearchRequest,
    metadata: grpcWeb.Metadata | null): Promise<services_genesearch_pb.GeneSearchReply>;

  search(
    request: services_genesearch_pb.GeneSearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: services_genesearch_pb.GeneSearchReply) => void): grpcWeb.ClientReadableStream<services_genesearch_pb.GeneSearchReply>;

  search(
    request: services_genesearch_pb.GeneSearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: services_genesearch_pb.GeneSearchReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gcv.services.GeneSearch/Search',
        request,
        metadata || {},
        this.methodInfoSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gcv.services.GeneSearch/Search',
    request,
    metadata || {},
    this.methodInfoSearch);
  }

}

