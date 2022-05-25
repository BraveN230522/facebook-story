// source: mmk-mds/proto/Qot_Common/Qot_Common.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.Qot_Common.AssetClass', null, global);
goog.exportSymbol('proto.Qot_Common.BasicQot', null, global);
goog.exportSymbol('proto.Qot_Common.Broker', null, global);
goog.exportSymbol('proto.Qot_Common.ClosePriceType', null, global);
goog.exportSymbol('proto.Qot_Common.Currency', null, global);
goog.exportSymbol('proto.Qot_Common.DailyReset', null, global);
goog.exportSymbol('proto.Qot_Common.DumpLstKLineList', null, global);
goog.exportSymbol('proto.Qot_Common.DumpSnapshotList', null, global);
goog.exportSymbol('proto.Qot_Common.EquitySnapshotExData', null, global);
goog.exportSymbol('proto.Qot_Common.ExchangeType', null, global);
goog.exportSymbol('proto.Qot_Common.FutureSnapshotExData', null, global);
goog.exportSymbol('proto.Qot_Common.GTSStatInfo', null, global);
goog.exportSymbol('proto.Qot_Common.HL52WeeksPrice', null, global);
goog.exportSymbol('proto.Qot_Common.IDSStatInfo', null, global);
goog.exportSymbol('proto.Qot_Common.IndexBasicQotExData', null, global);
goog.exportSymbol('proto.Qot_Common.IndexOptionType', null, global);
goog.exportSymbol('proto.Qot_Common.IndexSnapshotExData', null, global);
goog.exportSymbol('proto.Qot_Common.KLType', null, global);
goog.exportSymbol('proto.Qot_Common.KLine', null, global);
goog.exportSymbol('proto.Qot_Common.LastClosePrice', null, global);
goog.exportSymbol('proto.Qot_Common.LedRiseSecurityBasic', null, global);
goog.exportSymbol('proto.Qot_Common.LstKLine', null, global);
goog.exportSymbol('proto.Qot_Common.MarketLevel', null, global);
goog.exportSymbol('proto.Qot_Common.MarketState', null, global);
goog.exportSymbol('proto.Qot_Common.MarketStatistics', null, global);
goog.exportSymbol('proto.Qot_Common.NewSecurityDetail', null, global);
goog.exportSymbol('proto.Qot_Common.NominalPrice', null, global);
goog.exportSymbol('proto.Qot_Common.OptionAreaType', null, global);
goog.exportSymbol('proto.Qot_Common.OptionSnapshotExData', null, global);
goog.exportSymbol('proto.Qot_Common.OptionType', null, global);
goog.exportSymbol('proto.Qot_Common.OrderBook', null, global);
goog.exportSymbol('proto.Qot_Common.OrderBookDetail', null, global);
goog.exportSymbol('proto.Qot_Common.PageRequest', null, global);
goog.exportSymbol('proto.Qot_Common.PageResponse', null, global);
goog.exportSymbol('proto.Qot_Common.PlateBasicQotExData', null, global);
goog.exportSymbol('proto.Qot_Common.PlateInfo', null, global);
goog.exportSymbol('proto.Qot_Common.PlateSet', null, global);
goog.exportSymbol('proto.Qot_Common.PlateSetType', null, global);
goog.exportSymbol('proto.Qot_Common.PlateSnapshotExData', null, global);
goog.exportSymbol('proto.Qot_Common.PlateSortField', null, global);
goog.exportSymbol('proto.Qot_Common.PreAfterMarketData', null, global);
goog.exportSymbol('proto.Qot_Common.QotMarket', null, global);
goog.exportSymbol('proto.Qot_Common.QotMarketState', null, global);
goog.exportSymbol('proto.Qot_Common.RehabType', null, global);
goog.exportSymbol('proto.Qot_Common.RiseFallStatistics', null, global);
goog.exportSymbol('proto.Qot_Common.Security', null, global);
goog.exportSymbol('proto.Qot_Common.SecurityDefinition', null, global);
goog.exportSymbol('proto.Qot_Common.SecurityList', null, global);
goog.exportSymbol('proto.Qot_Common.SecurityOwnerPlate', null, global);
goog.exportSymbol('proto.Qot_Common.SecurityStatus', null, global);
goog.exportSymbol('proto.Qot_Common.SecurityType', null, global);
goog.exportSymbol('proto.Qot_Common.Snapshot', null, global);
goog.exportSymbol('proto.Qot_Common.SortField', null, global);
goog.exportSymbol('proto.Qot_Common.StatInfo', null, global);
goog.exportSymbol('proto.Qot_Common.StockInfo', null, global);
goog.exportSymbol('proto.Qot_Common.SubStat', null, global);
goog.exportSymbol('proto.Qot_Common.SubType', null, global);
goog.exportSymbol('proto.Qot_Common.Ticker', null, global);
goog.exportSymbol('proto.Qot_Common.TickerDirection', null, global);
goog.exportSymbol('proto.Qot_Common.TickerType', null, global);
goog.exportSymbol('proto.Qot_Common.TimeShare', null, global);
goog.exportSymbol('proto.Qot_Common.TradeDateType', null, global);
goog.exportSymbol('proto.Qot_Common.TrustSnapshotExData', null, global);
goog.exportSymbol('proto.Qot_Common.UserInfo', null, global);
goog.exportSymbol('proto.Qot_Common.WarrantSnapshotExData', null, global);
goog.exportSymbol('proto.Qot_Common.WarrantType', null, global);
goog.exportSymbol('proto.Qot_Common.WorkerInfo', null, global);
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
proto.Qot_Common.PageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.PageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.PageRequest.displayName = 'proto.Qot_Common.PageRequest';
}
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
proto.Qot_Common.PageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.PageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.PageResponse.displayName = 'proto.Qot_Common.PageResponse';
}
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
proto.Qot_Common.MarketState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.MarketState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.MarketState.displayName = 'proto.Qot_Common.MarketState';
}
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
proto.Qot_Common.Security = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.Security, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.Security.displayName = 'proto.Qot_Common.Security';
}
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
proto.Qot_Common.SecurityList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Qot_Common.SecurityList.repeatedFields_, null);
};
goog.inherits(proto.Qot_Common.SecurityList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.SecurityList.displayName = 'proto.Qot_Common.SecurityList';
}
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
proto.Qot_Common.PreAfterMarketData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.PreAfterMarketData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.PreAfterMarketData.displayName = 'proto.Qot_Common.PreAfterMarketData';
}
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
proto.Qot_Common.EquitySnapshotExData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.EquitySnapshotExData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.EquitySnapshotExData.displayName = 'proto.Qot_Common.EquitySnapshotExData';
}
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
proto.Qot_Common.IndexSnapshotExData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.IndexSnapshotExData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.IndexSnapshotExData.displayName = 'proto.Qot_Common.IndexSnapshotExData';
}
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
proto.Qot_Common.PlateSnapshotExData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.PlateSnapshotExData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.PlateSnapshotExData.displayName = 'proto.Qot_Common.PlateSnapshotExData';
}
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
proto.Qot_Common.WarrantSnapshotExData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.WarrantSnapshotExData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.WarrantSnapshotExData.displayName = 'proto.Qot_Common.WarrantSnapshotExData';
}
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
proto.Qot_Common.OptionSnapshotExData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.OptionSnapshotExData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.OptionSnapshotExData.displayName = 'proto.Qot_Common.OptionSnapshotExData';
}
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
proto.Qot_Common.FutureSnapshotExData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.FutureSnapshotExData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.FutureSnapshotExData.displayName = 'proto.Qot_Common.FutureSnapshotExData';
}
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
proto.Qot_Common.TrustSnapshotExData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.TrustSnapshotExData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.TrustSnapshotExData.displayName = 'proto.Qot_Common.TrustSnapshotExData';
}
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
proto.Qot_Common.Snapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.Snapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.Snapshot.displayName = 'proto.Qot_Common.Snapshot';
}
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
proto.Qot_Common.StockInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.StockInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.StockInfo.displayName = 'proto.Qot_Common.StockInfo';
}
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
proto.Qot_Common.IndexBasicQotExData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.IndexBasicQotExData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.IndexBasicQotExData.displayName = 'proto.Qot_Common.IndexBasicQotExData';
}
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
proto.Qot_Common.PlateBasicQotExData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.PlateBasicQotExData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.PlateBasicQotExData.displayName = 'proto.Qot_Common.PlateBasicQotExData';
}
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
proto.Qot_Common.BasicQot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.BasicQot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.BasicQot.displayName = 'proto.Qot_Common.BasicQot';
}
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
proto.Qot_Common.HL52WeeksPrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.HL52WeeksPrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.HL52WeeksPrice.displayName = 'proto.Qot_Common.HL52WeeksPrice';
}
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
proto.Qot_Common.LastClosePrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.LastClosePrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.LastClosePrice.displayName = 'proto.Qot_Common.LastClosePrice';
}
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
proto.Qot_Common.SecurityDefinition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.SecurityDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.SecurityDefinition.displayName = 'proto.Qot_Common.SecurityDefinition';
}
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
proto.Qot_Common.PlateSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Qot_Common.PlateSet.repeatedFields_, null);
};
goog.inherits(proto.Qot_Common.PlateSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.PlateSet.displayName = 'proto.Qot_Common.PlateSet';
}
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
proto.Qot_Common.PlateInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.PlateInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.PlateInfo.displayName = 'proto.Qot_Common.PlateInfo';
}
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
proto.Qot_Common.SecurityOwnerPlate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Qot_Common.SecurityOwnerPlate.repeatedFields_, null);
};
goog.inherits(proto.Qot_Common.SecurityOwnerPlate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.SecurityOwnerPlate.displayName = 'proto.Qot_Common.SecurityOwnerPlate';
}
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
proto.Qot_Common.RiseFallStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.RiseFallStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.RiseFallStatistics.displayName = 'proto.Qot_Common.RiseFallStatistics';
}
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
proto.Qot_Common.LedRiseSecurityBasic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.LedRiseSecurityBasic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.LedRiseSecurityBasic.displayName = 'proto.Qot_Common.LedRiseSecurityBasic';
}
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
proto.Qot_Common.MarketStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Qot_Common.MarketStatistics.repeatedFields_, null);
};
goog.inherits(proto.Qot_Common.MarketStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.MarketStatistics.displayName = 'proto.Qot_Common.MarketStatistics';
}
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
proto.Qot_Common.OrderBookDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.OrderBookDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.OrderBookDetail.displayName = 'proto.Qot_Common.OrderBookDetail';
}
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
proto.Qot_Common.OrderBook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Qot_Common.OrderBook.repeatedFields_, null);
};
goog.inherits(proto.Qot_Common.OrderBook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.OrderBook.displayName = 'proto.Qot_Common.OrderBook';
}
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
proto.Qot_Common.Broker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.Broker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.Broker.displayName = 'proto.Qot_Common.Broker';
}
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
proto.Qot_Common.Ticker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.Ticker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.Ticker.displayName = 'proto.Qot_Common.Ticker';
}
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
proto.Qot_Common.NominalPrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.NominalPrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.NominalPrice.displayName = 'proto.Qot_Common.NominalPrice';
}
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
proto.Qot_Common.TimeShare = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.TimeShare, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.TimeShare.displayName = 'proto.Qot_Common.TimeShare';
}
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
proto.Qot_Common.KLine = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.KLine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.KLine.displayName = 'proto.Qot_Common.KLine';
}
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
proto.Qot_Common.NewSecurityDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.NewSecurityDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.NewSecurityDetail.displayName = 'proto.Qot_Common.NewSecurityDetail';
}
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
proto.Qot_Common.DailyReset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.DailyReset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.DailyReset.displayName = 'proto.Qot_Common.DailyReset';
}
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
proto.Qot_Common.StatInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Qot_Common.StatInfo.repeatedFields_, null);
};
goog.inherits(proto.Qot_Common.StatInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.StatInfo.displayName = 'proto.Qot_Common.StatInfo';
}
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
proto.Qot_Common.IDSStatInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Qot_Common.IDSStatInfo.repeatedFields_, null);
};
goog.inherits(proto.Qot_Common.IDSStatInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.IDSStatInfo.displayName = 'proto.Qot_Common.IDSStatInfo';
}
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
proto.Qot_Common.GTSStatInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Qot_Common.GTSStatInfo.repeatedFields_, null);
};
goog.inherits(proto.Qot_Common.GTSStatInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.GTSStatInfo.displayName = 'proto.Qot_Common.GTSStatInfo';
}
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
proto.Qot_Common.WorkerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.WorkerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.WorkerInfo.displayName = 'proto.Qot_Common.WorkerInfo';
}
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
proto.Qot_Common.UserInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Qot_Common.UserInfo.repeatedFields_, null);
};
goog.inherits(proto.Qot_Common.UserInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.UserInfo.displayName = 'proto.Qot_Common.UserInfo';
}
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
proto.Qot_Common.MarketLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.MarketLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.MarketLevel.displayName = 'proto.Qot_Common.MarketLevel';
}
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
proto.Qot_Common.SubStat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Qot_Common.SubStat.repeatedFields_, null);
};
goog.inherits(proto.Qot_Common.SubStat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.SubStat.displayName = 'proto.Qot_Common.SubStat';
}
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
proto.Qot_Common.DumpSnapshotList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Qot_Common.DumpSnapshotList.repeatedFields_, null);
};
goog.inherits(proto.Qot_Common.DumpSnapshotList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.DumpSnapshotList.displayName = 'proto.Qot_Common.DumpSnapshotList';
}
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
proto.Qot_Common.LstKLine = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Qot_Common.LstKLine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.LstKLine.displayName = 'proto.Qot_Common.LstKLine';
}
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
proto.Qot_Common.DumpLstKLineList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Qot_Common.DumpLstKLineList.repeatedFields_, null);
};
goog.inherits(proto.Qot_Common.DumpLstKLineList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Qot_Common.DumpLstKLineList.displayName = 'proto.Qot_Common.DumpLstKLineList';
}



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
proto.Qot_Common.PageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.PageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.PageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sortfiled: jspb.Message.getFieldWithDefault(msg, 3, 0),
    desc: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.Qot_Common.PageRequest}
 */
proto.Qot_Common.PageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.PageRequest;
  return proto.Qot_Common.PageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.PageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.PageRequest}
 */
proto.Qot_Common.PageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSortfiled(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDesc(value);
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
proto.Qot_Common.PageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.PageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.PageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSortfiled();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getDesc();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional int32 Limit = 1;
 * @return {number}
 */
proto.Qot_Common.PageRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PageRequest} returns this
 */
proto.Qot_Common.PageRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Page = 2;
 * @return {number}
 */
proto.Qot_Common.PageRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PageRequest} returns this
 */
proto.Qot_Common.PageRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 SortFiled = 3;
 * @return {number}
 */
proto.Qot_Common.PageRequest.prototype.getSortfiled = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PageRequest} returns this
 */
proto.Qot_Common.PageRequest.prototype.setSortfiled = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool Desc = 4;
 * @return {boolean}
 */
proto.Qot_Common.PageRequest.prototype.getDesc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Qot_Common.PageRequest} returns this
 */
proto.Qot_Common.PageRequest.prototype.setDesc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





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
proto.Qot_Common.PageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.PageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.PageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: jspb.Message.getFieldWithDefault(msg, 2, 0),
    total: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.Qot_Common.PageResponse}
 */
proto.Qot_Common.PageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.PageResponse;
  return proto.Qot_Common.PageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.PageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.PageResponse}
 */
proto.Qot_Common.PageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
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
proto.Qot_Common.PageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.PageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.PageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 Limit = 1;
 * @return {number}
 */
proto.Qot_Common.PageResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PageResponse} returns this
 */
proto.Qot_Common.PageResponse.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Page = 2;
 * @return {number}
 */
proto.Qot_Common.PageResponse.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PageResponse} returns this
 */
proto.Qot_Common.PageResponse.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 total = 3;
 * @return {number}
 */
proto.Qot_Common.PageResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PageResponse} returns this
 */
proto.Qot_Common.PageResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





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
proto.Qot_Common.MarketState.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.MarketState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.MarketState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.MarketState.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.Qot_Common.MarketState}
 */
proto.Qot_Common.MarketState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.MarketState;
  return proto.Qot_Common.MarketState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.MarketState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.MarketState}
 */
proto.Qot_Common.MarketState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
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
proto.Qot_Common.MarketState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.MarketState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.MarketState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.MarketState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 market = 1;
 * @return {number}
 */
proto.Qot_Common.MarketState.prototype.getMarket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.MarketState} returns this
 */
proto.Qot_Common.MarketState.prototype.setMarket = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 state = 2;
 * @return {number}
 */
proto.Qot_Common.MarketState.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.MarketState} returns this
 */
proto.Qot_Common.MarketState.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





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
proto.Qot_Common.Security.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.Security.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.Security} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.Security.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.Qot_Common.Security}
 */
proto.Qot_Common.Security.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.Security;
  return proto.Qot_Common.Security.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.Security} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.Security}
 */
proto.Qot_Common.Security.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
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
proto.Qot_Common.Security.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.Security.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.Security} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.Security.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 market = 1;
 * @return {number}
 */
proto.Qot_Common.Security.prototype.getMarket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Security} returns this
 */
proto.Qot_Common.Security.prototype.setMarket = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.Qot_Common.Security.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.Security} returns this
 */
proto.Qot_Common.Security.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Qot_Common.SecurityList.repeatedFields_ = [2];



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
proto.Qot_Common.SecurityList.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.SecurityList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.SecurityList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.SecurityList.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, 0),
    codelistList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.Qot_Common.SecurityList}
 */
proto.Qot_Common.SecurityList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.SecurityList;
  return proto.Qot_Common.SecurityList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.SecurityList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.SecurityList}
 */
proto.Qot_Common.SecurityList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCodelist(value);
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
proto.Qot_Common.SecurityList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.SecurityList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.SecurityList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.SecurityList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCodelistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional int32 market = 1;
 * @return {number}
 */
proto.Qot_Common.SecurityList.prototype.getMarket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.SecurityList} returns this
 */
proto.Qot_Common.SecurityList.prototype.setMarket = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string codeList = 2;
 * @return {!Array<string>}
 */
proto.Qot_Common.SecurityList.prototype.getCodelistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.Qot_Common.SecurityList} returns this
 */
proto.Qot_Common.SecurityList.prototype.setCodelistList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.SecurityList} returns this
 */
proto.Qot_Common.SecurityList.prototype.addCodelist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.SecurityList} returns this
 */
proto.Qot_Common.SecurityList.prototype.clearCodelistList = function() {
  return this.setCodelistList([]);
};





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
proto.Qot_Common.PreAfterMarketData.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.PreAfterMarketData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.PreAfterMarketData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PreAfterMarketData.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    highprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    lowprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    volume: jspb.Message.getFieldWithDefault(msg, 4, 0),
    turnover: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    changeval: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    changerate: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    amplitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
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
 * @return {!proto.Qot_Common.PreAfterMarketData}
 */
proto.Qot_Common.PreAfterMarketData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.PreAfterMarketData;
  return proto.Qot_Common.PreAfterMarketData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.PreAfterMarketData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.PreAfterMarketData}
 */
proto.Qot_Common.PreAfterMarketData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHighprice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowprice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTurnover(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangeval(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangerate(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmplitude(value);
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
proto.Qot_Common.PreAfterMarketData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.PreAfterMarketData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.PreAfterMarketData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PreAfterMarketData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getHighprice();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLowprice();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTurnover();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getChangeval();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getChangerate();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getAmplitude();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
};


/**
 * optional double price = 1;
 * @return {number}
 */
proto.Qot_Common.PreAfterMarketData.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PreAfterMarketData} returns this
 */
proto.Qot_Common.PreAfterMarketData.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double highPrice = 2;
 * @return {number}
 */
proto.Qot_Common.PreAfterMarketData.prototype.getHighprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PreAfterMarketData} returns this
 */
proto.Qot_Common.PreAfterMarketData.prototype.setHighprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double lowPrice = 3;
 * @return {number}
 */
proto.Qot_Common.PreAfterMarketData.prototype.getLowprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PreAfterMarketData} returns this
 */
proto.Qot_Common.PreAfterMarketData.prototype.setLowprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int64 volume = 4;
 * @return {number}
 */
proto.Qot_Common.PreAfterMarketData.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PreAfterMarketData} returns this
 */
proto.Qot_Common.PreAfterMarketData.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double turnover = 5;
 * @return {number}
 */
proto.Qot_Common.PreAfterMarketData.prototype.getTurnover = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PreAfterMarketData} returns this
 */
proto.Qot_Common.PreAfterMarketData.prototype.setTurnover = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double changeVal = 6;
 * @return {number}
 */
proto.Qot_Common.PreAfterMarketData.prototype.getChangeval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PreAfterMarketData} returns this
 */
proto.Qot_Common.PreAfterMarketData.prototype.setChangeval = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double changeRate = 7;
 * @return {number}
 */
proto.Qot_Common.PreAfterMarketData.prototype.getChangerate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PreAfterMarketData} returns this
 */
proto.Qot_Common.PreAfterMarketData.prototype.setChangerate = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double amplitude = 8;
 * @return {number}
 */
proto.Qot_Common.PreAfterMarketData.prototype.getAmplitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PreAfterMarketData} returns this
 */
proto.Qot_Common.PreAfterMarketData.prototype.setAmplitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};





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
proto.Qot_Common.EquitySnapshotExData.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.EquitySnapshotExData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.EquitySnapshotExData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.EquitySnapshotExData.toObject = function(includeInstance, msg) {
  var f, obj = {
    issuedshares: jspb.Message.getFieldWithDefault(msg, 1, 0),
    issuedmarketval: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    netasset: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    netprofit: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    earningspershare: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    outstandingshares: jspb.Message.getFieldWithDefault(msg, 6, 0),
    outstandingmarketval: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    netassetpershare: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    eyrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    perate: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    pbrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    dividend: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    dividendratio: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0)
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
 * @return {!proto.Qot_Common.EquitySnapshotExData}
 */
proto.Qot_Common.EquitySnapshotExData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.EquitySnapshotExData;
  return proto.Qot_Common.EquitySnapshotExData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.EquitySnapshotExData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.EquitySnapshotExData}
 */
proto.Qot_Common.EquitySnapshotExData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIssuedshares(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setIssuedmarketval(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNetasset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNetprofit(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEarningspershare(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOutstandingshares(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutstandingmarketval(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNetassetpershare(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEyrate(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPerate(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPbrate(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDividend(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDividendratio(value);
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
proto.Qot_Common.EquitySnapshotExData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.EquitySnapshotExData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.EquitySnapshotExData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.EquitySnapshotExData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuedshares();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIssuedmarketval();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getNetasset();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getNetprofit();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getEarningspershare();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getOutstandingshares();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getOutstandingmarketval();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getNetassetpershare();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getEyrate();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getPerate();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getPbrate();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getDividend();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getDividendratio();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
};


/**
 * optional int64 issuedShares = 1;
 * @return {number}
 */
proto.Qot_Common.EquitySnapshotExData.prototype.getIssuedshares = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.EquitySnapshotExData} returns this
 */
proto.Qot_Common.EquitySnapshotExData.prototype.setIssuedshares = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double issuedMarketVal = 2;
 * @return {number}
 */
proto.Qot_Common.EquitySnapshotExData.prototype.getIssuedmarketval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.EquitySnapshotExData} returns this
 */
proto.Qot_Common.EquitySnapshotExData.prototype.setIssuedmarketval = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double netAsset = 3;
 * @return {number}
 */
proto.Qot_Common.EquitySnapshotExData.prototype.getNetasset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.EquitySnapshotExData} returns this
 */
proto.Qot_Common.EquitySnapshotExData.prototype.setNetasset = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double netProfit = 4;
 * @return {number}
 */
proto.Qot_Common.EquitySnapshotExData.prototype.getNetprofit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.EquitySnapshotExData} returns this
 */
proto.Qot_Common.EquitySnapshotExData.prototype.setNetprofit = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double earningsPerShare = 5;
 * @return {number}
 */
proto.Qot_Common.EquitySnapshotExData.prototype.getEarningspershare = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.EquitySnapshotExData} returns this
 */
proto.Qot_Common.EquitySnapshotExData.prototype.setEarningspershare = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int64 outstandingShares = 6;
 * @return {number}
 */
proto.Qot_Common.EquitySnapshotExData.prototype.getOutstandingshares = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.EquitySnapshotExData} returns this
 */
proto.Qot_Common.EquitySnapshotExData.prototype.setOutstandingshares = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double outstandingMarketVal = 7;
 * @return {number}
 */
proto.Qot_Common.EquitySnapshotExData.prototype.getOutstandingmarketval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.EquitySnapshotExData} returns this
 */
proto.Qot_Common.EquitySnapshotExData.prototype.setOutstandingmarketval = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double netAssetPerShare = 8;
 * @return {number}
 */
proto.Qot_Common.EquitySnapshotExData.prototype.getNetassetpershare = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.EquitySnapshotExData} returns this
 */
proto.Qot_Common.EquitySnapshotExData.prototype.setNetassetpershare = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double eyRate = 9;
 * @return {number}
 */
proto.Qot_Common.EquitySnapshotExData.prototype.getEyrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.EquitySnapshotExData} returns this
 */
proto.Qot_Common.EquitySnapshotExData.prototype.setEyrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double peRate = 10;
 * @return {number}
 */
proto.Qot_Common.EquitySnapshotExData.prototype.getPerate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.EquitySnapshotExData} returns this
 */
