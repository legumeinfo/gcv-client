// source: structures/track.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.gcv.structures.Track', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gcv.structures.Track = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gcv.structures.Track.repeatedFields_, null);
};
goog.inherits(proto.gcv.structures.Track, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gcv.structures.Track.displayName = 'proto.gcv.structures.Track';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gcv.structures.Track.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gcv.structures.Track.prototype.toObject = function(opt_includeInstance) {
  return proto.gcv.structures.Track.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gcv.structures.Track} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gcv.structures.Track.toObject = function(includeInstance, msg) {
  var f, obj = {
    genus: jspb.Message.getFieldWithDefault(msg, 2, ""),
    species: jspb.Message.getFieldWithDefault(msg, 3, ""),
    genesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    familiesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gcv.structures.Track}
 */
proto.gcv.structures.Track.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gcv.structures.Track;
  return proto.gcv.structures.Track.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gcv.structures.Track} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gcv.structures.Track}
 */
proto.gcv.structures.Track.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGenus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecies(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addGenes(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addFamilies(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gcv.structures.Track.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gcv.structures.Track.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gcv.structures.Track} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gcv.structures.Track.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGenus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSpecies();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGenesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getFamiliesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string genus = 2;
 * @return {string}
 */
proto.gcv.structures.Track.prototype.getGenus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.gcv.structures.Track} returns this
 */
proto.gcv.structures.Track.prototype.setGenus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string species = 3;
 * @return {string}
 */
proto.gcv.structures.Track.prototype.getSpecies = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.gcv.structures.Track} returns this
 */
proto.gcv.structures.Track.prototype.setSpecies = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string genes = 4;
 * @return {!Array<string>}
 */
proto.gcv.structures.Track.prototype.getGenesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.gcv.structures.Track} returns this
 */
proto.gcv.structures.Track.prototype.setGenesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.gcv.structures.Track} returns this
 */
proto.gcv.structures.Track.prototype.addGenes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gcv.structures.Track} returns this
 */
proto.gcv.structures.Track.prototype.clearGenesList = function() {
  return this.setGenesList([]);
};


/**
 * repeated string families = 5;
 * @return {!Array<string>}
 */
proto.gcv.structures.Track.prototype.getFamiliesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.gcv.structures.Track} returns this
 */
proto.gcv.structures.Track.prototype.setFamiliesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.gcv.structures.Track} returns this
 */
proto.gcv.structures.Track.prototype.addFamilies = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gcv.structures.Track} returns this
 */
proto.gcv.structures.Track.prototype.clearFamiliesList = function() {
  return this.setFamiliesList([]);
};


goog.object.extend(exports, proto.gcv.structures);