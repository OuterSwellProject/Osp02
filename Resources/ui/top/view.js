// top view class
function TopView() {
  
  var self = Ti.UI.createView();
  self.hide();
  
  var style = require("ui/top/style")

  var titleLabel = Ti.UI.createLabel(style["titleLabel"]);
  
  // テーブルビュー作成
  var table = makeInfoTable();

  self.add(titleLabel);
  self.add(table);
  
  // 画面更新のイベント定義
  Ti.App.addEventListener('top:display',function(e){
  });
  
  self.show();
  
  return self;
}

// export
module.exports = TopView;




// お知らせ一覧作成 //{{{
function makeInfoTable() {

  // お知らせデータ作成
  var rowData = [];
  for (var i = 0; i < 10; i++) {
    var row = Ti.UI.createTableViewRow({
      height:100
    });
    
    row.add(Ti.UI.createLabel({text:"お知らせ", left:100, top:0}));
   
    rowData.push(row);
  }


  // テーブルビュー作成
  return Ti.UI.createTableView({
    data : rowData,
    rowHeight : 80
  });
  

}
//}}}