proto.Qot_Common.EquitySnapshotExData.prototype.setPerate = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double pbRate = 11;
 * @return {number}
 */
proto.Qot_Common.EquitySnapshotExData.prototype.getPbrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.EquitySnapshotExData} returns this
 */
proto.Qot_Common.EquitySnapshotExData.prototype.setPbrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional double dividend = 12;
 * @return {number}
 */
proto.Qot_Common.EquitySnapshotExData.prototype.getDividend = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.EquitySnapshotExData} returns this
 */
proto.Qot_Common.EquitySnapshotExData.prototype.setDividend = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional double dividendRatio = 13;
 * @return {number}
 */
proto.Qot_Common.EquitySnapshotExData.prototype.getDividendratio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.EquitySnapshotExData} returns this
 */
proto.Qot_Common.EquitySnapshotExData.prototype.setDividendratio = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};





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
proto.Qot_Common.IndexSnapshotExData.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.IndexSnapshotExData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.IndexSnapshotExData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.IndexSnapshotExData.toObject = function(includeInstance, msg) {
  var f, obj = {
    raisecount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fallcount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    equalcount: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.Qot_Common.IndexSnapshotExData}
 */
proto.Qot_Common.IndexSnapshotExData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.IndexSnapshotExData;
  return proto.Qot_Common.IndexSnapshotExData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.IndexSnapshotExData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.IndexSnapshotExData}
 */
proto.Qot_Common.IndexSnapshotExData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRaisecount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFallcount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEqualcount(value);
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
proto.Qot_Common.IndexSnapshotExData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.IndexSnapshotExData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.IndexSnapshotExData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.IndexSnapshotExData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaisecount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFallcount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEqualcount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 raiseCount = 1;
 * @return {number}
 */
proto.Qot_Common.IndexSnapshotExData.prototype.getRaisecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.IndexSnapshotExData} returns this
 */
proto.Qot_Common.IndexSnapshotExData.prototype.setRaisecount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 fallCount = 2;
 * @return {number}
 */
proto.Qot_Common.IndexSnapshotExData.prototype.getFallcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.IndexSnapshotExData} returns this
 */
proto.Qot_Common.IndexSnapshotExData.prototype.setFallcount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 equalCount = 3;
 * @return {number}
 */
proto.Qot_Common.IndexSnapshotExData.prototype.getEqualcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.IndexSnapshotExData} returns this
 */
proto.Qot_Common.IndexSnapshotExData.prototype.setEqualcount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





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
proto.Qot_Common.PlateSnapshotExData.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.PlateSnapshotExData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.PlateSnapshotExData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PlateSnapshotExData.toObject = function(includeInstance, msg) {
  var f, obj = {
    issuedshares: jspb.Message.getFieldWithDefault(msg, 1, 0),
    issuedmarketval: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    outstandingshares: jspb.Message.getFieldWithDefault(msg, 3, 0),
    outstandingmarketval: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    raisecount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fallcount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    equalcount: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.Qot_Common.PlateSnapshotExData}
 */
proto.Qot_Common.PlateSnapshotExData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.PlateSnapshotExData;
  return proto.Qot_Common.PlateSnapshotExData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.PlateSnapshotExData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.PlateSnapshotExData}
 */
proto.Qot_Common.PlateSnapshotExData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIssuedshares(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setIssuedmarketval(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOutstandingshares(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutstandingmarketval(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRaisecount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFallcount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEqualcount(value);
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
proto.Qot_Common.PlateSnapshotExData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.PlateSnapshotExData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.PlateSnapshotExData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PlateSnapshotExData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuedshares();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIssuedmarketval();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getOutstandingshares();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getOutstandingmarketval();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getRaisecount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getFallcount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getEqualcount();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional int64 issuedShares = 1;
 * @return {number}
 */
proto.Qot_Common.PlateSnapshotExData.prototype.getIssuedshares = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateSnapshotExData} returns this
 */
proto.Qot_Common.PlateSnapshotExData.prototype.setIssuedshares = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double issuedMarketVal = 2;
 * @return {number}
 */
proto.Qot_Common.PlateSnapshotExData.prototype.getIssuedmarketval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateSnapshotExData} returns this
 */
proto.Qot_Common.PlateSnapshotExData.prototype.setIssuedmarketval = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int64 outstandingShares = 3;
 * @return {number}
 */
proto.Qot_Common.PlateSnapshotExData.prototype.getOutstandingshares = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateSnapshotExData} returns this
 */
proto.Qot_Common.PlateSnapshotExData.prototype.setOutstandingshares = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double outstandingMarketVal = 4;
 * @return {number}
 */
proto.Qot_Common.PlateSnapshotExData.prototype.getOutstandingmarketval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateSnapshotExData} returns this
 */
proto.Qot_Common.PlateSnapshotExData.prototype.setOutstandingmarketval = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 raiseCount = 5;
 * @return {number}
 */
proto.Qot_Common.PlateSnapshotExData.prototype.getRaisecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateSnapshotExData} returns this
 */
proto.Qot_Common.PlateSnapshotExData.prototype.setRaisecount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 fallCount = 6;
 * @return {number}
 */
proto.Qot_Common.PlateSnapshotExData.prototype.getFallcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateSnapshotExData} returns this
 */
proto.Qot_Common.PlateSnapshotExData.prototype.setFallcount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 equalCount = 7;
 * @return {number}
 */
proto.Qot_Common.PlateSnapshotExData.prototype.getEqualcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateSnapshotExData} returns this
 */
proto.Qot_Common.PlateSnapshotExData.prototype.setEqualcount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





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
proto.Qot_Common.WarrantSnapshotExData.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.WarrantSnapshotExData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.WarrantSnapshotExData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.WarrantSnapshotExData.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversionrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    warranttype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    strikeprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    maturitytime: jspb.Message.getFieldWithDefault(msg, 4, ""),
    endtradetime: jspb.Message.getFieldWithDefault(msg, 5, ""),
    owner: (f = msg.getOwner()) && proto.Qot_Common.Security.toObject(includeInstance, f),
    recoveryprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    streetvolumn: jspb.Message.getFieldWithDefault(msg, 8, 0),
    issuevolumn: jspb.Message.getFieldWithDefault(msg, 9, 0),
    streetrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    delta: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    impliedvolatility: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    premium: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    maturitytimestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    endtradetimestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    leverage: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    ipop: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
    breakevenpoint: jspb.Message.getFloatingPointFieldWithDefault(msg, 18, 0.0),
    conversionprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 19, 0.0),
    pricerecoveryratio: jspb.Message.getFloatingPointFieldWithDefault(msg, 20, 0.0),
    score: jspb.Message.getFloatingPointFieldWithDefault(msg, 21, 0.0),
    upperstrikeprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 22, 0.0),
    lowerstrikeprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 23, 0.0),
    inlinepricestatus: jspb.Message.getFieldWithDefault(msg, 24, 0),
    issuercode: jspb.Message.getFieldWithDefault(msg, 25, "")
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
 * @return {!proto.Qot_Common.WarrantSnapshotExData}
 */
proto.Qot_Common.WarrantSnapshotExData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.WarrantSnapshotExData;
  return proto.Qot_Common.WarrantSnapshotExData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.WarrantSnapshotExData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.WarrantSnapshotExData}
 */
