
var logger = require('util/log');

function TopToolbar() {
  
  
  // 追加ボタン
  var qrButton = Ti.UI.createButton({
    //backgroundImage:'./image/phone_camera.png',
    title:'QR',
    height:28,
    width:31
  });
  

  // 追加ボタンイベント
  qrButton.addEventListener('click', codeReader());
  
  // ツールバー本体
  // TODO iOS系のメソッド使っているので、Androidが対応するのか調査必要
  var self = Ti.UI.iOS.createToolbar({
    items:[qrButton],
    bottom:'base',
    borderTop:true,
    borderBottom:true,
    barColor:'#336699'
  });
  
  
  return self;
}


// export
module.exports = TopToolbar;


// QRコード読み取り
function codeReader() {

  var TiBar = require('tibar');

  return function(){
    TiBar.scan({
      configure: getConfigure(),

      success:function(data){
        logger.info('TiBar success callback!');
        if(data && data.barcode){
          Ti.UI.createAlertDialog({
            title: "Scan result",
            message: "Barcode: " + data.barcode + " Symbology:" + data.symbology
          }).show();
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

}

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

