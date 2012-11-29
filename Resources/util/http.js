
// HTTP接続を行う
exports.post = function (url, data, callback) {

  if(Ti.Network.online == false){
    // オフライン時
    Ti.UI.createAlertDialog({
      title: "Network Error",
      message: "ネットワークに繋がっていません。"
    }).show();
    
    return;
  }

  // HTTPクライアントオブジェクト生成
  var xhr = Titanium.Network.createHTTPClient();
  xhr.open('POST', url);

  // 受け取ったデータを処理するコールバック
  xhr.onload = function() {
    var json = JSON.parse(this.responseText);
    callback(json);
    // 解放
    release(xhr);
  }

  // エラー時
  xhr.onerror = function(e) {
    Ti.UI.createAlertDialog({
      title: "Network Error",
      message: e.error
    }).show();
    // 解放
    release(xhr);
  }

  // 送信
  xhr.send(data);

};



// メモリリーク回避
function release(xhr) {
  xhr.onload = null;
  xhr.onreadystatechange = null;
  xhr.ondatastream = null;
  xhr.onerror = null;
  xhr = null;
}