proto.Qot_Common.WarrantSnapshotExData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConversionrate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWarranttype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStrikeprice(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaturitytime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndtradetime(value);
      break;
    case 6:
      var value = new proto.Qot_Common.Security;
      reader.readMessage(value,proto.Qot_Common.Security.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRecoveryprice(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStreetvolumn(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIssuevolumn(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStreetrate(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDelta(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setImpliedvolatility(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPremium(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaturitytimestamp(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEndtradetimestamp(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLeverage(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setIpop(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBreakevenpoint(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConversionprice(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPricerecoveryratio(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScore(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUpperstrikeprice(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowerstrikeprice(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInlinepricestatus(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setIssuercode(value);
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
proto.Qot_Common.WarrantSnapshotExData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.WarrantSnapshotExData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.WarrantSnapshotExData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.WarrantSnapshotExData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversionrate();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getWarranttype();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getStrikeprice();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getMaturitytime();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEndtradetime();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.Qot_Common.Security.serializeBinaryToWriter
    );
  }
  f = message.getRecoveryprice();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getStreetvolumn();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getIssuevolumn();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getStreetrate();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getDelta();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getImpliedvolatility();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getPremium();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getMaturitytimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getEndtradetimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getLeverage();
  if (f !== 0.0) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = message.getIpop();
  if (f !== 0.0) {
    writer.writeDouble(
      17,
      f
    );
  }
  f = message.getBreakevenpoint();
  if (f !== 0.0) {
    writer.writeDouble(
      18,
      f
    );
  }
  f = message.getConversionprice();
  if (f !== 0.0) {
    writer.writeDouble(
      19,
      f
    );
  }
  f = message.getPricerecoveryratio();
  if (f !== 0.0) {
    writer.writeDouble(
      20,
      f
    );
  }
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeDouble(
      21,
      f
    );
  }
  f = message.getUpperstrikeprice();
  if (f !== 0.0) {
    writer.writeDouble(
      22,
      f
    );
  }
  f = message.getLowerstrikeprice();
  if (f !== 0.0) {
    writer.writeDouble(
      23,
      f
    );
  }
  f = message.getInlinepricestatus();
  if (f !== 0) {
    writer.writeInt32(
      24,
      f
    );
  }
  f = message.getIssuercode();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
};


/**
 * optional double conversionRate = 1;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getConversionrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setConversionrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional int32 warrantType = 2;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getWarranttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setWarranttype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double strikePrice = 3;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getStrikeprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setStrikeprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string maturityTime = 4;
 * @return {string}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getMaturitytime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setMaturitytime = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string endTradeTime = 5;
 * @return {string}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getEndtradetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setEndtradetime = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Security owner = 6;
 * @return {?proto.Qot_Common.Security}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getOwner = function() {
  return /** @type{?proto.Qot_Common.Security} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.Security, 6));
};


/**
 * @param {?proto.Qot_Common.Security|undefined} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
*/
proto.Qot_Common.WarrantSnapshotExData.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double recoveryPrice = 7;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getRecoveryprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setRecoveryprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int64 streetVolumn = 8;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getStreetvolumn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setStreetvolumn = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 issueVolumn = 9;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getIssuevolumn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setIssuevolumn = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional double streetRate = 10;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getStreetrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setStreetrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double delta = 11;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getDelta = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setDelta = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional double impliedVolatility = 12;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getImpliedvolatility = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setImpliedvolatility = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional double premium = 13;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getPremium = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setPremium = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double maturityTimestamp = 14;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getMaturitytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setMaturitytimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional double endTradeTimestamp = 15;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getEndtradetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setEndtradetimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional double leverage = 16;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getLeverage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setLeverage = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional double ipop = 17;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getIpop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setIpop = function(value) {
  return jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional double breakEvenPoint = 18;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getBreakevenpoint = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setBreakevenpoint = function(value) {
  return jspb.Message.setProto3FloatField(this, 18, value);
};


/**
 * optional double conversionPrice = 19;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getConversionprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setConversionprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 19, value);
};


/**
 * optional double priceRecoveryRatio = 20;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getPricerecoveryratio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setPricerecoveryratio = function(value) {
  return jspb.Message.setProto3FloatField(this, 20, value);
};


/**
 * optional double score = 21;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 21, value);
};


/**
 * optional double upperStrikePrice = 22;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getUpperstrikeprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 22, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setUpperstrikeprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 22, value);
};


/**
 * optional double lowerStrikePrice = 23;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getLowerstrikeprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 23, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setLowerstrikeprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 23, value);
};


/**
 * optional int32 inLinePriceStatus = 24;
 * @return {number}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getInlinepricestatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setInlinepricestatus = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional string issuerCode = 25;
 * @return {string}
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.getIssuercode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.WarrantSnapshotExData} returns this
 */
proto.Qot_Common.WarrantSnapshotExData.prototype.setIssuercode = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};





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
proto.Qot_Common.OptionSnapshotExData.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.OptionSnapshotExData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.OptionSnapshotExData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.OptionSnapshotExData.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    owner: (f = msg.getOwner()) && proto.Qot_Common.Security.toObject(includeInstance, f),
    striketime: jspb.Message.getFieldWithDefault(msg, 3, ""),
    strikeprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    contractsize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    contractsizefloat: jspb.Message.getFloatingPointFieldWithDefault(msg, 22, 0.0),
    openinterest: jspb.Message.getFieldWithDefault(msg, 6, 0),
    impliedvolatility: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    premium: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    delta: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    gamma: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    vega: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    theta: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    rho: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    striketimestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    indexoptiontype: jspb.Message.getFieldWithDefault(msg, 15, 0),
    netopeninterest: jspb.Message.getFieldWithDefault(msg, 16, 0),
    expirydatedistance: jspb.Message.getFieldWithDefault(msg, 17, 0),
    contractnominalvalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 18, 0.0),
    ownerlotmultiplier: jspb.Message.getFloatingPointFieldWithDefault(msg, 19, 0.0),
    optionareatype: jspb.Message.getFieldWithDefault(msg, 20, 0),
    contractmultiplier: jspb.Message.getFloatingPointFieldWithDefault(msg, 21, 0.0)
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
 * @return {!proto.Qot_Common.OptionSnapshotExData}
 */
proto.Qot_Common.OptionSnapshotExData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.OptionSnapshotExData;
  return proto.Qot_Common.OptionSnapshotExData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.OptionSnapshotExData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.OptionSnapshotExData}
 */
proto.Qot_Common.OptionSnapshotExData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.Qot_Common.Security;
      reader.readMessage(value,proto.Qot_Common.Security.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStriketime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStrikeprice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setContractsize(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setContractsizefloat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOpeninterest(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setImpliedvolatility(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPremium(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDelta(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGamma(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVega(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTheta(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRho(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStriketimestamp(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndexoptiontype(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNetopeninterest(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExpirydatedistance(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setContractnominalvalue(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOwnerlotmultiplier(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOptionareatype(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setContractmultiplier(value);
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
proto.Qot_Common.OptionSnapshotExData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.OptionSnapshotExData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.OptionSnapshotExData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.OptionSnapshotExData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Qot_Common.Security.serializeBinaryToWriter
    );
  }
  f = message.getStriketime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStrikeprice();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getContractsize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getContractsizefloat();
  if (f !== 0.0) {
    writer.writeDouble(
      22,
      f
    );
  }
  f = message.getOpeninterest();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getImpliedvolatility();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getPremium();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getDelta();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getGamma();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getVega();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getTheta();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getRho();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getStriketimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getIndexoptiontype();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getNetopeninterest();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getExpirydatedistance();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getContractnominalvalue();
  if (f !== 0.0) {
    writer.writeDouble(
      18,
      f
    );
  }
  f = message.getOwnerlotmultiplier();
  if (f !== 0.0) {
    writer.writeDouble(
      19,
      f
    );
  }
  f = message.getOptionareatype();
  if (f !== 0) {
    writer.writeInt32(
      20,
      f
    );
  }
  f = message.getContractmultiplier();
  if (f !== 0.0) {
    writer.writeDouble(
      21,
      f
    );
  }
};


/**
 * optional int32 type = 1;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Security owner = 2;
 * @return {?proto.Qot_Common.Security}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getOwner = function() {
  return /** @type{?proto.Qot_Common.Security} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.Security, 2));
};


/**
 * @param {?proto.Qot_Common.Security|undefined} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
*/
proto.Qot_Common.OptionSnapshotExData.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string strikeTime = 3;
 * @return {string}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getStriketime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setStriketime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double strikePrice = 4;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getStrikeprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setStrikeprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 contractSize = 5;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getContractsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setContractsize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional double contractSizeFloat = 22;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getContractsizefloat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 22, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setContractsizefloat = function(value) {
  return jspb.Message.setProto3FloatField(this, 22, value);
};


/**
 * optional int32 openInterest = 6;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getOpeninterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setOpeninterest = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double impliedVolatility = 7;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getImpliedvolatility = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setImpliedvolatility = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double premium = 8;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getPremium = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setPremium = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double delta = 9;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getDelta = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setDelta = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double gamma = 10;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getGamma = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setGamma = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double vega = 11;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getVega = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setVega = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional double theta = 12;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getTheta = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setTheta = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional double rho = 13;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getRho = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setRho = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double strikeTimestamp = 14;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getStriketimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setStriketimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional int32 indexOptionType = 15;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getIndexoptiontype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setIndexoptiontype = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int32 netOpenInterest = 16;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getNetopeninterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setNetopeninterest = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int32 expiryDateDistance = 17;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getExpirydatedistance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setExpirydatedistance = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional double contractNominalValue = 18;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getContractnominalvalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setContractnominalvalue = function(value) {
  return jspb.Message.setProto3FloatField(this, 18, value);
};


/**
 * optional double ownerLotMultiplier = 19;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getOwnerlotmultiplier = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setOwnerlotmultiplier = function(value) {
  return jspb.Message.setProto3FloatField(this, 19, value);
};


/**
 * optional int32 optionAreaType = 20;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getOptionareatype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setOptionareatype = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional double contractMultiplier = 21;
 * @return {number}
 */
proto.Qot_Common.OptionSnapshotExData.prototype.getContractmultiplier = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OptionSnapshotExData} returns this
 */
proto.Qot_Common.OptionSnapshotExData.prototype.setContractmultiplier = function(value) {
  return jspb.Message.setProto3FloatField(this, 21, value);
};





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
proto.Qot_Common.FutureSnapshotExData.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.FutureSnapshotExData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.FutureSnapshotExData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.FutureSnapshotExData.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastsettleprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    position: jspb.Message.getFieldWithDefault(msg, 2, 0),
    positionchange: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lasttradetime: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lasttradetimestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    ismaincontract: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.Qot_Common.FutureSnapshotExData}
 */
proto.Qot_Common.FutureSnapshotExData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.FutureSnapshotExData;
  return proto.Qot_Common.FutureSnapshotExData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.FutureSnapshotExData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.FutureSnapshotExData}
 */
proto.Qot_Common.FutureSnapshotExData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastsettleprice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPosition(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPositionchange(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLasttradetime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLasttradetimestamp(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsmaincontract(value);
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
proto.Qot_Common.FutureSnapshotExData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.FutureSnapshotExData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.FutureSnapshotExData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.FutureSnapshotExData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastsettleprice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPositionchange();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLasttradetime();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLasttradetimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getIsmaincontract();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional double lastSettlePrice = 1;
 * @return {number}
 */
proto.Qot_Common.FutureSnapshotExData.prototype.getLastsettleprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.FutureSnapshotExData} returns this
 */
proto.Qot_Common.FutureSnapshotExData.prototype.setLastsettleprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional int32 position = 2;
 * @return {number}
 */
proto.Qot_Common.FutureSnapshotExData.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.FutureSnapshotExData} returns this
 */
proto.Qot_Common.FutureSnapshotExData.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 positionChange = 3;
 * @return {number}
 */
proto.Qot_Common.FutureSnapshotExData.prototype.getPositionchange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.FutureSnapshotExData} returns this
 */
proto.Qot_Common.FutureSnapshotExData.prototype.setPositionchange = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string lastTradeTime = 4;
 * @return {string}
 */
proto.Qot_Common.FutureSnapshotExData.prototype.getLasttradetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.FutureSnapshotExData} returns this
 */
proto.Qot_Common.FutureSnapshotExData.prototype.setLasttradetime = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double lastTradeTimestamp = 5;
 * @return {number}
 */
proto.Qot_Common.FutureSnapshotExData.prototype.getLasttradetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.FutureSnapshotExData} returns this
 */
proto.Qot_Common.FutureSnapshotExData.prototype.setLasttradetimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional bool isMainContract = 6;
 * @return {boolean}
 */
proto.Qot_Common.FutureSnapshotExData.prototype.getIsmaincontract = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Qot_Common.FutureSnapshotExData} returns this
 */
proto.Qot_Common.FutureSnapshotExData.prototype.setIsmaincontract = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





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
proto.Qot_Common.TrustSnapshotExData.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.TrustSnapshotExData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.TrustSnapshotExData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.TrustSnapshotExData.toObject = function(includeInstance, msg) {
  var f, obj = {
    dividend: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    dividendyield: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    aum: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    outstandingunits: jspb.Message.getFieldWithDefault(msg, 4, 0),
    netassetvalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    premium: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    assetclass: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.Qot_Common.TrustSnapshotExData}
 */
proto.Qot_Common.TrustSnapshotExData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.TrustSnapshotExData;
  return proto.Qot_Common.TrustSnapshotExData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.TrustSnapshotExData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.TrustSnapshotExData}
 */
proto.Qot_Common.TrustSnapshotExData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDividend(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDividendyield(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOutstandingunits(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNetassetvalue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPremium(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAssetclass(value);
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
proto.Qot_Common.TrustSnapshotExData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.TrustSnapshotExData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.TrustSnapshotExData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.TrustSnapshotExData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDividend();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getDividendyield();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getAum();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getOutstandingunits();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getNetassetvalue();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getPremium();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getAssetclass();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional double dividend = 1;
 * @return {number}
 */
proto.Qot_Common.TrustSnapshotExData.prototype.getDividend = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.TrustSnapshotExData} returns this
 */
proto.Qot_Common.TrustSnapshotExData.prototype.setDividend = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double dividendYield = 2;
 * @return {number}
 */
proto.Qot_Common.TrustSnapshotExData.prototype.getDividendyield = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.TrustSnapshotExData} returns this
 */
proto.Qot_Common.TrustSnapshotExData.prototype.setDividendyield = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double aum = 3;
 * @return {number}
 */
proto.Qot_Common.TrustSnapshotExData.prototype.getAum = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.TrustSnapshotExData} returns this
 */
proto.Qot_Common.TrustSnapshotExData.prototype.setAum = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int64 outstandingUnits = 4;
 * @return {number}
 */
proto.Qot_Common.TrustSnapshotExData.prototype.getOutstandingunits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.TrustSnapshotExData} returns this
 */
proto.Qot_Common.TrustSnapshotExData.prototype.setOutstandingunits = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double netAssetValue = 5;
 * @return {number}
 */
proto.Qot_Common.TrustSnapshotExData.prototype.getNetassetvalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.TrustSnapshotExData} returns this
 */
proto.Qot_Common.TrustSnapshotExData.prototype.setNetassetvalue = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double premium = 6;
 * @return {number}
 */
proto.Qot_Common.TrustSnapshotExData.prototype.getPremium = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.TrustSnapshotExData} returns this
 */
proto.Qot_Common.TrustSnapshotExData.prototype.setPremium = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional int32 assetClass = 7;
 * @return {number}
 */
proto.Qot_Common.TrustSnapshotExData.prototype.getAssetclass = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.TrustSnapshotExData} returns this
 */
proto.Qot_Common.TrustSnapshotExData.prototype.setAssetclass = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





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
proto.Qot_Common.Snapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.Snapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.Snapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.Snapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    security: (f = msg.getSecurity()) && proto.Qot_Common.Security.toObject(includeInstance, f),
    namegb: jspb.Message.getFieldWithDefault(msg, 2, ""),
    namegccs: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nameus: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    secstatus: jspb.Message.getFieldWithDefault(msg, 6, 0),
    listtime: jspb.Message.getFieldWithDefault(msg, 7, ""),
    lotsize: jspb.Message.getFieldWithDefault(msg, 8, 0),
    pricespread: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    changeval: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    changerate: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    highprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    openprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    lowprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    lastcloseprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    curprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    volume: jspb.Message.getFieldWithDefault(msg, 17, 0),
    turnover: jspb.Message.getFloatingPointFieldWithDefault(msg, 18, 0.0),
    turnoverrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 19, 0.0),
    listtimestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 20, 0.0),
    updatetimestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 21, 0.0),
    askprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 22, 0.0),
    bidprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 23, 0.0),
    askvol: jspb.Message.getFieldWithDefault(msg, 24, 0),
    bidvol: jspb.Message.getFieldWithDefault(msg, 25, 0),
    enablemargin: jspb.Message.getBooleanFieldWithDefault(msg, 26, false),
    mortgageratio: jspb.Message.getFloatingPointFieldWithDefault(msg, 27, 0.0),
    longmargininitialratio: jspb.Message.getFloatingPointFieldWithDefault(msg, 28, 0.0),
    enableshortsell: jspb.Message.getBooleanFieldWithDefault(msg, 29, false),
    shortsellrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 30, 0.0),
    shortavailablevolume: jspb.Message.getFieldWithDefault(msg, 31, 0),
    shortmargininitialratio: jspb.Message.getFloatingPointFieldWithDefault(msg, 32, 0.0),
    amplitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 33, 0.0),
    avgprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 34, 0.0),
    bidaskratio: jspb.Message.getFloatingPointFieldWithDefault(msg, 35, 0.0),
    volumeratio: jspb.Message.getFloatingPointFieldWithDefault(msg, 36, 0.0),
    highest52weeksprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 37, 0.0),
    lowest52weeksprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 38, 0.0),
    highesthistoryprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 39, 0.0),
    lowesthistoryprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 40, 0.0),
    closeprice5minute: jspb.Message.getFloatingPointFieldWithDefault(msg, 41, 0.0),
    changerate5minute: jspb.Message.getFloatingPointFieldWithDefault(msg, 42, 0.0),
    closeprice5day: jspb.Message.getFloatingPointFieldWithDefault(msg, 43, 0.0),
    changerate5day: jspb.Message.getFloatingPointFieldWithDefault(msg, 44, 0.0),
    closeprice20day: jspb.Message.getFloatingPointFieldWithDefault(msg, 45, 0.0),
    changerate20day: jspb.Message.getFloatingPointFieldWithDefault(msg, 46, 0.0),
    closepriceytd: jspb.Message.getFloatingPointFieldWithDefault(msg, 47, 0.0),
    changerateytd: jspb.Message.getFloatingPointFieldWithDefault(msg, 48, 0.0),
    premarket: (f = msg.getPremarket()) && proto.Qot_Common.PreAfterMarketData.toObject(includeInstance, f),
    aftermarket: (f = msg.getAftermarket()) && proto.Qot_Common.PreAfterMarketData.toObject(includeInstance, f),
    equityexdata: (f = msg.getEquityexdata()) && proto.Qot_Common.EquitySnapshotExData.toObject(includeInstance, f),
    indexexdata: (f = msg.getIndexexdata()) && proto.Qot_Common.IndexSnapshotExData.toObject(includeInstance, f),
    plateexdata: (f = msg.getPlateexdata()) && proto.Qot_Common.PlateSnapshotExData.toObject(includeInstance, f),
    warrantexdata: (f = msg.getWarrantexdata()) && proto.Qot_Common.WarrantSnapshotExData.toObject(includeInstance, f),
    optionexdata: (f = msg.getOptionexdata()) && proto.Qot_Common.OptionSnapshotExData.toObject(includeInstance, f),
    futureexdata: (f = msg.getFutureexdata()) && proto.Qot_Common.FutureSnapshotExData.toObject(includeInstance, f),
    trustexdata: (f = msg.getTrustexdata()) && proto.Qot_Common.TrustSnapshotExData.toObject(includeInstance, f),
    currency: jspb.Message.getFieldWithDefault(msg, 58, ""),
    exchange: jspb.Message.getFieldWithDefault(msg, 59, 0),
    spreadpart: jspb.Message.getFieldWithDefault(msg, 60, "")
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
 * @return {!proto.Qot_Common.Snapshot}
 */
proto.Qot_Common.Snapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.Snapshot;
  return proto.Qot_Common.Snapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.Snapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.Snapshot}
 */
proto.Qot_Common.Snapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.Security;
      reader.readMessage(value,proto.Qot_Common.Security.deserializeBinaryFromReader);
      msg.setSecurity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegb(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegccs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSecstatus(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setListtime(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLotsize(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPricespread(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangeval(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangerate(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHighprice(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpenprice(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowprice(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastcloseprice(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCurprice(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTurnover(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTurnoverrate(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setListtimestamp(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUpdatetimestamp(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAskprice(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidprice(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAskvol(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBidvol(value);
      break;
    case 26:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnablemargin(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMortgageratio(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongmargininitialratio(value);
      break;
    case 29:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableshortsell(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setShortsellrate(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setShortavailablevolume(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setShortmargininitialratio(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmplitude(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvgprice(value);
      break;
    case 35:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidaskratio(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeratio(value);
      break;
    case 37:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHighest52weeksprice(value);
      break;
    case 38:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowest52weeksprice(value);
      break;
    case 39:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHighesthistoryprice(value);
      break;
    case 40:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowesthistoryprice(value);
      break;
    case 41:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCloseprice5minute(value);
      break;
    case 42:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangerate5minute(value);
      break;
    case 43:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCloseprice5day(value);
      break;
    case 44:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangerate5day(value);
      break;
    case 45:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCloseprice20day(value);
      break;
    case 46:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangerate20day(value);
      break;
    case 47:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setClosepriceytd(value);
      break;
    case 48:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangerateytd(value);
      break;
    case 49:
      var value = new proto.Qot_Common.PreAfterMarketData;
      reader.readMessage(value,proto.Qot_Common.PreAfterMarketData.deserializeBinaryFromReader);
      msg.setPremarket(value);
      break;
    case 50:
      var value = new proto.Qot_Common.PreAfterMarketData;
      reader.readMessage(value,proto.Qot_Common.PreAfterMarketData.deserializeBinaryFromReader);
      msg.setAftermarket(value);
      break;
    case 51:
      var value = new proto.Qot_Common.EquitySnapshotExData;
      reader.readMessage(value,proto.Qot_Common.EquitySnapshotExData.deserializeBinaryFromReader);
      msg.setEquityexdata(value);
      break;
    case 52:
      var value = new proto.Qot_Common.IndexSnapshotExData;
      reader.readMessage(value,proto.Qot_Common.IndexSnapshotExData.deserializeBinaryFromReader);
      msg.setIndexexdata(value);
      break;
    case 53:
      var value = new proto.Qot_Common.PlateSnapshotExData;
      reader.readMessage(value,proto.Qot_Common.PlateSnapshotExData.deserializeBinaryFromReader);
      msg.setPlateexdata(value);
      break;
    case 54:
      var value = new proto.Qot_Common.WarrantSnapshotExData;
      reader.readMessage(value,proto.Qot_Common.WarrantSnapshotExData.deserializeBinaryFromReader);
      msg.setWarrantexdata(value);
      break;
    case 55:
      var value = new proto.Qot_Common.OptionSnapshotExData;
      reader.readMessage(value,proto.Qot_Common.OptionSnapshotExData.deserializeBinaryFromReader);
      msg.setOptionexdata(value);
      break;
    case 56:
      var value = new proto.Qot_Common.FutureSnapshotExData;
      reader.readMessage(value,proto.Qot_Common.FutureSnapshotExData.deserializeBinaryFromReader);
      msg.setFutureexdata(value);
      break;
    case 57:
      var value = new proto.Qot_Common.TrustSnapshotExData;
      reader.readMessage(value,proto.Qot_Common.TrustSnapshotExData.deserializeBinaryFromReader);
      msg.setTrustexdata(value);
      break;
    case 58:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 59:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExchange(value);
      break;
    case 60:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpreadpart(value);
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
proto.Qot_Common.Snapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.Snapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.Snapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.Snapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecurity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Qot_Common.Security.serializeBinaryToWriter
    );
  }
  f = message.getNamegb();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNamegccs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNameus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getSecstatus();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getListtime();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLotsize();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getPricespread();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getChangeval();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getChangerate();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getHighprice();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getOpenprice();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getLowprice();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getLastcloseprice();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getCurprice();
  if (f !== 0.0) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = message.getTurnover();
  if (f !== 0.0) {
    writer.writeDouble(
      18,
      f
    );
  }
  f = message.getTurnoverrate();
  if (f !== 0.0) {
    writer.writeDouble(
      19,
      f
    );
  }
  f = message.getListtimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      20,
      f
    );
  }
  f = message.getUpdatetimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      21,
      f
    );
  }
  f = message.getAskprice();
  if (f !== 0.0) {
    writer.writeDouble(
      22,
      f
    );
  }
  f = message.getBidprice();
  if (f !== 0.0) {
    writer.writeDouble(
      23,
      f
    );
  }
  f = message.getAskvol();
  if (f !== 0) {
    writer.writeInt64(
      24,
      f
    );
  }
  f = message.getBidvol();
  if (f !== 0) {
    writer.writeInt64(
      25,
      f
    );
  }
  f = message.getEnablemargin();
  if (f) {
    writer.writeBool(
      26,
      f
    );
  }
  f = message.getMortgageratio();
  if (f !== 0.0) {
    writer.writeDouble(
      27,
      f
    );
  }
  f = message.getLongmargininitialratio();
  if (f !== 0.0) {
    writer.writeDouble(
      28,
      f
    );
  }
  f = message.getEnableshortsell();
  if (f) {
    writer.writeBool(
      29,
      f
    );
  }
  f = message.getShortsellrate();
  if (f !== 0.0) {
    writer.writeDouble(
      30,
      f
    );
  }
  f = message.getShortavailablevolume();
  if (f !== 0) {
    writer.writeInt64(
      31,
      f
    );
  }
  f = message.getShortmargininitialratio();
  if (f !== 0.0) {
    writer.writeDouble(
      32,
      f
    );
  }
  f = message.getAmplitude();
  if (f !== 0.0) {
    writer.writeDouble(
      33,
      f
    );
  }
  f = message.getAvgprice();
  if (f !== 0.0) {
    writer.writeDouble(
      34,
      f
    );
  }
  f = message.getBidaskratio();
  if (f !== 0.0) {
    writer.writeDouble(
      35,
      f
    );
  }
  f = message.getVolumeratio();
  if (f !== 0.0) {
    writer.writeDouble(
      36,
      f
    );
  }
  f = message.getHighest52weeksprice();
  if (f !== 0.0) {
    writer.writeDouble(
      37,
      f
    );
  }
  f = message.getLowest52weeksprice();
  if (f !== 0.0) {
    writer.writeDouble(
      38,
      f
    );
  }
  f = message.getHighesthistoryprice();
  if (f !== 0.0) {
    writer.writeDouble(
      39,
      f
    );
  }
  f = message.getLowesthistoryprice();
  if (f !== 0.0) {
    writer.writeDouble(
      40,
      f
    );
  }
  f = message.getCloseprice5minute();
  if (f !== 0.0) {
    writer.writeDouble(
      41,
      f
    );
  }
  f = message.getChangerate5minute();
  if (f !== 0.0) {
    writer.writeDouble(
      42,
      f
    );
  }
  f = message.getCloseprice5day();
  if (f !== 0.0) {
    writer.writeDouble(
      43,
      f
    );
  }
  f = message.getChangerate5day();
  if (f !== 0.0) {
    writer.writeDouble(
      44,
      f
    );
  }
  f = message.getCloseprice20day();
  if (f !== 0.0) {
    writer.writeDouble(
      45,
      f
    );
  }
  f = message.getChangerate20day();
  if (f !== 0.0) {
    writer.writeDouble(
      46,
      f
    );
  }
  f = message.getClosepriceytd();
  if (f !== 0.0) {
    writer.writeDouble(
      47,
      f
    );
  }
  f = message.getChangerateytd();
  if (f !== 0.0) {
    writer.writeDouble(
      48,
      f
    );
  }
  f = message.getPremarket();
  if (f != null) {
    writer.writeMessage(
      49,
      f,
      proto.Qot_Common.PreAfterMarketData.serializeBinaryToWriter
    );
  }
  f = message.getAftermarket();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      proto.Qot_Common.PreAfterMarketData.serializeBinaryToWriter
    );
  }
  f = message.getEquityexdata();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      proto.Qot_Common.EquitySnapshotExData.serializeBinaryToWriter
    );
  }
  f = message.getIndexexdata();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      proto.Qot_Common.IndexSnapshotExData.serializeBinaryToWriter
    );
  }
  f = message.getPlateexdata();
  if (f != null) {
    writer.writeMessage(
      53,
      f,
      proto.Qot_Common.PlateSnapshotExData.serializeBinaryToWriter
    );
  }
  f = message.getWarrantexdata();
  if (f != null) {
    writer.writeMessage(
      54,
      f,
      proto.Qot_Common.WarrantSnapshotExData.serializeBinaryToWriter
    );
  }
  f = message.getOptionexdata();
  if (f != null) {
    writer.writeMessage(
      55,
      f,
      proto.Qot_Common.OptionSnapshotExData.serializeBinaryToWriter
    );
  }
  f = message.getFutureexdata();
  if (f != null) {
    writer.writeMessage(
      56,
      f,
      proto.Qot_Common.FutureSnapshotExData.serializeBinaryToWriter
    );
  }
  f = message.getTrustexdata();
  if (f != null) {
    writer.writeMessage(
      57,
      f,
      proto.Qot_Common.TrustSnapshotExData.serializeBinaryToWriter
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      58,
      f
    );
  }
  f = message.getExchange();
  if (f !== 0) {
    writer.writeInt32(
      59,
      f
    );
  }
  f = message.getSpreadpart();
  if (f.length > 0) {
    writer.writeString(
      60,
      f
    );
  }
};


/**
 * optional Security security = 1;
 * @return {?proto.Qot_Common.Security}
 */
proto.Qot_Common.Snapshot.prototype.getSecurity = function() {
  return /** @type{?proto.Qot_Common.Security} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.Security, 1));
};


/**
 * @param {?proto.Qot_Common.Security|undefined} value
 * @return {!proto.Qot_Common.Snapshot} returns this
*/
proto.Qot_Common.Snapshot.prototype.setSecurity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.clearSecurity = function() {
  return this.setSecurity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.Snapshot.prototype.hasSecurity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string nameGB = 2;
 * @return {string}
 */
proto.Qot_Common.Snapshot.prototype.getNamegb = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setNamegb = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nameGCCS = 3;
 * @return {string}
 */
proto.Qot_Common.Snapshot.prototype.getNamegccs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setNamegccs = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nameUS = 4;
 * @return {string}
 */
proto.Qot_Common.Snapshot.prototype.getNameus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setNameus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 type = 5;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 secStatus = 6;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getSecstatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setSecstatus = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string listTime = 7;
 * @return {string}
 */
proto.Qot_Common.Snapshot.prototype.getListtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setListtime = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 lotSize = 8;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getLotsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setLotsize = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional double priceSpread = 9;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getPricespread = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setPricespread = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double changeVal = 10;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getChangeval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setChangeval = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double changeRate = 11;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getChangerate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setChangerate = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional double highPrice = 12;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getHighprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setHighprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional double openPrice = 13;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getOpenprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setOpenprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double lowPrice = 14;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getLowprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setLowprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional double lastClosePrice = 15;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getLastcloseprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setLastcloseprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional double curPrice = 16;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getCurprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setCurprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional int64 volume = 17;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional double turnover = 18;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getTurnover = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setTurnover = function(value) {
  return jspb.Message.setProto3FloatField(this, 18, value);
};


/**
 * optional double turnoverRate = 19;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getTurnoverrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setTurnoverrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 19, value);
};


/**
 * optional double listTimestamp = 20;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getListtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setListtimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 20, value);
};


/**
 * optional double updateTimestamp = 21;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getUpdatetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setUpdatetimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 21, value);
};


/**
 * optional double askPrice = 22;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getAskprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 22, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setAskprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 22, value);
};


/**
 * optional double bidPrice = 23;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getBidprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 23, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setBidprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 23, value);
};


/**
 * optional int64 askVol = 24;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getAskvol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setAskvol = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional int64 bidVol = 25;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getBidvol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setBidvol = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional bool enableMargin = 26;
 * @return {boolean}
 */
proto.Qot_Common.Snapshot.prototype.getEnablemargin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 26, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setEnablemargin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 26, value);
};


/**
 * optional double mortgageRatio = 27;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getMortgageratio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 27, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setMortgageratio = function(value) {
  return jspb.Message.setProto3FloatField(this, 27, value);
};


/**
 * optional double longMarginInitialRatio = 28;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getLongmargininitialratio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 28, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setLongmargininitialratio = function(value) {
  return jspb.Message.setProto3FloatField(this, 28, value);
};


/**
 * optional bool enableShortSell = 29;
 * @return {boolean}
 */
proto.Qot_Common.Snapshot.prototype.getEnableshortsell = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 29, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setEnableshortsell = function(value) {
  return jspb.Message.setProto3BooleanField(this, 29, value);
};


/**
 * optional double shortSellRate = 30;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getShortsellrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 30, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setShortsellrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 30, value);
};


/**
 * optional int64 shortAvailableVolume = 31;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getShortavailablevolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setShortavailablevolume = function(value) {
  return jspb.Message.setProto3IntField(this, 31, value);
};


/**
 * optional double shortMarginInitialRatio = 32;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getShortmargininitialratio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 32, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setShortmargininitialratio = function(value) {
  return jspb.Message.setProto3FloatField(this, 32, value);
};


/**
 * optional double amplitude = 33;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getAmplitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 33, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setAmplitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 33, value);
};


/**
 * optional double avgPrice = 34;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getAvgprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 34, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setAvgprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 34, value);
};


/**
 * optional double bidAskRatio = 35;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getBidaskratio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 35, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setBidaskratio = function(value) {
  return jspb.Message.setProto3FloatField(this, 35, value);
};


/**
 * optional double volumeRatio = 36;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getVolumeratio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 36, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setVolumeratio = function(value) {
  return jspb.Message.setProto3FloatField(this, 36, value);
};


/**
 * optional double highest52WeeksPrice = 37;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getHighest52weeksprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 37, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setHighest52weeksprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 37, value);
};


/**
 * optional double lowest52WeeksPrice = 38;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getLowest52weeksprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 38, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setLowest52weeksprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 38, value);
};


/**
 * optional double highestHistoryPrice = 39;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getHighesthistoryprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 39, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setHighesthistoryprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 39, value);
};


/**
 * optional double lowestHistoryPrice = 40;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getLowesthistoryprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 40, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setLowesthistoryprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 40, value);
};


/**
 * optional double closePrice5Minute = 41;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getCloseprice5minute = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 41, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setCloseprice5minute = function(value) {
  return jspb.Message.setProto3FloatField(this, 41, value);
};


/**
 * optional double changeRate5Minute = 42;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getChangerate5minute = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 42, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setChangerate5minute = function(value) {
  return jspb.Message.setProto3FloatField(this, 42, value);
};


/**
 * optional double closePrice5Day = 43;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getCloseprice5day = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 43, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setCloseprice5day = function(value) {
  return jspb.Message.setProto3FloatField(this, 43, value);
};


/**
 * optional double changeRate5Day = 44;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getChangerate5day = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 44, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setChangerate5day = function(value) {
  return jspb.Message.setProto3FloatField(this, 44, value);
};


/**
 * optional double closePrice20Day = 45;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getCloseprice20day = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 45, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setCloseprice20day = function(value) {
  return jspb.Message.setProto3FloatField(this, 45, value);
};


/**
 * optional double changeRate20Day = 46;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getChangerate20day = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 46, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setChangerate20day = function(value) {
  return jspb.Message.setProto3FloatField(this, 46, value);
};


/**
 * optional double closePriceYTD = 47;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getClosepriceytd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 47, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setClosepriceytd = function(value) {
  return jspb.Message.setProto3FloatField(this, 47, value);
};


/**
 * optional double changeRateYTD = 48;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getChangerateytd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 48, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setChangerateytd = function(value) {
  return jspb.Message.setProto3FloatField(this, 48, value);
};


/**
 * optional PreAfterMarketData preMarket = 49;
 * @return {?proto.Qot_Common.PreAfterMarketData}
 */
proto.Qot_Common.Snapshot.prototype.getPremarket = function() {
  return /** @type{?proto.Qot_Common.PreAfterMarketData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.PreAfterMarketData, 49));
};


/**
 * @param {?proto.Qot_Common.PreAfterMarketData|undefined} value
 * @return {!proto.Qot_Common.Snapshot} returns this
*/
proto.Qot_Common.Snapshot.prototype.setPremarket = function(value) {
  return jspb.Message.setWrapperField(this, 49, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.clearPremarket = function() {
  return this.setPremarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.Snapshot.prototype.hasPremarket = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * optional PreAfterMarketData afterMarket = 50;
 * @return {?proto.Qot_Common.PreAfterMarketData}
 */
proto.Qot_Common.Snapshot.prototype.getAftermarket = function() {
  return /** @type{?proto.Qot_Common.PreAfterMarketData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.PreAfterMarketData, 50));
};


/**
 * @param {?proto.Qot_Common.PreAfterMarketData|undefined} value
 * @return {!proto.Qot_Common.Snapshot} returns this
*/
proto.Qot_Common.Snapshot.prototype.setAftermarket = function(value) {
  return jspb.Message.setWrapperField(this, 50, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.clearAftermarket = function() {
  return this.setAftermarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.Snapshot.prototype.hasAftermarket = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional EquitySnapshotExData equityExData = 51;
 * @return {?proto.Qot_Common.EquitySnapshotExData}
 */
proto.Qot_Common.Snapshot.prototype.getEquityexdata = function() {
  return /** @type{?proto.Qot_Common.EquitySnapshotExData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.EquitySnapshotExData, 51));
};


/**
 * @param {?proto.Qot_Common.EquitySnapshotExData|undefined} value
 * @return {!proto.Qot_Common.Snapshot} returns this
*/
proto.Qot_Common.Snapshot.prototype.setEquityexdata = function(value) {
  return jspb.Message.setWrapperField(this, 51, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.clearEquityexdata = function() {
  return this.setEquityexdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.Snapshot.prototype.hasEquityexdata = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional IndexSnapshotExData indexExData = 52;
 * @return {?proto.Qot_Common.IndexSnapshotExData}
 */
proto.Qot_Common.Snapshot.prototype.getIndexexdata = function() {
  return /** @type{?proto.Qot_Common.IndexSnapshotExData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.IndexSnapshotExData, 52));
};


/**
 * @param {?proto.Qot_Common.IndexSnapshotExData|undefined} value
 * @return {!proto.Qot_Common.Snapshot} returns this
*/
proto.Qot_Common.Snapshot.prototype.setIndexexdata = function(value) {
  return jspb.Message.setWrapperField(this, 52, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.clearIndexexdata = function() {
  return this.setIndexexdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.Snapshot.prototype.hasIndexexdata = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional PlateSnapshotExData plateExData = 53;
 * @return {?proto.Qot_Common.PlateSnapshotExData}
 */
proto.Qot_Common.Snapshot.prototype.getPlateexdata = function() {
  return /** @type{?proto.Qot_Common.PlateSnapshotExData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.PlateSnapshotExData, 53));
};


/**
 * @param {?proto.Qot_Common.PlateSnapshotExData|undefined} value
 * @return {!proto.Qot_Common.Snapshot} returns this
*/
proto.Qot_Common.Snapshot.prototype.setPlateexdata = function(value) {
  return jspb.Message.setWrapperField(this, 53, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.clearPlateexdata = function() {
  return this.setPlateexdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.Snapshot.prototype.hasPlateexdata = function() {
  return jspb.Message.getField(this, 53) != null;
};


/**
 * optional WarrantSnapshotExData warrantExData = 54;
 * @return {?proto.Qot_Common.WarrantSnapshotExData}
 */
proto.Qot_Common.Snapshot.prototype.getWarrantexdata = function() {
  return /** @type{?proto.Qot_Common.WarrantSnapshotExData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.WarrantSnapshotExData, 54));
};


/**
 * @param {?proto.Qot_Common.WarrantSnapshotExData|undefined} value
 * @return {!proto.Qot_Common.Snapshot} returns this
*/
proto.Qot_Common.Snapshot.prototype.setWarrantexdata = function(value) {
  return jspb.Message.setWrapperField(this, 54, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.clearWarrantexdata = function() {
  return this.setWarrantexdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.Snapshot.prototype.hasWarrantexdata = function() {
  return jspb.Message.getField(this, 54) != null;
};


/**
 * optional OptionSnapshotExData optionExData = 55;
 * @return {?proto.Qot_Common.OptionSnapshotExData}
 */
proto.Qot_Common.Snapshot.prototype.getOptionexdata = function() {
  return /** @type{?proto.Qot_Common.OptionSnapshotExData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.OptionSnapshotExData, 55));
};


/**
 * @param {?proto.Qot_Common.OptionSnapshotExData|undefined} value
 * @return {!proto.Qot_Common.Snapshot} returns this
*/
proto.Qot_Common.Snapshot.prototype.setOptionexdata = function(value) {
  return jspb.Message.setWrapperField(this, 55, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.clearOptionexdata = function() {
  return this.setOptionexdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.Snapshot.prototype.hasOptionexdata = function() {
  return jspb.Message.getField(this, 55) != null;
};


/**
 * optional FutureSnapshotExData futureExData = 56;
 * @return {?proto.Qot_Common.FutureSnapshotExData}
 */
proto.Qot_Common.Snapshot.prototype.getFutureexdata = function() {
  return /** @type{?proto.Qot_Common.FutureSnapshotExData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.FutureSnapshotExData, 56));
};


/**
 * @param {?proto.Qot_Common.FutureSnapshotExData|undefined} value
 * @return {!proto.Qot_Common.Snapshot} returns this
*/
proto.Qot_Common.Snapshot.prototype.setFutureexdata = function(value) {
  return jspb.Message.setWrapperField(this, 56, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.clearFutureexdata = function() {
  return this.setFutureexdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.Snapshot.prototype.hasFutureexdata = function() {
  return jspb.Message.getField(this, 56) != null;
};


/**
 * optional TrustSnapshotExData trustExData = 57;
 * @return {?proto.Qot_Common.TrustSnapshotExData}
 */
proto.Qot_Common.Snapshot.prototype.getTrustexdata = function() {
  return /** @type{?proto.Qot_Common.TrustSnapshotExData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.TrustSnapshotExData, 57));
};


/**
 * @param {?proto.Qot_Common.TrustSnapshotExData|undefined} value
 * @return {!proto.Qot_Common.Snapshot} returns this
*/
proto.Qot_Common.Snapshot.prototype.setTrustexdata = function(value) {
  return jspb.Message.setWrapperField(this, 57, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.clearTrustexdata = function() {
  return this.setTrustexdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.Snapshot.prototype.hasTrustexdata = function() {
  return jspb.Message.getField(this, 57) != null;
};


/**
 * optional string currency = 58;
 * @return {string}
 */
proto.Qot_Common.Snapshot.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 58, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 58, value);
};


/**
 * optional int32 exchange = 59;
 * @return {number}
 */
proto.Qot_Common.Snapshot.prototype.getExchange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 59, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setExchange = function(value) {
  return jspb.Message.setProto3IntField(this, 59, value);
};


/**
 * optional string spreadPart = 60;
 * @return {string}
 */
proto.Qot_Common.Snapshot.prototype.getSpreadpart = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 60, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.Snapshot} returns this
 */
proto.Qot_Common.Snapshot.prototype.setSpreadpart = function(value) {
  return jspb.Message.setProto3StringField(this, 60, value);
};





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
proto.Qot_Common.StockInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.StockInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.StockInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.StockInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    security: (f = msg.getSecurity()) && proto.Qot_Common.Security.toObject(includeInstance, f),
    namegb: jspb.Message.getFieldWithDefault(msg, 2, ""),
    namegccs: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nameus: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    secstatus: jspb.Message.getFieldWithDefault(msg, 6, 0),
    lotsize: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pricespread: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    currency: jspb.Message.getFieldWithDefault(msg, 9, ""),
    exchange: jspb.Message.getFieldWithDefault(msg, 10, 0),
    changeval: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    changerate: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    highprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    openprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    lowprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    lastcloseprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    curprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
    volume: jspb.Message.getFieldWithDefault(msg, 18, 0),
    turnover: jspb.Message.getFloatingPointFieldWithDefault(msg, 19, 0.0),
    turnoverrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 20, 0.0),
    updatetimestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 21, 0.0),
    askprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 22, 0.0),
    bidprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 23, 0.0),
    askvol: jspb.Message.getFieldWithDefault(msg, 24, 0),
    bidvol: jspb.Message.getFieldWithDefault(msg, 25, 0),
    amplitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 26, 0.0),
    avgprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 27, 0.0),
    bidaskratio: jspb.Message.getFloatingPointFieldWithDefault(msg, 28, 0.0),
    volumeratio: jspb.Message.getFloatingPointFieldWithDefault(msg, 29, 0.0),
    highest52weeksprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 30, 0.0),
    lowest52weeksprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 31, 0.0),
    highesthistoryprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 32, 0.0),
    lowesthistoryprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 33, 0.0),
    issuedshares: jspb.Message.getFieldWithDefault(msg, 34, 0),
    issuedmarketval: jspb.Message.getFloatingPointFieldWithDefault(msg, 35, 0.0),
    earningspershare: jspb.Message.getFloatingPointFieldWithDefault(msg, 36, 0.0),
    outstandingshares: jspb.Message.getFieldWithDefault(msg, 37, 0),
    outstandingmarketval: jspb.Message.getFloatingPointFieldWithDefault(msg, 38, 0.0),
    netassetpershare: jspb.Message.getFloatingPointFieldWithDefault(msg, 39, 0.0),
    perate: jspb.Message.getFloatingPointFieldWithDefault(msg, 40, 0.0),
    pbrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 41, 0.0),
    dividend: jspb.Message.getFloatingPointFieldWithDefault(msg, 42, 0.0),
    dividendratio: jspb.Message.getFloatingPointFieldWithDefault(msg, 43, 0.0),
    premarket: (f = msg.getPremarket()) && proto.Qot_Common.PreAfterMarketData.toObject(includeInstance, f),
    aftermarket: (f = msg.getAftermarket()) && proto.Qot_Common.PreAfterMarketData.toObject(includeInstance, f),
    closeprice5minute: jspb.Message.getFloatingPointFieldWithDefault(msg, 46, 0.0),
    changerate5minute: jspb.Message.getFloatingPointFieldWithDefault(msg, 47, 0.0),
    closeprice5day: jspb.Message.getFloatingPointFieldWithDefault(msg, 48, 0.0),
    changerate5day: jspb.Message.getFloatingPointFieldWithDefault(msg, 49, 0.0),
    closeprice20day: jspb.Message.getFloatingPointFieldWithDefault(msg, 50, 0.0),
    changerate20day: jspb.Message.getFloatingPointFieldWithDefault(msg, 51, 0.0),
    closepriceytd: jspb.Message.getFloatingPointFieldWithDefault(msg, 52, 0.0),
    changerateytd: jspb.Message.getFloatingPointFieldWithDefault(msg, 53, 0.0)
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
 * @return {!proto.Qot_Common.StockInfo}
 */
proto.Qot_Common.StockInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.StockInfo;
  return proto.Qot_Common.StockInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.StockInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.StockInfo}
 */
proto.Qot_Common.StockInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.Security;
      reader.readMessage(value,proto.Qot_Common.Security.deserializeBinaryFromReader);
      msg.setSecurity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegb(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegccs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSecstatus(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLotsize(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPricespread(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExchange(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangeval(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangerate(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHighprice(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpenprice(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowprice(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastcloseprice(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCurprice(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTurnover(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTurnoverrate(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUpdatetimestamp(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAskprice(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidprice(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAskvol(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBidvol(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmplitude(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvgprice(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidaskratio(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolumeratio(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHighest52weeksprice(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowest52weeksprice(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHighesthistoryprice(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowesthistoryprice(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIssuedshares(value);
      break;
    case 35:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setIssuedmarketval(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEarningspershare(value);
      break;
    case 37:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOutstandingshares(value);
      break;
    case 38:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutstandingmarketval(value);
      break;
    case 39:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNetassetpershare(value);
      break;
    case 40:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPerate(value);
      break;
    case 41:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPbrate(value);
      break;
    case 42:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDividend(value);
      break;
    case 43:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDividendratio(value);
      break;
    case 44:
      var value = new proto.Qot_Common.PreAfterMarketData;
      reader.readMessage(value,proto.Qot_Common.PreAfterMarketData.deserializeBinaryFromReader);
      msg.setPremarket(value);
      break;
    case 45:
      var value = new proto.Qot_Common.PreAfterMarketData;
      reader.readMessage(value,proto.Qot_Common.PreAfterMarketData.deserializeBinaryFromReader);
      msg.setAftermarket(value);
      break;
    case 46:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCloseprice5minute(value);
      break;
    case 47:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangerate5minute(value);
      break;
    case 48:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCloseprice5day(value);
      break;
    case 49:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangerate5day(value);
      break;
    case 50:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCloseprice20day(value);
      break;
    case 51:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangerate20day(value);
      break;
    case 52:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setClosepriceytd(value);
      break;
    case 53:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangerateytd(value);
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
proto.Qot_Common.StockInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.StockInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.StockInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.StockInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecurity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Qot_Common.Security.serializeBinaryToWriter
    );
  }
  f = message.getNamegb();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNamegccs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNameus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getSecstatus();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getLotsize();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPricespread();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getExchange();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getChangeval();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getChangerate();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getHighprice();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getOpenprice();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getLowprice();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getLastcloseprice();
  if (f !== 0.0) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = message.getCurprice();
  if (f !== 0.0) {
    writer.writeDouble(
      17,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
  f = message.getTurnover();
  if (f !== 0.0) {
    writer.writeDouble(
      19,
      f
    );
  }
  f = message.getTurnoverrate();
  if (f !== 0.0) {
    writer.writeDouble(
      20,
      f
    );
  }
  f = message.getUpdatetimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      21,
      f
    );
  }
  f = message.getAskprice();
  if (f !== 0.0) {
    writer.writeDouble(
      22,
      f
    );
  }
  f = message.getBidprice();
  if (f !== 0.0) {
    writer.writeDouble(
      23,
      f
    );
  }
  f = message.getAskvol();
  if (f !== 0) {
    writer.writeInt64(
      24,
      f
    );
  }
  f = message.getBidvol();
  if (f !== 0) {
    writer.writeInt64(
      25,
      f
    );
  }
  f = message.getAmplitude();
  if (f !== 0.0) {
    writer.writeDouble(
      26,
      f
    );
  }
  f = message.getAvgprice();
  if (f !== 0.0) {
    writer.writeDouble(
      27,
      f
    );
  }
  f = message.getBidaskratio();
  if (f !== 0.0) {
    writer.writeDouble(
      28,
      f
    );
  }
  f = message.getVolumeratio();
  if (f !== 0.0) {
    writer.writeDouble(
      29,
      f
    );
  }
  f = message.getHighest52weeksprice();
  if (f !== 0.0) {
    writer.writeDouble(
      30,
      f
    );
  }
  f = message.getLowest52weeksprice();
  if (f !== 0.0) {
    writer.writeDouble(
      31,
      f
    );
  }
  f = message.getHighesthistoryprice();
  if (f !== 0.0) {
    writer.writeDouble(
      32,
      f
    );
  }
  f = message.getLowesthistoryprice();
  if (f !== 0.0) {
    writer.writeDouble(
      33,
      f
    );
  }
  f = message.getIssuedshares();
  if (f !== 0) {
    writer.writeInt64(
      34,
      f
    );
  }
  f = message.getIssuedmarketval();
  if (f !== 0.0) {
    writer.writeDouble(
      35,
      f
    );
  }
  f = message.getEarningspershare();
  if (f !== 0.0) {
    writer.writeDouble(
      36,
      f
    );
  }
  f = message.getOutstandingshares();
  if (f !== 0) {
    writer.writeInt64(
      37,
      f
    );
  }
  f = message.getOutstandingmarketval();
  if (f !== 0.0) {
    writer.writeDouble(
      38,
      f
    );
  }
  f = message.getNetassetpershare();
  if (f !== 0.0) {
    writer.writeDouble(
      39,
      f
    );
  }
  f = message.getPerate();
  if (f !== 0.0) {
    writer.writeDouble(
      40,
      f
    );
  }
  f = message.getPbrate();
  if (f !== 0.0) {
    writer.writeDouble(
      41,
      f
    );
  }
  f = message.getDividend();
  if (f !== 0.0) {
    writer.writeDouble(
      42,
      f
    );
  }
  f = message.getDividendratio();
  if (f !== 0.0) {
    writer.writeDouble(
      43,
      f
    );
  }
  f = message.getPremarket();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto.Qot_Common.PreAfterMarketData.serializeBinaryToWriter
    );
  }
  f = message.getAftermarket();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      proto.Qot_Common.PreAfterMarketData.serializeBinaryToWriter
    );
  }
  f = message.getCloseprice5minute();
  if (f !== 0.0) {
    writer.writeDouble(
      46,
      f
    );
  }
  f = message.getChangerate5minute();
  if (f !== 0.0) {
    writer.writeDouble(
      47,
      f
    );
  }
  f = message.getCloseprice5day();
  if (f !== 0.0) {
    writer.writeDouble(
      48,
      f
    );
  }
  f = message.getChangerate5day();
  if (f !== 0.0) {
    writer.writeDouble(
      49,
      f
    );
  }
  f = message.getCloseprice20day();
  if (f !== 0.0) {
    writer.writeDouble(
      50,
      f
    );
  }
  f = message.getChangerate20day();
  if (f !== 0.0) {
    writer.writeDouble(
      51,
      f
    );
  }
  f = message.getClosepriceytd();
  if (f !== 0.0) {
    writer.writeDouble(
      52,
      f
    );
  }
  f = message.getChangerateytd();
  if (f !== 0.0) {
    writer.writeDouble(
      53,
      f
    );
  }
};


/**
 * optional Security security = 1;
 * @return {?proto.Qot_Common.Security}
 */
proto.Qot_Common.StockInfo.prototype.getSecurity = function() {
  return /** @type{?proto.Qot_Common.Security} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.Security, 1));
};


/**
 * @param {?proto.Qot_Common.Security|undefined} value
 * @return {!proto.Qot_Common.StockInfo} returns this
*/
proto.Qot_Common.StockInfo.prototype.setSecurity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.clearSecurity = function() {
  return this.setSecurity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.StockInfo.prototype.hasSecurity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string nameGB = 2;
 * @return {string}
 */
proto.Qot_Common.StockInfo.prototype.getNamegb = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setNamegb = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nameGCCS = 3;
 * @return {string}
 */
proto.Qot_Common.StockInfo.prototype.getNamegccs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setNamegccs = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nameUS = 4;
 * @return {string}
 */
proto.Qot_Common.StockInfo.prototype.getNameus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setNameus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 type = 5;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 secStatus = 6;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getSecstatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setSecstatus = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 lotSize = 7;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getLotsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setLotsize = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional double priceSpread = 8;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getPricespread = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setPricespread = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional string currency = 9;
 * @return {string}
 */
proto.Qot_Common.StockInfo.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 exchange = 10;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getExchange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setExchange = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional double changeVal = 11;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getChangeval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setChangeval = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional double changeRate = 12;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getChangerate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setChangerate = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional double highPrice = 13;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getHighprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setHighprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double openPrice = 14;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getOpenprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setOpenprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional double lowPrice = 15;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getLowprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setLowprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional double lastClosePrice = 16;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getLastcloseprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setLastcloseprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional double curPrice = 17;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getCurprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setCurprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional int64 volume = 18;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional double turnover = 19;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getTurnover = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setTurnover = function(value) {
  return jspb.Message.setProto3FloatField(this, 19, value);
};


/**
 * optional double turnoverRate = 20;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getTurnoverrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setTurnoverrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 20, value);
};


/**
 * optional double updateTimestamp = 21;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getUpdatetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setUpdatetimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 21, value);
};


/**
 * optional double askPrice = 22;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getAskprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 22, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setAskprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 22, value);
};


/**
 * optional double bidPrice = 23;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getBidprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 23, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setBidprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 23, value);
};


/**
 * optional int64 askVol = 24;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getAskvol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setAskvol = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional int64 bidVol = 25;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getBidvol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setBidvol = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional double amplitude = 26;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getAmplitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 26, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setAmplitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 26, value);
};


/**
 * optional double avgPrice = 27;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getAvgprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 27, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setAvgprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 27, value);
};


/**
 * optional double bidAskRatio = 28;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getBidaskratio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 28, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setBidaskratio = function(value) {
  return jspb.Message.setProto3FloatField(this, 28, value);
};


/**
 * optional double volumeRatio = 29;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getVolumeratio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 29, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setVolumeratio = function(value) {
  return jspb.Message.setProto3FloatField(this, 29, value);
};


/**
 * optional double highest52WeeksPrice = 30;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getHighest52weeksprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 30, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setHighest52weeksprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 30, value);
};


/**
 * optional double lowest52WeeksPrice = 31;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getLowest52weeksprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 31, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setLowest52weeksprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 31, value);
};


/**
 * optional double highestHistoryPrice = 32;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getHighesthistoryprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 32, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setHighesthistoryprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 32, value);
};


/**
 * optional double lowestHistoryPrice = 33;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getLowesthistoryprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 33, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setLowesthistoryprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 33, value);
};


/**
 * optional int64 issuedShares = 34;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getIssuedshares = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setIssuedshares = function(value) {
  return jspb.Message.setProto3IntField(this, 34, value);
};


/**
 * optional double issuedMarketVal = 35;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getIssuedmarketval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 35, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setIssuedmarketval = function(value) {
  return jspb.Message.setProto3FloatField(this, 35, value);
};


/**
 * optional double earningsPerShare = 36;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getEarningspershare = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 36, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setEarningspershare = function(value) {
  return jspb.Message.setProto3FloatField(this, 36, value);
};


/**
 * optional int64 outstandingShares = 37;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getOutstandingshares = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 37, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setOutstandingshares = function(value) {
  return jspb.Message.setProto3IntField(this, 37, value);
};


/**
 * optional double outstandingMarketVal = 38;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getOutstandingmarketval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 38, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setOutstandingmarketval = function(value) {
  return jspb.Message.setProto3FloatField(this, 38, value);
};


/**
 * optional double netAssetPerShare = 39;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getNetassetpershare = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 39, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setNetassetpershare = function(value) {
  return jspb.Message.setProto3FloatField(this, 39, value);
};


/**
 * optional double peRate = 40;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getPerate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 40, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setPerate = function(value) {
  return jspb.Message.setProto3FloatField(this, 40, value);
};


/**
 * optional double pbRate = 41;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getPbrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 41, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setPbrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 41, value);
};


/**
 * optional double dividend = 42;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getDividend = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 42, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setDividend = function(value) {
  return jspb.Message.setProto3FloatField(this, 42, value);
};


/**
 * optional double dividendRatio = 43;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getDividendratio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 43, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setDividendratio = function(value) {
  return jspb.Message.setProto3FloatField(this, 43, value);
};


/**
 * optional PreAfterMarketData preMarket = 44;
 * @return {?proto.Qot_Common.PreAfterMarketData}
 */
proto.Qot_Common.StockInfo.prototype.getPremarket = function() {
  return /** @type{?proto.Qot_Common.PreAfterMarketData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.PreAfterMarketData, 44));
};


/**
 * @param {?proto.Qot_Common.PreAfterMarketData|undefined} value
 * @return {!proto.Qot_Common.StockInfo} returns this
*/
proto.Qot_Common.StockInfo.prototype.setPremarket = function(value) {
  return jspb.Message.setWrapperField(this, 44, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.clearPremarket = function() {
  return this.setPremarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.StockInfo.prototype.hasPremarket = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional PreAfterMarketData afterMarket = 45;
 * @return {?proto.Qot_Common.PreAfterMarketData}
 */
proto.Qot_Common.StockInfo.prototype.getAftermarket = function() {
  return /** @type{?proto.Qot_Common.PreAfterMarketData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.PreAfterMarketData, 45));
};


/**
 * @param {?proto.Qot_Common.PreAfterMarketData|undefined} value
 * @return {!proto.Qot_Common.StockInfo} returns this
*/
proto.Qot_Common.StockInfo.prototype.setAftermarket = function(value) {
  return jspb.Message.setWrapperField(this, 45, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.clearAftermarket = function() {
  return this.setAftermarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.StockInfo.prototype.hasAftermarket = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional double closePrice5Minute = 46;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getCloseprice5minute = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 46, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setCloseprice5minute = function(value) {
  return jspb.Message.setProto3FloatField(this, 46, value);
};


/**
 * optional double changeRate5Minute = 47;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getChangerate5minute = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 47, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setChangerate5minute = function(value) {
  return jspb.Message.setProto3FloatField(this, 47, value);
};


/**
 * optional double closePrice5Day = 48;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getCloseprice5day = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 48, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setCloseprice5day = function(value) {
  return jspb.Message.setProto3FloatField(this, 48, value);
};


/**
 * optional double changeRate5Day = 49;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getChangerate5day = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 49, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setChangerate5day = function(value) {
  return jspb.Message.setProto3FloatField(this, 49, value);
};


/**
 * optional double closePrice20Day = 50;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getCloseprice20day = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 50, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setCloseprice20day = function(value) {
  return jspb.Message.setProto3FloatField(this, 50, value);
};


/**
 * optional double changeRate20Day = 51;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getChangerate20day = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 51, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setChangerate20day = function(value) {
  return jspb.Message.setProto3FloatField(this, 51, value);
};


/**
 * optional double closePriceYTD = 52;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getClosepriceytd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 52, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setClosepriceytd = function(value) {
  return jspb.Message.setProto3FloatField(this, 52, value);
};


/**
 * optional double changeRateYTD = 53;
 * @return {number}
 */
proto.Qot_Common.StockInfo.prototype.getChangerateytd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 53, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.StockInfo} returns this
 */
proto.Qot_Common.StockInfo.prototype.setChangerateytd = function(value) {
  return jspb.Message.setProto3FloatField(this, 53, value);
};





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
proto.Qot_Common.IndexBasicQotExData.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.IndexBasicQotExData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.IndexBasicQotExData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.IndexBasicQotExData.toObject = function(includeInstance, msg) {
  var f, obj = {
    raisecount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fallcount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    equalcount: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.Qot_Common.IndexBasicQotExData}
 */
proto.Qot_Common.IndexBasicQotExData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.IndexBasicQotExData;
  return proto.Qot_Common.IndexBasicQotExData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.IndexBasicQotExData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.IndexBasicQotExData}
 */
proto.Qot_Common.IndexBasicQotExData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRaisecount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFallcount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEqualcount(value);
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
proto.Qot_Common.IndexBasicQotExData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.IndexBasicQotExData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.IndexBasicQotExData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.IndexBasicQotExData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaisecount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFallcount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEqualcount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 raiseCount = 1;
 * @return {number}
 */
proto.Qot_Common.IndexBasicQotExData.prototype.getRaisecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.IndexBasicQotExData} returns this
 */
proto.Qot_Common.IndexBasicQotExData.prototype.setRaisecount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 fallCount = 2;
 * @return {number}
 */
proto.Qot_Common.IndexBasicQotExData.prototype.getFallcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.IndexBasicQotExData} returns this
 */
proto.Qot_Common.IndexBasicQotExData.prototype.setFallcount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 equalCount = 3;
 * @return {number}
 */
proto.Qot_Common.IndexBasicQotExData.prototype.getEqualcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.IndexBasicQotExData} returns this
 */
proto.Qot_Common.IndexBasicQotExData.prototype.setEqualcount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





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
proto.Qot_Common.PlateBasicQotExData.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.PlateBasicQotExData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.PlateBasicQotExData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PlateBasicQotExData.toObject = function(includeInstance, msg) {
  var f, obj = {
    issuedshares: jspb.Message.getFieldWithDefault(msg, 1, 0),
    issuedmarketval: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    outstandingshares: jspb.Message.getFieldWithDefault(msg, 3, 0),
    outstandingmarketval: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    raisecount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fallcount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    equalcount: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.Qot_Common.PlateBasicQotExData}
 */
proto.Qot_Common.PlateBasicQotExData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.PlateBasicQotExData;
  return proto.Qot_Common.PlateBasicQotExData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.PlateBasicQotExData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.PlateBasicQotExData}
 */
proto.Qot_Common.PlateBasicQotExData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIssuedshares(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setIssuedmarketval(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOutstandingshares(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutstandingmarketval(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRaisecount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFallcount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEqualcount(value);
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
proto.Qot_Common.PlateBasicQotExData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.PlateBasicQotExData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.PlateBasicQotExData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PlateBasicQotExData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuedshares();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIssuedmarketval();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getOutstandingshares();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getOutstandingmarketval();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getRaisecount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getFallcount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getEqualcount();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional int64 issuedShares = 1;
 * @return {number}
 */
proto.Qot_Common.PlateBasicQotExData.prototype.getIssuedshares = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateBasicQotExData} returns this
 */
proto.Qot_Common.PlateBasicQotExData.prototype.setIssuedshares = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double issuedMarketVal = 2;
 * @return {number}
 */
proto.Qot_Common.PlateBasicQotExData.prototype.getIssuedmarketval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateBasicQotExData} returns this
 */
proto.Qot_Common.PlateBasicQotExData.prototype.setIssuedmarketval = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int64 outstandingShares = 3;
 * @return {number}
 */
proto.Qot_Common.PlateBasicQotExData.prototype.getOutstandingshares = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateBasicQotExData} returns this
 */
proto.Qot_Common.PlateBasicQotExData.prototype.setOutstandingshares = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double outstandingMarketVal = 4;
 * @return {number}
 */
proto.Qot_Common.PlateBasicQotExData.prototype.getOutstandingmarketval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateBasicQotExData} returns this
 */
proto.Qot_Common.PlateBasicQotExData.prototype.setOutstandingmarketval = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 raiseCount = 5;
 * @return {number}
 */
proto.Qot_Common.PlateBasicQotExData.prototype.getRaisecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateBasicQotExData} returns this
 */
proto.Qot_Common.PlateBasicQotExData.prototype.setRaisecount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 fallCount = 6;
 * @return {number}
 */
proto.Qot_Common.PlateBasicQotExData.prototype.getFallcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateBasicQotExData} returns this
 */
proto.Qot_Common.PlateBasicQotExData.prototype.setFallcount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 equalCount = 7;
 * @return {number}
 */
proto.Qot_Common.PlateBasicQotExData.prototype.getEqualcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateBasicQotExData} returns this
 */
proto.Qot_Common.PlateBasicQotExData.prototype.setEqualcount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





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
proto.Qot_Common.BasicQot.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.BasicQot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.BasicQot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.BasicQot.toObject = function(includeInstance, msg) {
  var f, obj = {
    security: (f = msg.getSecurity()) && proto.Qot_Common.Security.toObject(includeInstance, f),
    issuspended: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    listtime: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pricespread: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    updatetime: jspb.Message.getFieldWithDefault(msg, 5, ""),
    highprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    openprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    lowprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    curprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    lastcloseprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    volume: jspb.Message.getFieldWithDefault(msg, 11, 0),
    turnover: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    turnoverrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    amplitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    listtimestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    updatetimestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
    premarket: (f = msg.getPremarket()) && proto.Qot_Common.PreAfterMarketData.toObject(includeInstance, f),
    aftermarket: (f = msg.getAftermarket()) && proto.Qot_Common.PreAfterMarketData.toObject(includeInstance, f),
    secstatus: jspb.Message.getFieldWithDefault(msg, 20, 0),
    indexexdata: (f = msg.getIndexexdata()) && proto.Qot_Common.IndexBasicQotExData.toObject(includeInstance, f),
    plateexdata: (f = msg.getPlateexdata()) && proto.Qot_Common.PlateBasicQotExData.toObject(includeInstance, f)
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
 * @return {!proto.Qot_Common.BasicQot}
 */
proto.Qot_Common.BasicQot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.BasicQot;
  return proto.Qot_Common.BasicQot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.BasicQot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.BasicQot}
 */
proto.Qot_Common.BasicQot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.Security;
      reader.readMessage(value,proto.Qot_Common.Security.deserializeBinaryFromReader);
      msg.setSecurity(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssuspended(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setListtime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPricespread(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatetime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHighprice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpenprice(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowprice(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCurprice(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastcloseprice(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTurnover(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTurnoverrate(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmplitude(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setListtimestamp(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUpdatetimestamp(value);
      break;
    case 18:
      var value = new proto.Qot_Common.PreAfterMarketData;
      reader.readMessage(value,proto.Qot_Common.PreAfterMarketData.deserializeBinaryFromReader);
      msg.setPremarket(value);
      break;
    case 19:
      var value = new proto.Qot_Common.PreAfterMarketData;
      reader.readMessage(value,proto.Qot_Common.PreAfterMarketData.deserializeBinaryFromReader);
      msg.setAftermarket(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSecstatus(value);
      break;
    case 21:
      var value = new proto.Qot_Common.IndexBasicQotExData;
      reader.readMessage(value,proto.Qot_Common.IndexBasicQotExData.deserializeBinaryFromReader);
      msg.setIndexexdata(value);
      break;
    case 22:
      var value = new proto.Qot_Common.PlateBasicQotExData;
      reader.readMessage(value,proto.Qot_Common.PlateBasicQotExData.deserializeBinaryFromReader);
      msg.setPlateexdata(value);
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
proto.Qot_Common.BasicQot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.BasicQot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.BasicQot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.BasicQot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecurity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Qot_Common.Security.serializeBinaryToWriter
    );
  }
  f = message.getIssuspended();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getListtime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPricespread();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getUpdatetime();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getHighprice();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getOpenprice();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getLowprice();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getCurprice();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getLastcloseprice();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getTurnover();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getTurnoverrate();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getAmplitude();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getListtimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = message.getUpdatetimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      17,
      f
    );
  }
  f = message.getPremarket();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.Qot_Common.PreAfterMarketData.serializeBinaryToWriter
    );
  }
  f = message.getAftermarket();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.Qot_Common.PreAfterMarketData.serializeBinaryToWriter
    );
  }
  f = message.getSecstatus();
  if (f !== 0) {
    writer.writeInt32(
      20,
      f
    );
  }
  f = message.getIndexexdata();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.Qot_Common.IndexBasicQotExData.serializeBinaryToWriter
    );
  }
  f = message.getPlateexdata();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.Qot_Common.PlateBasicQotExData.serializeBinaryToWriter
    );
  }
};


/**
 * optional Security security = 1;
 * @return {?proto.Qot_Common.Security}
 */
proto.Qot_Common.BasicQot.prototype.getSecurity = function() {
  return /** @type{?proto.Qot_Common.Security} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.Security, 1));
};


/**
 * @param {?proto.Qot_Common.Security|undefined} value
 * @return {!proto.Qot_Common.BasicQot} returns this
*/
proto.Qot_Common.BasicQot.prototype.setSecurity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.clearSecurity = function() {
  return this.setSecurity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.BasicQot.prototype.hasSecurity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool isSuspended = 2;
 * @return {boolean}
 */
proto.Qot_Common.BasicQot.prototype.getIssuspended = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setIssuspended = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string listTime = 3;
 * @return {string}
 */
proto.Qot_Common.BasicQot.prototype.getListtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setListtime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double priceSpread = 4;
 * @return {number}
 */
proto.Qot_Common.BasicQot.prototype.getPricespread = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setPricespread = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string updateTime = 5;
 * @return {string}
 */
proto.Qot_Common.BasicQot.prototype.getUpdatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setUpdatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double highPrice = 6;
 * @return {number}
 */
proto.Qot_Common.BasicQot.prototype.getHighprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setHighprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double openPrice = 7;
 * @return {number}
 */
proto.Qot_Common.BasicQot.prototype.getOpenprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setOpenprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double lowPrice = 8;
 * @return {number}
 */
proto.Qot_Common.BasicQot.prototype.getLowprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setLowprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double curPrice = 9;
 * @return {number}
 */
proto.Qot_Common.BasicQot.prototype.getCurprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setCurprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double lastClosePrice = 10;
 * @return {number}
 */
proto.Qot_Common.BasicQot.prototype.getLastcloseprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setLastcloseprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional int64 volume = 11;
 * @return {number}
 */
proto.Qot_Common.BasicQot.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional double turnover = 12;
 * @return {number}
 */
proto.Qot_Common.BasicQot.prototype.getTurnover = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setTurnover = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional double turnoverRate = 13;
 * @return {number}
 */
proto.Qot_Common.BasicQot.prototype.getTurnoverrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setTurnoverrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double amplitude = 14;
 * @return {number}
 */
proto.Qot_Common.BasicQot.prototype.getAmplitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setAmplitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional double listTimestamp = 16;
 * @return {number}
 */
proto.Qot_Common.BasicQot.prototype.getListtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setListtimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional double updateTimestamp = 17;
 * @return {number}
 */
proto.Qot_Common.BasicQot.prototype.getUpdatetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setUpdatetimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional PreAfterMarketData preMarket = 18;
 * @return {?proto.Qot_Common.PreAfterMarketData}
 */
proto.Qot_Common.BasicQot.prototype.getPremarket = function() {
  return /** @type{?proto.Qot_Common.PreAfterMarketData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.PreAfterMarketData, 18));
};


/**
 * @param {?proto.Qot_Common.PreAfterMarketData|undefined} value
 * @return {!proto.Qot_Common.BasicQot} returns this
*/
proto.Qot_Common.BasicQot.prototype.setPremarket = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.clearPremarket = function() {
  return this.setPremarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.BasicQot.prototype.hasPremarket = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional PreAfterMarketData afterMarket = 19;
 * @return {?proto.Qot_Common.PreAfterMarketData}
 */
proto.Qot_Common.BasicQot.prototype.getAftermarket = function() {
  return /** @type{?proto.Qot_Common.PreAfterMarketData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.PreAfterMarketData, 19));
};


/**
 * @param {?proto.Qot_Common.PreAfterMarketData|undefined} value
 * @return {!proto.Qot_Common.BasicQot} returns this
*/
proto.Qot_Common.BasicQot.prototype.setAftermarket = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.clearAftermarket = function() {
  return this.setAftermarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.BasicQot.prototype.hasAftermarket = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional int32 secStatus = 20;
 * @return {number}
 */
proto.Qot_Common.BasicQot.prototype.getSecstatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.setSecstatus = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional IndexBasicQotExData IndexExData = 21;
 * @return {?proto.Qot_Common.IndexBasicQotExData}
 */
proto.Qot_Common.BasicQot.prototype.getIndexexdata = function() {
  return /** @type{?proto.Qot_Common.IndexBasicQotExData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.IndexBasicQotExData, 21));
};


/**
 * @param {?proto.Qot_Common.IndexBasicQotExData|undefined} value
 * @return {!proto.Qot_Common.BasicQot} returns this
*/
proto.Qot_Common.BasicQot.prototype.setIndexexdata = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.clearIndexexdata = function() {
  return this.setIndexexdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.BasicQot.prototype.hasIndexexdata = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional PlateBasicQotExData PlateExData = 22;
 * @return {?proto.Qot_Common.PlateBasicQotExData}
 */
proto.Qot_Common.BasicQot.prototype.getPlateexdata = function() {
  return /** @type{?proto.Qot_Common.PlateBasicQotExData} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.PlateBasicQotExData, 22));
};


/**
 * @param {?proto.Qot_Common.PlateBasicQotExData|undefined} value
 * @return {!proto.Qot_Common.BasicQot} returns this
*/
proto.Qot_Common.BasicQot.prototype.setPlateexdata = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.BasicQot} returns this
 */
proto.Qot_Common.BasicQot.prototype.clearPlateexdata = function() {
  return this.setPlateexdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.BasicQot.prototype.hasPlateexdata = function() {
  return jspb.Message.getField(this, 22) != null;
};





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
proto.Qot_Common.HL52WeeksPrice.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.HL52WeeksPrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.HL52WeeksPrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.HL52WeeksPrice.toObject = function(includeInstance, msg) {
  var f, obj = {
    highest52weeksprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    lowest52weeksprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.Qot_Common.HL52WeeksPrice}
 */
proto.Qot_Common.HL52WeeksPrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.HL52WeeksPrice;
  return proto.Qot_Common.HL52WeeksPrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.HL52WeeksPrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.HL52WeeksPrice}
 */
proto.Qot_Common.HL52WeeksPrice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHighest52weeksprice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowest52weeksprice(value);
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
proto.Qot_Common.HL52WeeksPrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.HL52WeeksPrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.HL52WeeksPrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.HL52WeeksPrice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHighest52weeksprice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLowest52weeksprice();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double highest52WeeksPrice = 1;
 * @return {number}
 */
proto.Qot_Common.HL52WeeksPrice.prototype.getHighest52weeksprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.HL52WeeksPrice} returns this
 */
proto.Qot_Common.HL52WeeksPrice.prototype.setHighest52weeksprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double lowest52WeeksPrice = 2;
 * @return {number}
 */
proto.Qot_Common.HL52WeeksPrice.prototype.getLowest52weeksprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.HL52WeeksPrice} returns this
 */
proto.Qot_Common.HL52WeeksPrice.prototype.setLowest52weeksprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





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
proto.Qot_Common.LastClosePrice.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.LastClosePrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.LastClosePrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.LastClosePrice.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lastcloseprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.Qot_Common.LastClosePrice}
 */
proto.Qot_Common.LastClosePrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.LastClosePrice;
  return proto.Qot_Common.LastClosePrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.LastClosePrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.LastClosePrice}
 */
proto.Qot_Common.LastClosePrice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastcloseprice(value);
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
proto.Qot_Common.LastClosePrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.LastClosePrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.LastClosePrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.LastClosePrice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLastcloseprice();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional int32 type = 1;
 * @return {number}
 */
proto.Qot_Common.LastClosePrice.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.LastClosePrice} returns this
 */
proto.Qot_Common.LastClosePrice.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double lastClosePrice = 2;
 * @return {number}
 */
proto.Qot_Common.LastClosePrice.prototype.getLastcloseprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.LastClosePrice} returns this
 */
proto.Qot_Common.LastClosePrice.prototype.setLastcloseprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





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
proto.Qot_Common.SecurityDefinition.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.SecurityDefinition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.SecurityDefinition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.SecurityDefinition.toObject = function(includeInstance, msg) {
  var f, obj = {
    security: (f = msg.getSecurity()) && proto.Qot_Common.Security.toObject(includeInstance, f),
    namegb: jspb.Message.getFieldWithDefault(msg, 2, ""),
    namegccs: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nameus: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    producttype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    currency: jspb.Message.getFieldWithDefault(msg, 7, ""),
    lotsize: jspb.Message.getFieldWithDefault(msg, 8, 0),
    lastcloseprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    enableshortsell: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    enablecsa: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    enableccass: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    enabledummy: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    stampduty: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    listtimestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    delistingtimestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0)
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
 * @return {!proto.Qot_Common.SecurityDefinition}
 */
proto.Qot_Common.SecurityDefinition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.SecurityDefinition;
  return proto.Qot_Common.SecurityDefinition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.SecurityDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.SecurityDefinition}
 */
proto.Qot_Common.SecurityDefinition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.Security;
      reader.readMessage(value,proto.Qot_Common.Security.deserializeBinaryFromReader);
      msg.setSecurity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegb(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegccs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProducttype(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLotsize(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastcloseprice(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableshortsell(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnablecsa(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableccass(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabledummy(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStampduty(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setListtimestamp(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDelistingtimestamp(value);
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
proto.Qot_Common.SecurityDefinition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.SecurityDefinition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.SecurityDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.SecurityDefinition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecurity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Qot_Common.Security.serializeBinaryToWriter
    );
  }
  f = message.getNamegb();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNamegccs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNameus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getProducttype();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLotsize();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getLastcloseprice();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getEnableshortsell();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getEnablecsa();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getEnableccass();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getEnabledummy();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getStampduty();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getListtimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getDelistingtimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      16,
      f
    );
  }
};


/**
 * optional Security security = 1;
 * @return {?proto.Qot_Common.Security}
 */
proto.Qot_Common.SecurityDefinition.prototype.getSecurity = function() {
  return /** @type{?proto.Qot_Common.Security} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.Security, 1));
};


/**
 * @param {?proto.Qot_Common.Security|undefined} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
*/
proto.Qot_Common.SecurityDefinition.prototype.setSecurity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.clearSecurity = function() {
  return this.setSecurity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.SecurityDefinition.prototype.hasSecurity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string nameGB = 2;
 * @return {string}
 */
proto.Qot_Common.SecurityDefinition.prototype.getNamegb = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setNamegb = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nameGCCS = 3;
 * @return {string}
 */
proto.Qot_Common.SecurityDefinition.prototype.getNamegccs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setNamegccs = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nameUS = 4;
 * @return {string}
 */
proto.Qot_Common.SecurityDefinition.prototype.getNameus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setNameus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 type = 5;
 * @return {number}
 */
proto.Qot_Common.SecurityDefinition.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 productType = 6;
 * @return {number}
 */
proto.Qot_Common.SecurityDefinition.prototype.getProducttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setProducttype = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string currency = 7;
 * @return {string}
 */
proto.Qot_Common.SecurityDefinition.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 lotSize = 8;
 * @return {number}
 */
proto.Qot_Common.SecurityDefinition.prototype.getLotsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setLotsize = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional double lastClosePrice = 9;
 * @return {number}
 */
proto.Qot_Common.SecurityDefinition.prototype.getLastcloseprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setLastcloseprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional bool enableShortSell = 10;
 * @return {boolean}
 */
proto.Qot_Common.SecurityDefinition.prototype.getEnableshortsell = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setEnableshortsell = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool enableCSA = 11;
 * @return {boolean}
 */
proto.Qot_Common.SecurityDefinition.prototype.getEnablecsa = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setEnablecsa = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool enableCCASS = 12;
 * @return {boolean}
 */
proto.Qot_Common.SecurityDefinition.prototype.getEnableccass = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setEnableccass = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool enableDummy = 13;
 * @return {boolean}
 */
proto.Qot_Common.SecurityDefinition.prototype.getEnabledummy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setEnabledummy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool stampDuty = 14;
 * @return {boolean}
 */
proto.Qot_Common.SecurityDefinition.prototype.getStampduty = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setStampduty = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional double listTimestamp = 15;
 * @return {number}
 */
proto.Qot_Common.SecurityDefinition.prototype.getListtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setListtimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional double deListingTimestamp = 16;
 * @return {number}
 */
proto.Qot_Common.SecurityDefinition.prototype.getDelistingtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.SecurityDefinition} returns this
 */
proto.Qot_Common.SecurityDefinition.prototype.setDelistingtimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Qot_Common.PlateSet.repeatedFields_ = [2];



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
proto.Qot_Common.PlateSet.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.PlateSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.PlateSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PlateSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    plateset: (f = msg.getPlateset()) && proto.Qot_Common.PlateInfo.toObject(includeInstance, f),
    platelistList: jspb.Message.toObjectList(msg.getPlatelistList(),
    proto.Qot_Common.PlateInfo.toObject, includeInstance)
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
 * @return {!proto.Qot_Common.PlateSet}
 */
proto.Qot_Common.PlateSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.PlateSet;
  return proto.Qot_Common.PlateSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.PlateSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.PlateSet}
 */
proto.Qot_Common.PlateSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.PlateInfo;
      reader.readMessage(value,proto.Qot_Common.PlateInfo.deserializeBinaryFromReader);
      msg.setPlateset(value);
      break;
    case 2:
      var value = new proto.Qot_Common.PlateInfo;
      reader.readMessage(value,proto.Qot_Common.PlateInfo.deserializeBinaryFromReader);
      msg.addPlatelist(value);
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
proto.Qot_Common.PlateSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.PlateSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.PlateSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PlateSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlateset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Qot_Common.PlateInfo.serializeBinaryToWriter
    );
  }
  f = message.getPlatelistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Qot_Common.PlateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlateInfo plateSet = 1;
 * @return {?proto.Qot_Common.PlateInfo}
 */
proto.Qot_Common.PlateSet.prototype.getPlateset = function() {
  return /** @type{?proto.Qot_Common.PlateInfo} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.PlateInfo, 1));
};


/**
 * @param {?proto.Qot_Common.PlateInfo|undefined} value
 * @return {!proto.Qot_Common.PlateSet} returns this
*/
proto.Qot_Common.PlateSet.prototype.setPlateset = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.PlateSet} returns this
 */
proto.Qot_Common.PlateSet.prototype.clearPlateset = function() {
  return this.setPlateset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.PlateSet.prototype.hasPlateset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PlateInfo plateList = 2;
 * @return {!Array<!proto.Qot_Common.PlateInfo>}
 */
proto.Qot_Common.PlateSet.prototype.getPlatelistList = function() {
  return /** @type{!Array<!proto.Qot_Common.PlateInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Qot_Common.PlateInfo, 2));
};


/**
 * @param {!Array<!proto.Qot_Common.PlateInfo>} value
 * @return {!proto.Qot_Common.PlateSet} returns this
*/
proto.Qot_Common.PlateSet.prototype.setPlatelistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Qot_Common.PlateInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.PlateInfo}
 */
proto.Qot_Common.PlateSet.prototype.addPlatelist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Qot_Common.PlateInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.PlateSet} returns this
 */
proto.Qot_Common.PlateSet.prototype.clearPlatelistList = function() {
  return this.setPlatelistList([]);
};





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
proto.Qot_Common.PlateInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.PlateInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.PlateInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PlateInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    security: (f = msg.getSecurity()) && proto.Qot_Common.Security.toObject(includeInstance, f),
    namegb: jspb.Message.getFieldWithDefault(msg, 2, ""),
    namegccs: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nameus: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    changerate: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    risefallstat: (f = msg.getRisefallstat()) && proto.Qot_Common.RiseFallStatistics.toObject(includeInstance, f),
    ledrisesecurity: (f = msg.getLedrisesecurity()) && proto.Qot_Common.LedRiseSecurityBasic.toObject(includeInstance, f)
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
 * @return {!proto.Qot_Common.PlateInfo}
 */
proto.Qot_Common.PlateInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.PlateInfo;
  return proto.Qot_Common.PlateInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.PlateInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.PlateInfo}
 */
proto.Qot_Common.PlateInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.Security;
      reader.readMessage(value,proto.Qot_Common.Security.deserializeBinaryFromReader);
      msg.setSecurity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegb(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegccs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangerate(value);
      break;
    case 9:
      var value = new proto.Qot_Common.RiseFallStatistics;
      reader.readMessage(value,proto.Qot_Common.RiseFallStatistics.deserializeBinaryFromReader);
      msg.setRisefallstat(value);
      break;
    case 10:
      var value = new proto.Qot_Common.LedRiseSecurityBasic;
      reader.readMessage(value,proto.Qot_Common.LedRiseSecurityBasic.deserializeBinaryFromReader);
      msg.setLedrisesecurity(value);
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
proto.Qot_Common.PlateInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.PlateInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.PlateInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.PlateInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecurity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Qot_Common.Security.serializeBinaryToWriter
    );
  }
  f = message.getNamegb();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNamegccs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNameus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getChangerate();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getRisefallstat();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.Qot_Common.RiseFallStatistics.serializeBinaryToWriter
    );
  }
  f = message.getLedrisesecurity();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.Qot_Common.LedRiseSecurityBasic.serializeBinaryToWriter
    );
  }
};


/**
 * optional Security security = 1;
 * @return {?proto.Qot_Common.Security}
 */
proto.Qot_Common.PlateInfo.prototype.getSecurity = function() {
  return /** @type{?proto.Qot_Common.Security} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.Security, 1));
};


/**
 * @param {?proto.Qot_Common.Security|undefined} value
 * @return {!proto.Qot_Common.PlateInfo} returns this
*/
proto.Qot_Common.PlateInfo.prototype.setSecurity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.PlateInfo} returns this
 */
proto.Qot_Common.PlateInfo.prototype.clearSecurity = function() {
  return this.setSecurity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.PlateInfo.prototype.hasSecurity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string nameGB = 2;
 * @return {string}
 */
proto.Qot_Common.PlateInfo.prototype.getNamegb = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.PlateInfo} returns this
 */
proto.Qot_Common.PlateInfo.prototype.setNamegb = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nameGCCS = 3;
 * @return {string}
 */
proto.Qot_Common.PlateInfo.prototype.getNamegccs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.PlateInfo} returns this
 */
proto.Qot_Common.PlateInfo.prototype.setNamegccs = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nameUS = 4;
 * @return {string}
 */
proto.Qot_Common.PlateInfo.prototype.getNameus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.PlateInfo} returns this
 */
proto.Qot_Common.PlateInfo.prototype.setNameus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 type = 5;
 * @return {number}
 */
proto.Qot_Common.PlateInfo.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateInfo} returns this
 */
proto.Qot_Common.PlateInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional double changeRate = 6;
 * @return {number}
 */
proto.Qot_Common.PlateInfo.prototype.getChangerate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.PlateInfo} returns this
 */
proto.Qot_Common.PlateInfo.prototype.setChangerate = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional RiseFallStatistics riseFallStat = 9;
 * @return {?proto.Qot_Common.RiseFallStatistics}
 */
proto.Qot_Common.PlateInfo.prototype.getRisefallstat = function() {
  return /** @type{?proto.Qot_Common.RiseFallStatistics} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.RiseFallStatistics, 9));
};


/**
 * @param {?proto.Qot_Common.RiseFallStatistics|undefined} value
 * @return {!proto.Qot_Common.PlateInfo} returns this
*/
proto.Qot_Common.PlateInfo.prototype.setRisefallstat = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.PlateInfo} returns this
 */
proto.Qot_Common.PlateInfo.prototype.clearRisefallstat = function() {
  return this.setRisefallstat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.PlateInfo.prototype.hasRisefallstat = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional LedRiseSecurityBasic ledRiseSecurity = 10;
 * @return {?proto.Qot_Common.LedRiseSecurityBasic}
 */
proto.Qot_Common.PlateInfo.prototype.getLedrisesecurity = function() {
  return /** @type{?proto.Qot_Common.LedRiseSecurityBasic} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.LedRiseSecurityBasic, 10));
};


/**
 * @param {?proto.Qot_Common.LedRiseSecurityBasic|undefined} value
 * @return {!proto.Qot_Common.PlateInfo} returns this
*/
proto.Qot_Common.PlateInfo.prototype.setLedrisesecurity = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.PlateInfo} returns this
 */
proto.Qot_Common.PlateInfo.prototype.clearLedrisesecurity = function() {
  return this.setLedrisesecurity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.PlateInfo.prototype.hasLedrisesecurity = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Qot_Common.SecurityOwnerPlate.repeatedFields_ = [2];



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
proto.Qot_Common.SecurityOwnerPlate.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.SecurityOwnerPlate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.SecurityOwnerPlate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.SecurityOwnerPlate.toObject = function(includeInstance, msg) {
  var f, obj = {
    security: (f = msg.getSecurity()) && proto.Qot_Common.Security.toObject(includeInstance, f),
    plateinfolistList: jspb.Message.toObjectList(msg.getPlateinfolistList(),
    proto.Qot_Common.PlateInfo.toObject, includeInstance)
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
 * @return {!proto.Qot_Common.SecurityOwnerPlate}
 */
proto.Qot_Common.SecurityOwnerPlate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.SecurityOwnerPlate;
  return proto.Qot_Common.SecurityOwnerPlate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.SecurityOwnerPlate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.SecurityOwnerPlate}
 */
proto.Qot_Common.SecurityOwnerPlate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.Security;
      reader.readMessage(value,proto.Qot_Common.Security.deserializeBinaryFromReader);
      msg.setSecurity(value);
      break;
    case 2:
      var value = new proto.Qot_Common.PlateInfo;
      reader.readMessage(value,proto.Qot_Common.PlateInfo.deserializeBinaryFromReader);
      msg.addPlateinfolist(value);
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
proto.Qot_Common.SecurityOwnerPlate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.SecurityOwnerPlate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.SecurityOwnerPlate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.SecurityOwnerPlate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecurity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Qot_Common.Security.serializeBinaryToWriter
    );
  }
  f = message.getPlateinfolistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Qot_Common.PlateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Security security = 1;
 * @return {?proto.Qot_Common.Security}
 */
proto.Qot_Common.SecurityOwnerPlate.prototype.getSecurity = function() {
  return /** @type{?proto.Qot_Common.Security} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.Security, 1));
};


/**
 * @param {?proto.Qot_Common.Security|undefined} value
 * @return {!proto.Qot_Common.SecurityOwnerPlate} returns this
*/
proto.Qot_Common.SecurityOwnerPlate.prototype.setSecurity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.SecurityOwnerPlate} returns this
 */
proto.Qot_Common.SecurityOwnerPlate.prototype.clearSecurity = function() {
  return this.setSecurity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.SecurityOwnerPlate.prototype.hasSecurity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PlateInfo plateInfoList = 2;
 * @return {!Array<!proto.Qot_Common.PlateInfo>}
 */
proto.Qot_Common.SecurityOwnerPlate.prototype.getPlateinfolistList = function() {
  return /** @type{!Array<!proto.Qot_Common.PlateInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Qot_Common.PlateInfo, 2));
};


/**
 * @param {!Array<!proto.Qot_Common.PlateInfo>} value
 * @return {!proto.Qot_Common.SecurityOwnerPlate} returns this
*/
proto.Qot_Common.SecurityOwnerPlate.prototype.setPlateinfolistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Qot_Common.PlateInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.PlateInfo}
 */
proto.Qot_Common.SecurityOwnerPlate.prototype.addPlateinfolist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Qot_Common.PlateInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.SecurityOwnerPlate} returns this
 */
proto.Qot_Common.SecurityOwnerPlate.prototype.clearPlateinfolistList = function() {
  return this.setPlateinfolistList([]);
};





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
proto.Qot_Common.RiseFallStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.RiseFallStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.RiseFallStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.RiseFallStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    risecount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fallcount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    equalcount: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.Qot_Common.RiseFallStatistics}
 */
proto.Qot_Common.RiseFallStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.RiseFallStatistics;
  return proto.Qot_Common.RiseFallStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.RiseFallStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.RiseFallStatistics}
 */
proto.Qot_Common.RiseFallStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRisecount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFallcount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEqualcount(value);
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
proto.Qot_Common.RiseFallStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.RiseFallStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.RiseFallStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.RiseFallStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRisecount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFallcount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEqualcount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 riseCount = 1;
 * @return {number}
 */
proto.Qot_Common.RiseFallStatistics.prototype.getRisecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.RiseFallStatistics} returns this
 */
proto.Qot_Common.RiseFallStatistics.prototype.setRisecount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 fallCount = 2;
 * @return {number}
 */
proto.Qot_Common.RiseFallStatistics.prototype.getFallcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.RiseFallStatistics} returns this
 */
proto.Qot_Common.RiseFallStatistics.prototype.setFallcount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 equalCount = 3;
 * @return {number}
 */
proto.Qot_Common.RiseFallStatistics.prototype.getEqualcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.RiseFallStatistics} returns this
 */
proto.Qot_Common.RiseFallStatistics.prototype.setEqualcount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





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
proto.Qot_Common.LedRiseSecurityBasic.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.LedRiseSecurityBasic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.LedRiseSecurityBasic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.LedRiseSecurityBasic.toObject = function(includeInstance, msg) {
  var f, obj = {
    security: (f = msg.getSecurity()) && proto.Qot_Common.Security.toObject(includeInstance, f),
    namegb: jspb.Message.getFieldWithDefault(msg, 2, ""),
    namegccs: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nameus: jspb.Message.getFieldWithDefault(msg, 4, ""),
    curprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    changeval: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    changerate: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
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
 * @return {!proto.Qot_Common.LedRiseSecurityBasic}
 */
proto.Qot_Common.LedRiseSecurityBasic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.LedRiseSecurityBasic;
  return proto.Qot_Common.LedRiseSecurityBasic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.LedRiseSecurityBasic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.LedRiseSecurityBasic}
 */
proto.Qot_Common.LedRiseSecurityBasic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.Security;
      reader.readMessage(value,proto.Qot_Common.Security.deserializeBinaryFromReader);
      msg.setSecurity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegb(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegccs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCurprice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangeval(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangerate(value);
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
proto.Qot_Common.LedRiseSecurityBasic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.LedRiseSecurityBasic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.LedRiseSecurityBasic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.LedRiseSecurityBasic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecurity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Qot_Common.Security.serializeBinaryToWriter
    );
  }
  f = message.getNamegb();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNamegccs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNameus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCurprice();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getChangeval();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getChangerate();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * optional Security security = 1;
 * @return {?proto.Qot_Common.Security}
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.getSecurity = function() {
  return /** @type{?proto.Qot_Common.Security} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.Security, 1));
};


/**
 * @param {?proto.Qot_Common.Security|undefined} value
 * @return {!proto.Qot_Common.LedRiseSecurityBasic} returns this
*/
proto.Qot_Common.LedRiseSecurityBasic.prototype.setSecurity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.LedRiseSecurityBasic} returns this
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.clearSecurity = function() {
  return this.setSecurity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.hasSecurity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string nameGB = 2;
 * @return {string}
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.getNamegb = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.LedRiseSecurityBasic} returns this
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.setNamegb = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nameGCCS = 3;
 * @return {string}
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.getNamegccs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.LedRiseSecurityBasic} returns this
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.setNamegccs = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nameUS = 4;
 * @return {string}
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.getNameus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.LedRiseSecurityBasic} returns this
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.setNameus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double curPrice = 5;
 * @return {number}
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.getCurprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.LedRiseSecurityBasic} returns this
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.setCurprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double changeVal = 6;
 * @return {number}
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.getChangeval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.LedRiseSecurityBasic} returns this
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.setChangeval = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double changeRate = 7;
 * @return {number}
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.getChangerate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.LedRiseSecurityBasic} returns this
 */
proto.Qot_Common.LedRiseSecurityBasic.prototype.setChangerate = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Qot_Common.MarketStatistics.repeatedFields_ = [2,3];



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
proto.Qot_Common.MarketStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.MarketStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.MarketStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.MarketStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, 0),
    snapshotlistList: jspb.Message.toObjectList(msg.getSnapshotlistList(),
    proto.Qot_Common.Snapshot.toObject, includeInstance),
    platelistList: jspb.Message.toObjectList(msg.getPlatelistList(),
    proto.Qot_Common.PlateInfo.toObject, includeInstance)
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
 * @return {!proto.Qot_Common.MarketStatistics}
 */
proto.Qot_Common.MarketStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.MarketStatistics;
  return proto.Qot_Common.MarketStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.MarketStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.MarketStatistics}
 */
proto.Qot_Common.MarketStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMarket(value);
      break;
    case 2:
      var value = new proto.Qot_Common.Snapshot;
      reader.readMessage(value,proto.Qot_Common.Snapshot.deserializeBinaryFromReader);
      msg.addSnapshotlist(value);
      break;
    case 3:
      var value = new proto.Qot_Common.PlateInfo;
      reader.readMessage(value,proto.Qot_Common.PlateInfo.deserializeBinaryFromReader);
      msg.addPlatelist(value);
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
proto.Qot_Common.MarketStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.MarketStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.MarketStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.MarketStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSnapshotlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Qot_Common.Snapshot.serializeBinaryToWriter
    );
  }
  f = message.getPlatelistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.Qot_Common.PlateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 market = 1;
 * @return {number}
 */
proto.Qot_Common.MarketStatistics.prototype.getMarket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.MarketStatistics} returns this
 */
proto.Qot_Common.MarketStatistics.prototype.setMarket = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Snapshot snapshotList = 2;
 * @return {!Array<!proto.Qot_Common.Snapshot>}
 */
proto.Qot_Common.MarketStatistics.prototype.getSnapshotlistList = function() {
  return /** @type{!Array<!proto.Qot_Common.Snapshot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Qot_Common.Snapshot, 2));
};


/**
 * @param {!Array<!proto.Qot_Common.Snapshot>} value
 * @return {!proto.Qot_Common.MarketStatistics} returns this
*/
proto.Qot_Common.MarketStatistics.prototype.setSnapshotlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Qot_Common.Snapshot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.Snapshot}
 */
proto.Qot_Common.MarketStatistics.prototype.addSnapshotlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Qot_Common.Snapshot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.MarketStatistics} returns this
 */
proto.Qot_Common.MarketStatistics.prototype.clearSnapshotlistList = function() {
  return this.setSnapshotlistList([]);
};


/**
 * repeated PlateInfo plateList = 3;
 * @return {!Array<!proto.Qot_Common.PlateInfo>}
 */
proto.Qot_Common.MarketStatistics.prototype.getPlatelistList = function() {
  return /** @type{!Array<!proto.Qot_Common.PlateInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Qot_Common.PlateInfo, 3));
};


/**
 * @param {!Array<!proto.Qot_Common.PlateInfo>} value
 * @return {!proto.Qot_Common.MarketStatistics} returns this
*/
proto.Qot_Common.MarketStatistics.prototype.setPlatelistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Qot_Common.PlateInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.PlateInfo}
 */
proto.Qot_Common.MarketStatistics.prototype.addPlatelist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Qot_Common.PlateInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.MarketStatistics} returns this
 */
proto.Qot_Common.MarketStatistics.prototype.clearPlatelistList = function() {
  return this.setPlatelistList([]);
};





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
proto.Qot_Common.OrderBookDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.OrderBookDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.OrderBookDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.OrderBookDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    volume: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.Qot_Common.OrderBookDetail}
 */
proto.Qot_Common.OrderBookDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.OrderBookDetail;
  return proto.Qot_Common.OrderBookDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.OrderBookDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.OrderBookDetail}
 */
proto.Qot_Common.OrderBookDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrderid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
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
proto.Qot_Common.OrderBookDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.OrderBookDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.OrderBookDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.OrderBookDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 orderID = 1;
 * @return {number}
 */
proto.Qot_Common.OrderBookDetail.prototype.getOrderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OrderBookDetail} returns this
 */
proto.Qot_Common.OrderBookDetail.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 volume = 2;
 * @return {number}
 */
proto.Qot_Common.OrderBookDetail.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OrderBookDetail} returns this
 */
proto.Qot_Common.OrderBookDetail.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Qot_Common.OrderBook.repeatedFields_ = [4];



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
proto.Qot_Common.OrderBook.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.OrderBook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.OrderBook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.OrderBook.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    volume: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ordercount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    detaillistList: jspb.Message.toObjectList(msg.getDetaillistList(),
    proto.Qot_Common.OrderBookDetail.toObject, includeInstance)
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
 * @return {!proto.Qot_Common.OrderBook}
 */
proto.Qot_Common.OrderBook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.OrderBook;
  return proto.Qot_Common.OrderBook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.OrderBook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.OrderBook}
 */
proto.Qot_Common.OrderBook.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrdercount(value);
      break;
    case 4:
      var value = new proto.Qot_Common.OrderBookDetail;
      reader.readMessage(value,proto.Qot_Common.OrderBookDetail.deserializeBinaryFromReader);
      msg.addDetaillist(value);
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
proto.Qot_Common.OrderBook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.OrderBook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.OrderBook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.OrderBook.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getOrdercount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getDetaillistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.Qot_Common.OrderBookDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional double price = 1;
 * @return {number}
 */
proto.Qot_Common.OrderBook.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OrderBook} returns this
 */
proto.Qot_Common.OrderBook.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional int64 volume = 2;
 * @return {number}
 */
proto.Qot_Common.OrderBook.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OrderBook} returns this
 */
proto.Qot_Common.OrderBook.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 orderCount = 3;
 * @return {number}
 */
proto.Qot_Common.OrderBook.prototype.getOrdercount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.OrderBook} returns this
 */
proto.Qot_Common.OrderBook.prototype.setOrdercount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated OrderBookDetail detailList = 4;
 * @return {!Array<!proto.Qot_Common.OrderBookDetail>}
 */
proto.Qot_Common.OrderBook.prototype.getDetaillistList = function() {
  return /** @type{!Array<!proto.Qot_Common.OrderBookDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Qot_Common.OrderBookDetail, 4));
};


/**
 * @param {!Array<!proto.Qot_Common.OrderBookDetail>} value
 * @return {!proto.Qot_Common.OrderBook} returns this
*/
proto.Qot_Common.OrderBook.prototype.setDetaillistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.Qot_Common.OrderBookDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.OrderBookDetail}
 */
proto.Qot_Common.OrderBook.prototype.addDetaillist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.Qot_Common.OrderBookDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.OrderBook} returns this
 */
proto.Qot_Common.OrderBook.prototype.clearDetaillistList = function() {
  return this.setDetaillistList([]);
};





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
proto.Qot_Common.Broker.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.Broker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.Broker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.Broker.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    namegb: jspb.Message.getFieldWithDefault(msg, 2, ""),
    namegccs: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nameus: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pos: jspb.Message.getFieldWithDefault(msg, 5, 0),
    orderid: jspb.Message.getFieldWithDefault(msg, 6, 0),
    volume: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.Qot_Common.Broker}
 */
proto.Qot_Common.Broker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.Broker;
  return proto.Qot_Common.Broker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.Broker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.Broker}
 */
proto.Qot_Common.Broker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegb(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegccs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPos(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrderid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
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
proto.Qot_Common.Broker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.Broker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.Broker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.Broker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNamegb();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNamegccs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNameus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPos();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getOrderid();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.Qot_Common.Broker.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Broker} returns this
 */
proto.Qot_Common.Broker.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nameGB = 2;
 * @return {string}
 */
proto.Qot_Common.Broker.prototype.getNamegb = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.Broker} returns this
 */
proto.Qot_Common.Broker.prototype.setNamegb = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nameGCCS = 3;
 * @return {string}
 */
proto.Qot_Common.Broker.prototype.getNamegccs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.Broker} returns this
 */
proto.Qot_Common.Broker.prototype.setNamegccs = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nameUS = 4;
 * @return {string}
 */
proto.Qot_Common.Broker.prototype.getNameus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.Broker} returns this
 */
proto.Qot_Common.Broker.prototype.setNameus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 pos = 5;
 * @return {number}
 */
proto.Qot_Common.Broker.prototype.getPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Broker} returns this
 */
proto.Qot_Common.Broker.prototype.setPos = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 orderID = 6;
 * @return {number}
 */
proto.Qot_Common.Broker.prototype.getOrderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Broker} returns this
 */
proto.Qot_Common.Broker.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 volume = 7;
 * @return {number}
 */
proto.Qot_Common.Broker.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Broker} returns this
 */
proto.Qot_Common.Broker.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





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
proto.Qot_Common.Ticker.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.Ticker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.Ticker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.Ticker.toObject = function(includeInstance, msg) {
  var f, obj = {
    seqno: jspb.Message.getFieldWithDefault(msg, 1, 0),
    time: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tickerid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dir: jspb.Message.getFieldWithDefault(msg, 4, 0),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    volume: jspb.Message.getFieldWithDefault(msg, 6, 0),
    turnover: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    type: jspb.Message.getFieldWithDefault(msg, 8, 0),
    timestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0)
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
 * @return {!proto.Qot_Common.Ticker}
 */
proto.Qot_Common.Ticker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.Ticker;
  return proto.Qot_Common.Ticker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.Ticker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.Ticker}
 */
proto.Qot_Common.Ticker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeqno(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTickerid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDir(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTurnover(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimestamp(value);
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
proto.Qot_Common.Ticker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.Ticker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.Ticker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.Ticker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeqno();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTime();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTickerid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getDir();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getTurnover();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
};


/**
 * optional int32 SeqNo = 1;
 * @return {number}
 */
proto.Qot_Common.Ticker.prototype.getSeqno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Ticker} returns this
 */
proto.Qot_Common.Ticker.prototype.setSeqno = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string time = 2;
 * @return {string}
 */
proto.Qot_Common.Ticker.prototype.getTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.Ticker} returns this
 */
proto.Qot_Common.Ticker.prototype.setTime = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 tickerID = 3;
 * @return {number}
 */
proto.Qot_Common.Ticker.prototype.getTickerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Ticker} returns this
 */
proto.Qot_Common.Ticker.prototype.setTickerid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 dir = 4;
 * @return {number}
 */
proto.Qot_Common.Ticker.prototype.getDir = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Ticker} returns this
 */
proto.Qot_Common.Ticker.prototype.setDir = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double price = 5;
 * @return {number}
 */
proto.Qot_Common.Ticker.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Ticker} returns this
 */
proto.Qot_Common.Ticker.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int64 volume = 6;
 * @return {number}
 */
proto.Qot_Common.Ticker.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Ticker} returns this
 */
proto.Qot_Common.Ticker.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double turnover = 7;
 * @return {number}
 */
proto.Qot_Common.Ticker.prototype.getTurnover = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Ticker} returns this
 */
proto.Qot_Common.Ticker.prototype.setTurnover = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int32 type = 8;
 * @return {number}
 */
proto.Qot_Common.Ticker.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Ticker} returns this
 */
proto.Qot_Common.Ticker.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional double timestamp = 9;
 * @return {number}
 */
proto.Qot_Common.Ticker.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.Ticker} returns this
 */
proto.Qot_Common.Ticker.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};





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
proto.Qot_Common.NominalPrice.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.NominalPrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.NominalPrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.NominalPrice.toObject = function(includeInstance, msg) {
  var f, obj = {
    security: (f = msg.getSecurity()) && proto.Qot_Common.Security.toObject(includeInstance, f),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.Qot_Common.NominalPrice}
 */
proto.Qot_Common.NominalPrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.NominalPrice;
  return proto.Qot_Common.NominalPrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.NominalPrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.NominalPrice}
 */
proto.Qot_Common.NominalPrice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.Security;
      reader.readMessage(value,proto.Qot_Common.Security.deserializeBinaryFromReader);
      msg.setSecurity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
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
proto.Qot_Common.NominalPrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.NominalPrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.NominalPrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.NominalPrice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecurity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Qot_Common.Security.serializeBinaryToWriter
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional Security security = 1;
 * @return {?proto.Qot_Common.Security}
 */
proto.Qot_Common.NominalPrice.prototype.getSecurity = function() {
  return /** @type{?proto.Qot_Common.Security} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.Security, 1));
};


/**
 * @param {?proto.Qot_Common.Security|undefined} value
 * @return {!proto.Qot_Common.NominalPrice} returns this
*/
proto.Qot_Common.NominalPrice.prototype.setSecurity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.NominalPrice} returns this
 */
proto.Qot_Common.NominalPrice.prototype.clearSecurity = function() {
  return this.setSecurity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.NominalPrice.prototype.hasSecurity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double price = 2;
 * @return {number}
 */
proto.Qot_Common.NominalPrice.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NominalPrice} returns this
 */
proto.Qot_Common.NominalPrice.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





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
proto.Qot_Common.TimeShare.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.TimeShare.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.TimeShare} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.TimeShare.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isblank: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    lastclose: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    avgprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    volume: jspb.Message.getFieldWithDefault(msg, 6, 0),
    turnover: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    timestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
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
 * @return {!proto.Qot_Common.TimeShare}
 */
proto.Qot_Common.TimeShare.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.TimeShare;
  return proto.Qot_Common.TimeShare.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.TimeShare} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.TimeShare}
 */
proto.Qot_Common.TimeShare.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTime(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsblank(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastclose(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvgprice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTurnover(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimestamp(value);
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
proto.Qot_Common.TimeShare.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.TimeShare.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.TimeShare} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.TimeShare.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsblank();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getLastclose();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getAvgprice();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getTurnover();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
};


/**
 * optional string time = 1;
 * @return {string}
 */
proto.Qot_Common.TimeShare.prototype.getTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.TimeShare} returns this
 */
proto.Qot_Common.TimeShare.prototype.setTime = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool isBlank = 2;
 * @return {boolean}
 */
proto.Qot_Common.TimeShare.prototype.getIsblank = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Qot_Common.TimeShare} returns this
 */
proto.Qot_Common.TimeShare.prototype.setIsblank = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional double price = 3;
 * @return {number}
 */
proto.Qot_Common.TimeShare.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.TimeShare} returns this
 */
proto.Qot_Common.TimeShare.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double lastClose = 4;
 * @return {number}
 */
proto.Qot_Common.TimeShare.prototype.getLastclose = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.TimeShare} returns this
 */
proto.Qot_Common.TimeShare.prototype.setLastclose = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double avgPrice = 5;
 * @return {number}
 */
proto.Qot_Common.TimeShare.prototype.getAvgprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.TimeShare} returns this
 */
proto.Qot_Common.TimeShare.prototype.setAvgprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int64 volume = 6;
 * @return {number}
 */
proto.Qot_Common.TimeShare.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.TimeShare} returns this
 */
proto.Qot_Common.TimeShare.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double turnover = 7;
 * @return {number}
 */
proto.Qot_Common.TimeShare.prototype.getTurnover = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.TimeShare} returns this
 */
proto.Qot_Common.TimeShare.prototype.setTurnover = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double timestamp = 8;
 * @return {number}
 */
proto.Qot_Common.TimeShare.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.TimeShare} returns this
 */
proto.Qot_Common.TimeShare.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};





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
proto.Qot_Common.KLine.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.KLine.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.KLine} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.KLine.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isblank: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    lastclose: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    open: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    close: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    high: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    low: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    changepct: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    volume: jspb.Message.getFieldWithDefault(msg, 9, 0),
    turnover: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    turnoverrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    timestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0)
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
 * @return {!proto.Qot_Common.KLine}
 */
proto.Qot_Common.KLine.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.KLine;
  return proto.Qot_Common.KLine.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.KLine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.KLine}
 */
proto.Qot_Common.KLine.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTime(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsblank(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastclose(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpen(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setClose(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHigh(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLow(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangepct(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTurnover(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTurnoverrate(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimestamp(value);
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
proto.Qot_Common.KLine.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.KLine.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.KLine} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.KLine.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsblank();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getLastclose();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getOpen();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getClose();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getHigh();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getLow();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getChangepct();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getTurnover();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getTurnoverrate();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
};


/**
 * optional string time = 1;
 * @return {string}
 */
proto.Qot_Common.KLine.prototype.getTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.KLine} returns this
 */
proto.Qot_Common.KLine.prototype.setTime = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool isBlank = 2;
 * @return {boolean}
 */
proto.Qot_Common.KLine.prototype.getIsblank = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Qot_Common.KLine} returns this
 */
proto.Qot_Common.KLine.prototype.setIsblank = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional double lastClose = 3;
 * @return {number}
 */
proto.Qot_Common.KLine.prototype.getLastclose = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.KLine} returns this
 */
proto.Qot_Common.KLine.prototype.setLastclose = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double open = 4;
 * @return {number}
 */
proto.Qot_Common.KLine.prototype.getOpen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.KLine} returns this
 */
proto.Qot_Common.KLine.prototype.setOpen = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double close = 5;
 * @return {number}
 */
proto.Qot_Common.KLine.prototype.getClose = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.KLine} returns this
 */
proto.Qot_Common.KLine.prototype.setClose = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double high = 6;
 * @return {number}
 */
proto.Qot_Common.KLine.prototype.getHigh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.KLine} returns this
 */
proto.Qot_Common.KLine.prototype.setHigh = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double low = 7;
 * @return {number}
 */
proto.Qot_Common.KLine.prototype.getLow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.KLine} returns this
 */
proto.Qot_Common.KLine.prototype.setLow = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double changePct = 8;
 * @return {number}
 */
proto.Qot_Common.KLine.prototype.getChangepct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.KLine} returns this
 */
proto.Qot_Common.KLine.prototype.setChangepct = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional int64 volume = 9;
 * @return {number}
 */
proto.Qot_Common.KLine.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.KLine} returns this
 */
proto.Qot_Common.KLine.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional double turnover = 10;
 * @return {number}
 */
proto.Qot_Common.KLine.prototype.getTurnover = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.KLine} returns this
 */
proto.Qot_Common.KLine.prototype.setTurnover = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double turnoverRate = 11;
 * @return {number}
 */
proto.Qot_Common.KLine.prototype.getTurnoverrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.KLine} returns this
 */
proto.Qot_Common.KLine.prototype.setTurnoverrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional double timestamp = 12;
 * @return {number}
 */
proto.Qot_Common.KLine.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.KLine} returns this
 */
proto.Qot_Common.KLine.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};





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
proto.Qot_Common.NewSecurityDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.NewSecurityDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.NewSecurityDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.NewSecurityDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    security: (f = msg.getSecurity()) && proto.Qot_Common.Security.toObject(includeInstance, f),
    namegb: jspb.Message.getFieldWithDefault(msg, 2, ""),
    namegccs: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nameus: jspb.Message.getFieldWithDefault(msg, 4, ""),
    issueprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    darkprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    avgvolume: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    darkturnover: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    issuedshares: jspb.Message.getFieldWithDefault(msg, 10, 0),
    firstchangerate: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    firstchange: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    winrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    financeamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    nopeople: jspb.Message.getFieldWithDefault(msg, 15, 0),
    multiple: jspb.Message.getFieldWithDefault(msg, 16, 0),
    listtimestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
    plate: (f = msg.getPlate()) && proto.Qot_Common.PlateInfo.toObject(includeInstance, f)
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
 * @return {!proto.Qot_Common.NewSecurityDetail}
 */
proto.Qot_Common.NewSecurityDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.NewSecurityDetail;
  return proto.Qot_Common.NewSecurityDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.NewSecurityDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.NewSecurityDetail}
 */
proto.Qot_Common.NewSecurityDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.Security;
      reader.readMessage(value,proto.Qot_Common.Security.deserializeBinaryFromReader);
      msg.setSecurity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegb(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamegccs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setIssueprice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDarkprice(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvgvolume(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDarkturnover(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIssuedshares(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFirstchangerate(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFirstchange(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWinrate(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFinanceamount(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNopeople(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMultiple(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setListtimestamp(value);
      break;
    case 18:
      var value = new proto.Qot_Common.PlateInfo;
      reader.readMessage(value,proto.Qot_Common.PlateInfo.deserializeBinaryFromReader);
      msg.setPlate(value);
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
proto.Qot_Common.NewSecurityDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.NewSecurityDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.NewSecurityDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.NewSecurityDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecurity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Qot_Common.Security.serializeBinaryToWriter
    );
  }
  f = message.getNamegb();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNamegccs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNameus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIssueprice();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getDarkprice();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getAvgvolume();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getDarkturnover();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getIssuedshares();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getFirstchangerate();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getFirstchange();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getWinrate();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getFinanceamount();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getNopeople();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getMultiple();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getListtimestamp();
  if (f !== 0.0) {
    writer.writeDouble(
      17,
      f
    );
  }
  f = message.getPlate();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.Qot_Common.PlateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Security security = 1;
 * @return {?proto.Qot_Common.Security}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getSecurity = function() {
  return /** @type{?proto.Qot_Common.Security} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.Security, 1));
};


/**
 * @param {?proto.Qot_Common.Security|undefined} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
*/
proto.Qot_Common.NewSecurityDetail.prototype.setSecurity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.clearSecurity = function() {
  return this.setSecurity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.NewSecurityDetail.prototype.hasSecurity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string nameGB = 2;
 * @return {string}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getNamegb = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setNamegb = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nameGCCS = 3;
 * @return {string}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getNamegccs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setNamegccs = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nameUS = 4;
 * @return {string}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getNameus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setNameus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double issuePrice = 5;
 * @return {number}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getIssueprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setIssueprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double price = 6;
 * @return {number}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double darkPrice = 7;
 * @return {number}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getDarkprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setDarkprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double avgVolume = 8;
 * @return {number}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getAvgvolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setAvgvolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double darkTurnover = 9;
 * @return {number}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getDarkturnover = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setDarkturnover = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional int64 issuedShares = 10;
 * @return {number}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getIssuedshares = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setIssuedshares = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional double firstChangeRate = 11;
 * @return {number}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getFirstchangerate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setFirstchangerate = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional double firstChange = 12;
 * @return {number}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getFirstchange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setFirstchange = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional double winRate = 13;
 * @return {number}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getWinrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setWinrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double financeAmount = 14;
 * @return {number}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getFinanceamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setFinanceamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional int64 noPeople = 15;
 * @return {number}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getNopeople = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setNopeople = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int64 multiple = 16;
 * @return {number}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getMultiple = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setMultiple = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional double listTimestamp = 17;
 * @return {number}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getListtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.setListtimestamp = function(value) {
  return jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional PlateInfo plate = 18;
 * @return {?proto.Qot_Common.PlateInfo}
 */
proto.Qot_Common.NewSecurityDetail.prototype.getPlate = function() {
  return /** @type{?proto.Qot_Common.PlateInfo} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.PlateInfo, 18));
};


/**
 * @param {?proto.Qot_Common.PlateInfo|undefined} value
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
*/
proto.Qot_Common.NewSecurityDetail.prototype.setPlate = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.NewSecurityDetail} returns this
 */
proto.Qot_Common.NewSecurityDetail.prototype.clearPlate = function() {
  return this.setPlate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.NewSecurityDetail.prototype.hasPlate = function() {
  return jspb.Message.getField(this, 18) != null;
};





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
proto.Qot_Common.DailyReset.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.DailyReset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.DailyReset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.DailyReset.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.Qot_Common.DailyReset}
 */
proto.Qot_Common.DailyReset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.DailyReset;
  return proto.Qot_Common.DailyReset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.DailyReset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.DailyReset}
 */
proto.Qot_Common.DailyReset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.Qot_Common.DailyReset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.DailyReset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.DailyReset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.DailyReset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Qot_Common.StatInfo.repeatedFields_ = [2];



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
proto.Qot_Common.StatInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.StatInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.StatInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.StatInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsstat: (f = msg.getIdsstat()) && proto.Qot_Common.IDSStatInfo.toObject(includeInstance, f),
    gtsstatsList: jspb.Message.toObjectList(msg.getGtsstatsList(),
    proto.Qot_Common.GTSStatInfo.toObject, includeInstance)
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
 * @return {!proto.Qot_Common.StatInfo}
 */
proto.Qot_Common.StatInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.StatInfo;
  return proto.Qot_Common.StatInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.StatInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.StatInfo}
 */
proto.Qot_Common.StatInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.IDSStatInfo;
      reader.readMessage(value,proto.Qot_Common.IDSStatInfo.deserializeBinaryFromReader);
      msg.setIdsstat(value);
      break;
    case 2:
      var value = new proto.Qot_Common.GTSStatInfo;
      reader.readMessage(value,proto.Qot_Common.GTSStatInfo.deserializeBinaryFromReader);
      msg.addGtsstats(value);
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
proto.Qot_Common.StatInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.StatInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.StatInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.StatInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsstat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Qot_Common.IDSStatInfo.serializeBinaryToWriter
    );
  }
  f = message.getGtsstatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Qot_Common.GTSStatInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional IDSStatInfo idsStat = 1;
 * @return {?proto.Qot_Common.IDSStatInfo}
 */
proto.Qot_Common.StatInfo.prototype.getIdsstat = function() {
  return /** @type{?proto.Qot_Common.IDSStatInfo} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.IDSStatInfo, 1));
};


/**
 * @param {?proto.Qot_Common.IDSStatInfo|undefined} value
 * @return {!proto.Qot_Common.StatInfo} returns this
*/
proto.Qot_Common.StatInfo.prototype.setIdsstat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.StatInfo} returns this
 */
proto.Qot_Common.StatInfo.prototype.clearIdsstat = function() {
  return this.setIdsstat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.StatInfo.prototype.hasIdsstat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated GTSStatInfo gtsStats = 2;
 * @return {!Array<!proto.Qot_Common.GTSStatInfo>}
 */
proto.Qot_Common.StatInfo.prototype.getGtsstatsList = function() {
  return /** @type{!Array<!proto.Qot_Common.GTSStatInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Qot_Common.GTSStatInfo, 2));
};


/**
 * @param {!Array<!proto.Qot_Common.GTSStatInfo>} value
 * @return {!proto.Qot_Common.StatInfo} returns this
*/
proto.Qot_Common.StatInfo.prototype.setGtsstatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Qot_Common.GTSStatInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.GTSStatInfo}
 */
proto.Qot_Common.StatInfo.prototype.addGtsstats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Qot_Common.GTSStatInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.StatInfo} returns this
 */
proto.Qot_Common.StatInfo.prototype.clearGtsstatsList = function() {
  return this.setGtsstatsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Qot_Common.IDSStatInfo.repeatedFields_ = [1,4];



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
proto.Qot_Common.IDSStatInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.IDSStatInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.IDSStatInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.IDSStatInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    nonauthcount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    authcount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    userinfosList: jspb.Message.toObjectList(msg.getUserinfosList(),
    proto.Qot_Common.UserInfo.toObject, includeInstance)
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
 * @return {!proto.Qot_Common.IDSStatInfo}
 */
proto.Qot_Common.IDSStatInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.IDSStatInfo;
  return proto.Qot_Common.IDSStatInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.IDSStatInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.IDSStatInfo}
 */
proto.Qot_Common.IDSStatInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addClients(values[i]);
      }
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNonauthcount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAuthcount(value);
      break;
    case 4:
      var value = new proto.Qot_Common.UserInfo;
      reader.readMessage(value,proto.Qot_Common.UserInfo.deserializeBinaryFromReader);
      msg.addUserinfos(value);
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
proto.Qot_Common.IDSStatInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.IDSStatInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.IDSStatInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.IDSStatInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
  f = message.getNonauthcount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAuthcount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUserinfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.Qot_Common.UserInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated int32 clients = 1;
 * @return {!Array<number>}
 */
proto.Qot_Common.IDSStatInfo.prototype.getClientsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.Qot_Common.IDSStatInfo} returns this
 */
proto.Qot_Common.IDSStatInfo.prototype.setClientsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.IDSStatInfo} returns this
 */
proto.Qot_Common.IDSStatInfo.prototype.addClients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.IDSStatInfo} returns this
 */
proto.Qot_Common.IDSStatInfo.prototype.clearClientsList = function() {
  return this.setClientsList([]);
};


/**
 * optional int32 nonAuthCount = 2;
 * @return {number}
 */
proto.Qot_Common.IDSStatInfo.prototype.getNonauthcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.IDSStatInfo} returns this
 */
proto.Qot_Common.IDSStatInfo.prototype.setNonauthcount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 authCount = 3;
 * @return {number}
 */
proto.Qot_Common.IDSStatInfo.prototype.getAuthcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.IDSStatInfo} returns this
 */
proto.Qot_Common.IDSStatInfo.prototype.setAuthcount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated UserInfo userInfos = 4;
 * @return {!Array<!proto.Qot_Common.UserInfo>}
 */
proto.Qot_Common.IDSStatInfo.prototype.getUserinfosList = function() {
  return /** @type{!Array<!proto.Qot_Common.UserInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Qot_Common.UserInfo, 4));
};


/**
 * @param {!Array<!proto.Qot_Common.UserInfo>} value
 * @return {!proto.Qot_Common.IDSStatInfo} returns this
*/
proto.Qot_Common.IDSStatInfo.prototype.setUserinfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.Qot_Common.UserInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.UserInfo}
 */
proto.Qot_Common.IDSStatInfo.prototype.addUserinfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.Qot_Common.UserInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.IDSStatInfo} returns this
 */
proto.Qot_Common.IDSStatInfo.prototype.clearUserinfosList = function() {
  return this.setUserinfosList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Qot_Common.GTSStatInfo.repeatedFields_ = [5,6];



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
proto.Qot_Common.GTSStatInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.GTSStatInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.GTSStatInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.GTSStatInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nonauthcount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    authcount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    userinfosList: jspb.Message.toObjectList(msg.getUserinfosList(),
    proto.Qot_Common.UserInfo.toObject, includeInstance),
    substatsList: jspb.Message.toObjectList(msg.getSubstatsList(),
    proto.Qot_Common.SubStat.toObject, includeInstance),
    workerinfo: (f = msg.getWorkerinfo()) && proto.Qot_Common.WorkerInfo.toObject(includeInstance, f)
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
 * @return {!proto.Qot_Common.GTSStatInfo}
 */
proto.Qot_Common.GTSStatInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.GTSStatInfo;
  return proto.Qot_Common.GTSStatInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.GTSStatInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.GTSStatInfo}
 */
proto.Qot_Common.GTSStatInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setClientid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNonauthcount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAuthcount(value);
      break;
    case 5:
      var value = new proto.Qot_Common.UserInfo;
      reader.readMessage(value,proto.Qot_Common.UserInfo.deserializeBinaryFromReader);
      msg.addUserinfos(value);
      break;
    case 6:
      var value = new proto.Qot_Common.SubStat;
      reader.readMessage(value,proto.Qot_Common.SubStat.deserializeBinaryFromReader);
      msg.addSubstats(value);
      break;
    case 7:
      var value = new proto.Qot_Common.WorkerInfo;
      reader.readMessage(value,proto.Qot_Common.WorkerInfo.deserializeBinaryFromReader);
      msg.setWorkerinfo(value);
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
proto.Qot_Common.GTSStatInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.GTSStatInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.GTSStatInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.GTSStatInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNonauthcount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAuthcount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getUserinfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.Qot_Common.UserInfo.serializeBinaryToWriter
    );
  }
  f = message.getSubstatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.Qot_Common.SubStat.serializeBinaryToWriter
    );
  }
  f = message.getWorkerinfo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.Qot_Common.WorkerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 clientID = 1;
 * @return {number}
 */
