
function TopToolbar() {
  
  
  // 追加ボタン
  var qrButton = Ti.UI.createButton({
    //backgroundImage:'./image/phone_camera.png',
    title:'QR',
    height:28,
    width:31
  });
  

  
  // ツールバー本体
  // TODO iOS系のメソッド使っているので、Androidが対応するのか調査必要
  var self = Ti.UI.iOS.createToolbar({
    items:[qrButton],
    bottom:'base',
    borderTop:true,
    borderBottom:true,
    barColor:'#336699'
  });
  
    // 追加ボタンイベント
  qrButton.addEventListener('click',function(e){
    // ボタン押下を通知
    self.fireEvent('QRCode');
  });
    
  return self;
}


// export
module.exports = TopToolbar;
