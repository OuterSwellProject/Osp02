(function() {
  
  // ウィンドウ
  var TopWindow = require('ui/top/window');
   
  var AppTabGroup = require('ui/AppTabGroup');
   // ウィンドウ一覧をあらかじめ設定（最初に定義するウィンドウが最初に表示される画面となる）
  var tabs = new AppTabGroup({
    titleid:'top',
    window: new TopWindow('TOP')
  });
  
  tabs.open();
})();