proto.Qot_Common.GTSStatInfo.prototype.getClientid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.GTSStatInfo} returns this
 */
proto.Qot_Common.GTSStatInfo.prototype.setClientid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 state = 2;
 * @return {number}
 */
proto.Qot_Common.GTSStatInfo.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.GTSStatInfo} returns this
 */
proto.Qot_Common.GTSStatInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 nonAuthCount = 3;
 * @return {number}
 */
proto.Qot_Common.GTSStatInfo.prototype.getNonauthcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.GTSStatInfo} returns this
 */
proto.Qot_Common.GTSStatInfo.prototype.setNonauthcount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 authCount = 4;
 * @return {number}
 */
proto.Qot_Common.GTSStatInfo.prototype.getAuthcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.GTSStatInfo} returns this
 */
proto.Qot_Common.GTSStatInfo.prototype.setAuthcount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated UserInfo userInfos = 5;
 * @return {!Array<!proto.Qot_Common.UserInfo>}
 */
proto.Qot_Common.GTSStatInfo.prototype.getUserinfosList = function() {
  return /** @type{!Array<!proto.Qot_Common.UserInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Qot_Common.UserInfo, 5));
};


/**
 * @param {!Array<!proto.Qot_Common.UserInfo>} value
 * @return {!proto.Qot_Common.GTSStatInfo} returns this
*/
proto.Qot_Common.GTSStatInfo.prototype.setUserinfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.Qot_Common.UserInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.UserInfo}
 */
