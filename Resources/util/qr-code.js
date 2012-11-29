
var logger = require('util/log');

// QRコード読み取り
exports.read = function(callback) {

  var TiBar = require('tibar');

  return function(){
    TiBar.scan({
      configure: getConfigure(),

      success:function(data){
        logger.info('TiBar success callback!');
        if(data && data.barcode){
          callback(data.barcode);
        }
      },
      cancel:function(){
        logger.info('TiBar cancel callback!');
      },
      error:function(){
        logger.info('TiBar error callback!');
      }
    });
  }

};


// 実機かシミュレーターかによって、QRコードの読み取り設定を変える
function getConfigure() {
  if (Titanium.Platform.model == 'google_sdk' || Titanium.Platform.model == 'Simulator') {
    // シミュレーター
    return simulatorConfig;
  } else {
    // 実機
    return realConfig;
  }
}

// QRコード読み取り設定 //{{{
var simulatorConfig = {
  classType: "ZBarReaderController", // ZBarReaderViewController, ZBarReaderController
  sourceType: "Album", // Library(C), Camera(VC), Album(C)
  cameraMode: "Default", // Default, Sampling, Sequence
  config:{
    "showsCameraControls":true, // (VC)
    "showsZBarControls":true,
    "tracksSymbols":true, // the tracking rectangle that highlights barcodes
    "enableCache":true,
    "showsHelpOnFail":true,
    "takesPicture":false
  },
  custom:{ // not implemented yet
    "scanCrop":'',
    "CFG_X_DENSITY":'',
    "CFG_Y_DENSITY":'',
    "continuous":''
  },
  symbol:{
    "QR-Code":true,
    "CODE-128":false,
    "CODE-39":false,
    "I25":false,
    "DataBar":false,
    "DataBar-Exp":false,
    "EAN-13":false,
    "EAN-8":false,
    "UPC-A":false,
    "UPC-E":false,
    "ISBN-13":false,
    "ISBN-10":false,
    "PDF417":false
  }
};

var realConfig = {
  classType: "ZBarReaderViewController",
  sourceType: "Camera",
  cameraMode: "Default", // Default, Sampling, Sequence
  config:{
    "showsCameraControls":true, // (VC)
    "showsZBarControls":true,
    "tracksSymbols":true, // the tracking rectangle that highlights barcodes
    "enableCache":true,
    "showsHelpOnFail":true,
    "takesPicture":false
  },
};
//}}}

