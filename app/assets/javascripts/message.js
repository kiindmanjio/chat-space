$(function(){
  function buildHTML(message){//(message)の中身は21行目のデータ。以下の処理ではmessageとして使える。
    var html = $('<string class = "contents__right__middle__name-date-text--name">' +
                message.name + '</string>' +
                '<string class = "contents__right__middle__name-date-text--date">' +
                message.time + '</string>' +
                '<p class = "contents__right__middle__name-date-text__text">' +
                message.body + '</p>');
                return html;
                }
  $('#new_message').on("submit", function(e){ //view画面の送信ボタンを押したら発火。
    e.preventDefault(); //取得した要素('#new_message')のイベントをキャンセルする。
    var formdata = new FormData ($(this).get(1)); //FormData オブジェクトは、XMLHttpRequest を使用して送信するためのキーと値のペアのセットを収集可能にする。
   //($(this)get(0))は(this)のフォームのデータを取得している。それに対しnew FormDataによってFormDataオブジェクトを生成.
    $.ajax({
      type: 'POST',//routsにてhttpメソッドがPOST、且つ、
      url: 'messages',//routesにてpathがmessages、ルーティングが読まれる。
      data: formdata,//サーバーにformdata(10行目)のデータを送信。
      processData: false,//何も指定しないとデフォルト値であるtrueとして読まれ、content-typeである"application/x-www-form-urlencoded"に合わせた形式でクエリー文字列へ変換されてしまい今回の場合はエラー(urlの中に文字が入るparams)。
      contentType: false,//content-typeヘッダの値を、fomdataオブジェクトによって自動で適切に変換してくれるから、ここではfalseにする。
      dataType: 'json',//datatypeはサーバーから返されるデータ型を指定する。jsonと指定していることによってjson形式のデータとして評価し、javascriptのオブジェクトに変換する。
    })//ここでmessagecontrollerのcreateアクションでformat.jsonが読まれたらcreate.json.jbuilderが読まれて、json型のデータが生成。されそれが20行目の(data)に入る
    .done(function(data){
      var html = buildHTML(data);//(data)を引数に2行目のbuildHtMLメソッドが呼ばれる。
      $('.contents__right__middle__name-date-text').append(html);
      $('#new_message')[0].reset();
      $('input').prop('disabled', false);
    }).fail(function(){
      alert('error');
    });
  });
});


// json.time @message.created_at
// @messageはmessage_controllerのcreateアクションの中の@messageのこと。この記述は@message.created_atの値をtimeに入れてることによって、message.jsファイルのbuildHTML(message)メソッドの中でmessage.timeと書くだけで時間が表示されるようになる。
// json.body @message.body
// json.name @message.user.name

