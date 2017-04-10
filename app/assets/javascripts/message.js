$(function(){
  function buildHTML(message){
    var html = $('<string class = "contents__right__middle__name-date-text--name">' + message.user.name + '</string>' + '<string class = "contents__right__middle__name-date-text--date">' + message.time + '</string>' + '<p class = "contents__right__middle__name-date-text__text">' + message.body + '</p>');
      return html;
    }

  $('.contents__right__right-bottom__form-send--send-button').click(function(e){
    e.preventDefault();
    var message = $('.contents__right__right-bottom__form-send--send-button');
    var formdata = message.val();

    $.ajax({
      type: 'POST',
      url: 'messages.json',
      processData: false,
      contentType: false,
      data: formdata,
      processData: false,//これがtrueだと、urlの中に文字が入るparamsとして送ろうとしてエらる
      contentType: false,//content-typeヘッダの値を、fomdataオブジェクトは自動で適切に変換してくれるから、こkではfalseにする。
      dataType: 'json'
    }).done(function(data){
      alert('yes!')
      var html = buildHTML(data);
      $('.contents__right__middle__name-date-text').append(html);
      message.val("");
    }).fail(function(){
      alert('error');
    });
  });
});