proto.Qot_Common.GTSStatInfo.prototype.addUserinfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.Qot_Common.UserInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.GTSStatInfo} returns this
 */
proto.Qot_Common.GTSStatInfo.prototype.clearUserinfosList = function() {
  return this.setUserinfosList([]);
};


/**
 * repeated SubStat subStats = 6;
 * @return {!Array<!proto.Qot_Common.SubStat>}
 */
proto.Qot_Common.GTSStatInfo.prototype.getSubstatsList = function() {
  return /** @type{!Array<!proto.Qot_Common.SubStat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Qot_Common.SubStat, 6));
};


/**
 * @param {!Array<!proto.Qot_Common.SubStat>} value
 * @return {!proto.Qot_Common.GTSStatInfo} returns this
*/
proto.Qot_Common.GTSStatInfo.prototype.setSubstatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.Qot_Common.SubStat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.SubStat}
 */
proto.Qot_Common.GTSStatInfo.prototype.addSubstats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.Qot_Common.SubStat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.GTSStatInfo} returns this
 */
proto.Qot_Common.GTSStatInfo.prototype.clearSubstatsList = function() {
  return this.setSubstatsList([]);
};


/**
 * optional WorkerInfo workerInfo = 7;
 * @return {?proto.Qot_Common.WorkerInfo}
 */
