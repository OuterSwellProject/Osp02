// top view class
function TopView() {
  
  var self = Ti.UI.createView();
  self.hide();
  
  var style = require("ui/top/style")

  // タイトルラベル
  var titleLabel = Ti.UI.createLabel(style["titleLabel"]);
  self.add(titleLabel);
  
  // 画像作成
  var coverflow = makeCoverflow();
  self.add(coverflow);

  // テーブルビュー作成
  var table = makeInfoTable();
  self.add(table);


  // 画面更新のイベント定義
  Ti.App.addEventListener('top:display',function(e){
  });
  
  self.show();
  
  return self;
}

// export
module.exports = TopView;



// 画像作成 //{{{
function makeCoverflow() {

  var images = [];
  for (var c = 0; c < 8; c++) {
    // Resourcesディレクトリからの相対パス？
    images[c]='./images/n0'+ (c+1) +'.jpg';
  }

  var rowData = [];
  var data = ['あああ', 'いいい', 'ううう', 'えええ', 'おおお', 'かかか', 'ききき'];


  for (var i = 0; i < data.length; i++) {
    // row
    var row = Ti.UI.createTableViewRow({
      selectedBackgroundColor : '#fff',
      className :'datarow',
    });
        
    // title
    var title = Ti.UI.createLabel({
      text:data[i]
    });
    title.rowNum = i;
    row.add(title);

    // add row
    rowData.push(row);
  }

  // カバーフロー作成
  return Ti.UI.iOS.createCoverFlowView({
    images: images,
    backgroundColor: '#000',
    height:200,
    top:0
  });

}
//}}}

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
    rowHeight : 80,
    top:200
  });
  

}
//}}}

