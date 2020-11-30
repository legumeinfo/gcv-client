/**
 * @fileoverview gRPC-Web generated client stub for gcv.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as services_microsyntenysearch_pb from '../services/microsyntenysearch_pb';


export class MicroSyntenySearchClient {
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
    services_microsyntenysearch_pb.MicroSyntenySearchReply,
    (request: services_microsyntenysearch_pb.MicroSyntenySearchRequest) => {
      return request.serializeBinary();
    },
    services_microsyntenysearch_pb.MicroSyntenySearchReply.deserializeBinary
  );

  search(
    request: services_microsyntenysearch_pb.MicroSyntenySearchRequest,
    metadata: grpcWeb.Metadata | null): Promise<services_microsyntenysearch_pb.MicroSyntenySearchReply>;

  search(
    request: services_microsyntenysearch_pb.MicroSyntenySearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: services_microsyntenysearch_pb.MicroSyntenySearchReply) => void): grpcWeb.ClientReadableStream<services_microsyntenysearch_pb.MicroSyntenySearchReply>;

  search(
    request: services_microsyntenysearch_pb.MicroSyntenySearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: services_microsyntenysearch_pb.MicroSyntenySearchReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gcv.services.MicroSyntenySearch/Search',
        request,
        metadata || {},
        this.methodInfoSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gcv.services.MicroSyntenySearch/Search',
    request,
    metadata || {},
    this.methodInfoSearch);
  }

}

