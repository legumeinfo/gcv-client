/**
 * @fileoverview gRPC-Web generated client stub for gcv.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as services_search_pb from '../services/search_pb';


export class SearchClient {
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
    services_search_pb.SearchReply,
    (request: services_search_pb.SearchRequest) => {
      return request.serializeBinary();
    },
    services_search_pb.SearchReply.deserializeBinary
  );

  search(
    request: services_search_pb.SearchRequest,
    metadata: grpcWeb.Metadata | null): Promise<services_search_pb.SearchReply>;

  search(
    request: services_search_pb.SearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: services_search_pb.SearchReply) => void): grpcWeb.ClientReadableStream<services_search_pb.SearchReply>;

  search(
    request: services_search_pb.SearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: services_search_pb.SearchReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gcv.services.Search/Search',
        request,
        metadata || {},
        this.methodInfoSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gcv.services.Search/Search',
    request,
    metadata || {},
    this.methodInfoSearch);
  }

}