proto.Qot_Common.GTSStatInfo.prototype.getWorkerinfo = function() {
  return /** @type{?proto.Qot_Common.WorkerInfo} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.WorkerInfo, 7));
};


/**
 * @param {?proto.Qot_Common.WorkerInfo|undefined} value
 * @return {!proto.Qot_Common.GTSStatInfo} returns this
*/
proto.Qot_Common.GTSStatInfo.prototype.setWorkerinfo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.GTSStatInfo} returns this
 */
proto.Qot_Common.GTSStatInfo.prototype.clearWorkerinfo = function() {
  return this.setWorkerinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.GTSStatInfo.prototype.hasWorkerinfo = function() {
  return jspb.Message.getField(this, 7) != null;
};





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
proto.Qot_Common.WorkerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.WorkerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.WorkerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.WorkerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    worknum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chanlen: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.Qot_Common.WorkerInfo}
 */
proto.Qot_Common.WorkerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.WorkerInfo;
  return proto.Qot_Common.WorkerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.WorkerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.WorkerInfo}
 */
proto.Qot_Common.WorkerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorknum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChanlen(value);
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
proto.Qot_Common.WorkerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.WorkerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.WorkerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.WorkerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorknum();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getChanlen();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int32 workNum = 1;
 * @return {number}
 */
proto.Qot_Common.WorkerInfo.prototype.getWorknum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WorkerInfo} returns this
 */
