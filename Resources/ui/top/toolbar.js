
var logger = require('util/log');
var qrCode = require('util/qr-code');
var http = require('util/http');

function TopToolbar() {
  
  
  // 追加ボタン
  var qrButton = Ti.UI.createButton({
    //backgroundImage:'./image/phone_camera.png',
    title:'QR',
    height:28,
    width:31
  });
  

  // 追加ボタンイベント
  qrButton.addEventListener('click', qrCode.read(postToServer));
  
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


// サーバーへ送信
function postToServer(url) {
  http.post(url, {pass:"abc"}, callback)
}

// テスト用コールバック関数
function callback(json) {
  Ti.UI.createAlertDialog({
    title: "Callback",
    message: json
  }).show();
}
