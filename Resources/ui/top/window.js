// TOPウィンドウ
function TopWindow(windowTitle) {
  
  var TopView = require("ui/top/view");
  var TopToolbar = require("ui/top/toolbar");
  
  // ウィンドウ生成
  var self = Ti.UI.createWindow({
    title:windowTitle,
    backgroundColor:'#ffffff'
  });
  
  // TOPビュー追加 
  var topView = new TopView();
  self.add(topView);
  
  // ツールバー生成
  var toolbar = new TopToolbar();
  self.add(toolbar);
  
  return self;
}

// export
module.exports = TopWindow;