proto.Qot_Common.WorkerInfo.prototype.setWorknum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 chanLen = 2;
 * @return {number}
 */
proto.Qot_Common.WorkerInfo.prototype.getChanlen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.WorkerInfo} returns this
 */
proto.Qot_Common.WorkerInfo.prototype.setChanlen = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Qot_Common.UserInfo.repeatedFields_ = [4,5];



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
proto.Qot_Common.UserInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.UserInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.UserInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.UserInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    token: jspb.Message.getFieldWithDefault(msg, 3, ""),
    marketlevelsList: jspb.Message.toObjectList(msg.getMarketlevelsList(),
    proto.Qot_Common.MarketLevel.toObject, includeInstance),
    subkeysList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.Qot_Common.UserInfo}
 */
proto.Qot_Common.UserInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.UserInfo;
  return proto.Qot_Common.UserInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.UserInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.UserInfo}
 */
proto.Qot_Common.UserInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 4:
      var value = new proto.Qot_Common.MarketLevel;
      reader.readMessage(value,proto.Qot_Common.MarketLevel.deserializeBinaryFromReader);
      msg.addMarketlevels(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addSubkeys(value);
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
proto.Qot_Common.UserInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.UserInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.UserInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.UserInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMarketlevelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.Qot_Common.MarketLevel.serializeBinaryToWriter
    );
  }
  f = message.getSubkeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional int32 state = 1;
 * @return {number}
 */
proto.Qot_Common.UserInfo.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.UserInfo} returns this
 */
proto.Qot_Common.UserInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 userID = 2;
 * @return {number}
 */
proto.Qot_Common.UserInfo.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.UserInfo} returns this
 */
proto.Qot_Common.UserInfo.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.Qot_Common.UserInfo.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Qot_Common.UserInfo} returns this
 */
proto.Qot_Common.UserInfo.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated MarketLevel marketLevels = 4;
 * @return {!Array<!proto.Qot_Common.MarketLevel>}
 */
proto.Qot_Common.UserInfo.prototype.getMarketlevelsList = function() {
  return /** @type{!Array<!proto.Qot_Common.MarketLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Qot_Common.MarketLevel, 4));
};


/**
 * @param {!Array<!proto.Qot_Common.MarketLevel>} value
 * @return {!proto.Qot_Common.UserInfo} returns this
*/
proto.Qot_Common.UserInfo.prototype.setMarketlevelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.Qot_Common.MarketLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.MarketLevel}
 */
proto.Qot_Common.UserInfo.prototype.addMarketlevels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.Qot_Common.MarketLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.UserInfo} returns this
 */
proto.Qot_Common.UserInfo.prototype.clearMarketlevelsList = function() {
  return this.setMarketlevelsList([]);
};


/**
 * repeated string subKeys = 5;
 * @return {!Array<string>}
 */
proto.Qot_Common.UserInfo.prototype.getSubkeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.Qot_Common.UserInfo} returns this
 */
proto.Qot_Common.UserInfo.prototype.setSubkeysList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.UserInfo} returns this
 */
proto.Qot_Common.UserInfo.prototype.addSubkeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.UserInfo} returns this
 */
proto.Qot_Common.UserInfo.prototype.clearSubkeysList = function() {
  return this.setSubkeysList([]);
};





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
proto.Qot_Common.MarketLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.MarketLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.MarketLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.MarketLevel.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, 0),
    level: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.Qot_Common.MarketLevel}
 */
proto.Qot_Common.MarketLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.MarketLevel;
  return proto.Qot_Common.MarketLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.MarketLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.MarketLevel}
 */
proto.Qot_Common.MarketLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
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
proto.Qot_Common.MarketLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.MarketLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.MarketLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.MarketLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 market = 1;
 * @return {number}
 */
proto.Qot_Common.MarketLevel.prototype.getMarket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.MarketLevel} returns this
 */
proto.Qot_Common.MarketLevel.prototype.setMarket = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 level = 2;
 * @return {number}
 */
proto.Qot_Common.MarketLevel.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.MarketLevel} returns this
 */
proto.Qot_Common.MarketLevel.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Qot_Common.SubStat.repeatedFields_ = [3];



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
proto.Qot_Common.SubStat.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.SubStat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.SubStat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.SubStat.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, 0),
    marketlevel: jspb.Message.getFieldWithDefault(msg, 2, 0),
    subkeysList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.Qot_Common.SubStat}
 */
proto.Qot_Common.SubStat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.SubStat;
  return proto.Qot_Common.SubStat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.SubStat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.SubStat}
 */
proto.Qot_Common.SubStat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMarketlevel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSubkeys(value);
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
proto.Qot_Common.SubStat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.SubStat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.SubStat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.SubStat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMarketlevel();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSubkeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional int32 market = 1;
 * @return {number}
 */
proto.Qot_Common.SubStat.prototype.getMarket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.SubStat} returns this
 */
proto.Qot_Common.SubStat.prototype.setMarket = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 marketLevel = 2;
 * @return {number}
 */
proto.Qot_Common.SubStat.prototype.getMarketlevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.SubStat} returns this
 */
proto.Qot_Common.SubStat.prototype.setMarketlevel = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated string subKeys = 3;
 * @return {!Array<string>}
 */
proto.Qot_Common.SubStat.prototype.getSubkeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.Qot_Common.SubStat} returns this
 */
proto.Qot_Common.SubStat.prototype.setSubkeysList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.SubStat} returns this
 */
proto.Qot_Common.SubStat.prototype.addSubkeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.SubStat} returns this
 */
proto.Qot_Common.SubStat.prototype.clearSubkeysList = function() {
  return this.setSubkeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Qot_Common.DumpSnapshotList.repeatedFields_ = [1];



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
proto.Qot_Common.DumpSnapshotList.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.DumpSnapshotList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.DumpSnapshotList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.DumpSnapshotList.toObject = function(includeInstance, msg) {
  var f, obj = {
    listList: jspb.Message.toObjectList(msg.getListList(),
    proto.Qot_Common.Snapshot.toObject, includeInstance)
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
 * @return {!proto.Qot_Common.DumpSnapshotList}
 */
proto.Qot_Common.DumpSnapshotList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.DumpSnapshotList;
  return proto.Qot_Common.DumpSnapshotList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.DumpSnapshotList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.DumpSnapshotList}
 */
proto.Qot_Common.DumpSnapshotList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.Snapshot;
      reader.readMessage(value,proto.Qot_Common.Snapshot.deserializeBinaryFromReader);
      msg.addList(value);
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
proto.Qot_Common.DumpSnapshotList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.DumpSnapshotList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.DumpSnapshotList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.DumpSnapshotList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Qot_Common.Snapshot.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Snapshot list = 1;
 * @return {!Array<!proto.Qot_Common.Snapshot>}
 */
proto.Qot_Common.DumpSnapshotList.prototype.getListList = function() {
  return /** @type{!Array<!proto.Qot_Common.Snapshot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Qot_Common.Snapshot, 1));
};


/**
 * @param {!Array<!proto.Qot_Common.Snapshot>} value
 * @return {!proto.Qot_Common.DumpSnapshotList} returns this
*/
proto.Qot_Common.DumpSnapshotList.prototype.setListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Qot_Common.Snapshot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.Snapshot}
 */
proto.Qot_Common.DumpSnapshotList.prototype.addList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Qot_Common.Snapshot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.DumpSnapshotList} returns this
 */
proto.Qot_Common.DumpSnapshotList.prototype.clearListList = function() {
  return this.setListList([]);
};





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
proto.Qot_Common.LstKLine.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.LstKLine.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.LstKLine} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.LstKLine.toObject = function(includeInstance, msg) {
  var f, obj = {
    security: (f = msg.getSecurity()) && proto.Qot_Common.Security.toObject(includeInstance, f),
    kltype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    kline: (f = msg.getKline()) && proto.Qot_Common.KLine.toObject(includeInstance, f)
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
 * @return {!proto.Qot_Common.LstKLine}
 */
proto.Qot_Common.LstKLine.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.LstKLine;
  return proto.Qot_Common.LstKLine.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.LstKLine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.LstKLine}
 */
proto.Qot_Common.LstKLine.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.Security;
      reader.readMessage(value,proto.Qot_Common.Security.deserializeBinaryFromReader);
      msg.setSecurity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKltype(value);
      break;
    case 3:
      var value = new proto.Qot_Common.KLine;
      reader.readMessage(value,proto.Qot_Common.KLine.deserializeBinaryFromReader);
      msg.setKline(value);
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
proto.Qot_Common.LstKLine.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.LstKLine.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.LstKLine} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.LstKLine.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecurity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Qot_Common.Security.serializeBinaryToWriter
    );
  }
  f = message.getKltype();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getKline();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.Qot_Common.KLine.serializeBinaryToWriter
    );
  }
};


/**
 * optional Security security = 1;
 * @return {?proto.Qot_Common.Security}
 */
proto.Qot_Common.LstKLine.prototype.getSecurity = function() {
  return /** @type{?proto.Qot_Common.Security} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.Security, 1));
};


/**
 * @param {?proto.Qot_Common.Security|undefined} value
 * @return {!proto.Qot_Common.LstKLine} returns this
*/
proto.Qot_Common.LstKLine.prototype.setSecurity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.LstKLine} returns this
 */
proto.Qot_Common.LstKLine.prototype.clearSecurity = function() {
  return this.setSecurity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.LstKLine.prototype.hasSecurity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 klType = 2;
 * @return {number}
 */
proto.Qot_Common.LstKLine.prototype.getKltype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Qot_Common.LstKLine} returns this
 */
proto.Qot_Common.LstKLine.prototype.setKltype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional KLine kline = 3;
 * @return {?proto.Qot_Common.KLine}
 */
proto.Qot_Common.LstKLine.prototype.getKline = function() {
  return /** @type{?proto.Qot_Common.KLine} */ (
    jspb.Message.getWrapperField(this, proto.Qot_Common.KLine, 3));
};


/**
 * @param {?proto.Qot_Common.KLine|undefined} value
 * @return {!proto.Qot_Common.LstKLine} returns this
*/
proto.Qot_Common.LstKLine.prototype.setKline = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Qot_Common.LstKLine} returns this
 */
proto.Qot_Common.LstKLine.prototype.clearKline = function() {
  return this.setKline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Qot_Common.LstKLine.prototype.hasKline = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Qot_Common.DumpLstKLineList.repeatedFields_ = [1];



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
proto.Qot_Common.DumpLstKLineList.prototype.toObject = function(opt_includeInstance) {
  return proto.Qot_Common.DumpLstKLineList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Qot_Common.DumpLstKLineList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.DumpLstKLineList.toObject = function(includeInstance, msg) {
  var f, obj = {
    listList: jspb.Message.toObjectList(msg.getListList(),
    proto.Qot_Common.LstKLine.toObject, includeInstance)
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
 * @return {!proto.Qot_Common.DumpLstKLineList}
 */
proto.Qot_Common.DumpLstKLineList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Qot_Common.DumpLstKLineList;
  return proto.Qot_Common.DumpLstKLineList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Qot_Common.DumpLstKLineList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Qot_Common.DumpLstKLineList}
 */
proto.Qot_Common.DumpLstKLineList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Qot_Common.LstKLine;
      reader.readMessage(value,proto.Qot_Common.LstKLine.deserializeBinaryFromReader);
      msg.addList(value);
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
proto.Qot_Common.DumpLstKLineList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Qot_Common.DumpLstKLineList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Qot_Common.DumpLstKLineList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Qot_Common.DumpLstKLineList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Qot_Common.LstKLine.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LstKLine list = 1;
 * @return {!Array<!proto.Qot_Common.LstKLine>}
 */
proto.Qot_Common.DumpLstKLineList.prototype.getListList = function() {
  return /** @type{!Array<!proto.Qot_Common.LstKLine>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Qot_Common.LstKLine, 1));
};


/**
 * @param {!Array<!proto.Qot_Common.LstKLine>} value
 * @return {!proto.Qot_Common.DumpLstKLineList} returns this
*/
proto.Qot_Common.DumpLstKLineList.prototype.setListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Qot_Common.LstKLine=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Qot_Common.LstKLine}
 */
proto.Qot_Common.DumpLstKLineList.prototype.addList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Qot_Common.LstKLine, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Qot_Common.DumpLstKLineList} returns this
 */
proto.Qot_Common.DumpLstKLineList.prototype.clearListList = function() {
  return this.setListList([]);
};


/**
 * @enum {number}
 */
proto.Qot_Common.QotMarket = {
  QOTMARKET_UNKNOWN: 0,
  QOTMARKET_HK_SECURITY: 1,
  QOTMARKET_US_SECURITY: 11,
  QOTMARKET_CNSH_SECURITY: 21,
  QOTMARKET_CNSZ_SECURITY: 22
};

/**
 * @enum {number}
 */
proto.Qot_Common.QotMarketState = {
  QOTMARKETSTATE_NONE: 0,
  QOTMARKETSTATE_AUCTION: 1,
  QOTMARKETSTATE_PREMARKETBEGIN: 2,
  QOTMARKETSTATE_MORNING: 3,
  QOTMARKETSTATE_REST: 4,
  QOTMARKETSTATE_AFTERNOON: 5,
  QOTMARKETSTATE_AFTERHOURSBEGIN: 6,
  QOTMARKETSTATE_CLOSED: 7
};

/**
 * @enum {number}
 */
proto.Qot_Common.SecurityType = {
  SECURITYTYPE_UNKNOWN: 0,
  SECURITYTYPE_BOND: 1,
  SECURITYTYPE_BWRT: 2,
  SECURITYTYPE_EQTY: 3,
  SECURITYTYPE_TRUST: 4,
  SECURITYTYPE_WARRANT: 5,
  SECURITYTYPE_INDEX: 6,
  SECURITYTYPE_PLATE: 7,
  SECURITYTYPE_DRVT: 8,
  SECURITYTYPE_PLATESET: 9,
  SECURITYTYPE_FUTURE: 10
};

/**
 * @enum {number}
 */
proto.Qot_Common.PlateSetType = {
  PLATESETTYPE_ALL: 0,
  PLATESETTYPE_INDUSTRY: 1,
  PLATESETTYPE_REGION: 2,
  PLATESETTYPE_CONCEPT: 3,
  PLATESETTYPE_OTHER: 4,
  PLATESETTYPE_INDEX: 5,
  PLATESETTYPE_SET: 6
};

/**
 * @enum {number}
 */
proto.Qot_Common.RehabType = {
  REHABTYPE_NONE: 0,
  REHABTYPE_FORWARD: 1,
  REHABTYPE_BACKWARD: 2
};

/**
 * @enum {number}
 */
proto.Qot_Common.SecurityStatus = {
  SECURITYSTATUS_UNKNOWN: 0,
  SECURITYSTATUS_NORMAL: 1,
  SECURITYSTATUS_LISTING: 2,
  SECURITYSTATUS_PURCHASING: 3,
  SECURITYSTATUS_SUBSCRIBING: 4,
  SECURITYSTATUS_BEFOREDRAKTRADEOPENING: 5,
  SECURITYSTATUS_DRAKTRADING: 6,
  SECURITYSTATUS_DRAKTRADEEND: 7,
  SECURITYSTATUS_TOBEOPEN: 8,
  SECURITYSTATUS_SUSPENDED: 9,
  SECURITYSTATUS_CALLED: 10,
  SECURITYSTATUS_EXPIREDLASTTRADINGDATE: 11,
  SECURITYSTATUS_EXPIRED: 12,
  SECURITYSTATUS_DELISTED: 13,
  SECURITYSTATUS_CHANGETOTEMPORARYCODE: 14,
  SECURITYSTATUS_TEMPORARYCODETRADEEND: 15,
  SECURITYSTATUS_CHANGEDPLATETRADEEND: 16,
  SECURITYSTATUS_CHANGEDCODETRADEEND: 17,
  SECURITYSTATUS_RECOVERABLECIRCUITBREAKER: 18,
  SECURITYSTATUS_UNRECOVERABLECIRCUITBREAKER: 19,
  SECURITYSTATUS_AFTERCOMBINATION: 20,
  SECURITYSTATUS_AFTERTRANSATION: 21
};

/**
 * @enum {number}
 */
proto.Qot_Common.SubType = {
  SUBTYPE_NONE: 0,
  SUBTYPE_BASIC: 1,
  SUBTYPE_TICKER: 2,
  SUBTYPE_RT: 3,
  SUBTYPE_ORDERBOOK: 4,
  SUBTYPE_BROKER: 5,
  SUBTYPE_KL_DAY: 6,
  SUBTYPE_KL_5MIN: 7,
  SUBTYPE_KL_15MIN: 8,
  SUBTYPE_KL_30MIN: 9,
  SUBTYPE_KL_60MIN: 10,
  SUBTYPE_KL_1MIN: 11,
  SUBTYPE_KL_WEEK: 12,
  SUBTYPE_KL_MONTH: 13,
  SUBTYPE_KL_QUARTER: 14,
  SUBTYPE_KL_YEAR: 15,
  SUBTYPE_ASKBID1: 16,
  SUBTYPE_LASTCLOSEPRICE: 17
};

/**
 * @enum {number}
 */
proto.Qot_Common.TickerDirection = {
  TICKERDIRECTION_UNKNOWN: 0,
  TICKERDIRECTION_BID: 1,
  TICKERDIRECTION_ASK: 2,
  TICKERDIRECTION_NEUTRAL: 3
};

/**
 * @enum {number}
 */
proto.Qot_Common.TickerType = {
  TICKERTYPE_UNKNOWN: 0,
  TICKERTYPE_AUTOMATCH: 1,
  TICKERTYPE_LATE: 2,
  TICKERTYPE_NONEAUTOMATCH: 3,
  TICKERTYPE_INTERAUTOMATCH: 4,
  TICKERTYPE_INTERNONEAUTOMATCH: 5,
  TICKERTYPE_ODDLOT: 6,
  TICKERTYPE_AUCTION: 7,
  TICKERTYPE_OVERSEAS: 8
};

/**
 * @enum {number}
 */
proto.Qot_Common.KLType = {
  KLTYPE_UNKNOWN: 0,
  KLTYPE_1MIN: 1,
  KLTYPE_DAY: 2,
  KLTYPE_WEEK: 3,
  KLTYPE_MONTH: 4,
  KLTYPE_YEAR: 5,
  KLTYPE_5MIN: 6,
  KLTYPE_15MIN: 7,
  KLTYPE_30MIN: 8,
  KLTYPE_60MIN: 9
};

/**
 * @enum {number}
 */
proto.Qot_Common.SortField = {
  SORTFIELD_UNKNOWN: 0,
  SORTFIELD_CODE: 1,
  SORTFIELD_NAMEGB: 2,
  SORTFIELD_NAMEGCCS: 3,
  SORTFIELD_NAMEUS: 4,
  SORTFIELD_CHANGEVAL: 5,
  SORTFIELD_CHANGERATE: 6,
  SORTFIELD_OPENPRICE: 7,
  SORTFIELD_CLOSEPRICE: 8,
  SORTFIELD_HIGHPRICE: 9,
  SORTFIELD_LOWPRICE: 10,
  SORTFIELD_CURPRICE: 11,
  SORTFIELD_VOLUME: 12,
  SORTFIELD_TURNOVER: 13,
  SORTFIELD_TURNOVERRATE: 14,
  SORTFIELD_BIDPRICE: 15,
  SORTFIELD_ASKPRICE: 16,
  SORTFIELD_BIDVOL: 17,
  SORTFIELD_ASKVOL: 18,
  SORTFIELD_AMPLITUDE: 19,
  SORTFIELD_BIDASKRATIO: 20,
  SORTFIELD_VOLUMERATIO: 21,
  SORTFIELD_HIGHEST52WEEKS: 22,
  SORTFIELD_LOWEST52WEEKS: 23,
  SORTFIELD_HIGHESTHISTORYPRICE: 24,
  SORTFIELD_LOWESTHISTORYPRICE: 25,
  SORTFIELD_CR5MIN: 26,
  SORTFIELD_CR5DAY: 27,
  SORTFIELD_CR20DAY: 28,
  SORTFIELD_CRYTD: 29,
  SORTFIELD_ISSUEDMARKETVAL: 40,
  SORTFIELD_OUTSTANDINGMARKETVAL: 41,
  SORTFIELD_ISSUEDSHARES: 42,
  SORTFIELD_OUTSTANDINGSHARES: 43,
  SORTFIELD_PERATE: 44,
  SORTFIELD_PBRATE: 45,
  SORTFIELD_DIVIDENDRATIO: 46,
  SORTFIELD_PREPRICE: 50,
  SORTFIELD_PRECHANGERATE: 51,
  SORTFIELD_AFTERPRICE: 52,
  SORTFIELD_AFTERCHANGERATE: 53
};

/**
 * @enum {number}
 */
proto.Qot_Common.PlateSortField = {
  PLATESORTFIELD_UNKNOWN: 0,
  PLATESORTFIELD_CODE: 1,
  PLATESORTFIELD_NAMEGB: 2,
  PLATESORTFIELD_NAMEGCCS: 3,
  PLATESORTFIELD_NAMEUS: 4,
  PLATESORTFIELD_CHANGERATE: 5,
  PLATESORTFIELD_PBRATE: 6,
  PLATESORTFIELD_PERATE: 7
};

/**
 * @enum {number}
 */
proto.Qot_Common.ClosePriceType = {
  CLOSEPRICETYPE_UNKNOWN: 0,
  CLOSEPRICETYPE_5MINUTE: 1,
  CLOSEPRICETYPE_5DAY: 2,
  CLOSEPRICETYPE_20DAY: 3,
  CLOSEPRICETYPE_YTD: 4
};

/**
 * @enum {number}
 */
proto.Qot_Common.TradeDateType = {
  TRADEDATETYPE_WHOLE: 0,
  TRADEDATETYPE_MORNING: 1,
  TRADEDATETYPE_AFTERNOON: 2
};

/**
 * @enum {number}
 */
proto.Qot_Common.WarrantType = {
  WARRANTTYPE_UNKNOWN: 0,
  WARRANTTYPE_BUY: 1,
  WARRANTTYPE_SELL: 2,
  WARRANTTYPE_BULL: 3,
  WARRANTTYPE_BEAR: 4,
  WARRANTTYPE_INLINE: 5
};

/**
 * @enum {number}
 */
proto.Qot_Common.OptionType = {
  OPTIONTYPE_UNKNOWN: 0,
  OPTIONTYPE_CALL: 1,
  OPTIONTYPE_PUT: 2
};

/**
 * @enum {number}
 */
proto.Qot_Common.IndexOptionType = {
  INDEXOPTIONTYPE_UNKNOWN: 0,
  INDEXOPTIONTYPE_NORMAL: 1,
  INDEXOPTIONTYPE_SMALL: 2
};

/**
 * @enum {number}
 */
proto.Qot_Common.OptionAreaType = {
  OPTIONAREATYPE_UNKNOWN: 0,
  OPTIONAREATYPE_AMERICAN: 1,
  OPTIONAREATYPE_EUROPEAN: 2,
  OPTIONAREATYPE_BERMUDA: 3
};

/**
 * @enum {number}
 */
proto.Qot_Common.AssetClass = {
  ASSETCLASS_UNKNOW: 0,
  ASSETCLASS_STOCK: 1,
  ASSETCLASS_BOND: 2,
  ASSETCLASS_COMMODITY: 3,
  ASSETCLASS_CURRENCYMARKET: 4,
  ASSETCLASS_FUTURE: 5,
  ASSETCLASS_SWAP: 6
};

/**
 * @enum {number}
 */
proto.Qot_Common.Currency = {
  CURRENCY_UNKNOWN: 0,
  CURRENCY_HKD: 1,
  CURRENCY_USD: 2,
  CURRENCY_CNH: 3,
  CURRENCY_CNY: 4,
  CURRENCY_JPY: 5,
  CURRENCY_SGD: 6,
  CURRENCY_EUR: 7,
  CURRENCY_CAD: 8
};

/**
 * @enum {number}
 */
proto.Qot_Common.ExchangeType = {
  EXCHANGETYPE_UNKNOWN: 0,
  EXCHANGETYPE_HK_MAINBOARD: 1,
  EXCHANGETYPE_HK_GEMBOARD: 2,
  EXCHANGETYPE_HK_HKEX: 3,
  EXCHANGETYPE_US_NYSE: 4,
  EXCHANGETYPE_US_NASDAQ: 5,
  EXCHANGETYPE_US_PINK: 6,
  EXCHANGETYPE_US_AMEX: 7,
  EXCHANGETYPE_US_OPTION: 8,
  EXCHANGETYPE_US_NYMEX: 9,
  EXCHANGETYPE_US_COMEX: 10,
  EXCHANGETYPE_US_CBOT: 11,
  EXCHANGETYPE_US_CME: 12,
  EXCHANGETYPE_US_CBOE: 13,
  EXCHANGETYPE_CN_SH: 14,
  EXCHANGETYPE_CN_SZ: 15,
  EXCHANGETYPE_CN_STIB: 16,
  EXCHANGETYPE_SG_SGX: 17,
  EXCHANGETYPE_JP_OSE: 18
};

goog.object.extend(exports, proto.Qot_Common);
