$(function(){
  function buildHtmluser(user){
    var html =  '<li class = "append-user clearfix">' +
                '<div class = "chat-group-form__search">' + user.name + '</div>' +
                '<button id ="add_button" type = "button" data-user-name = "'+ user.name +'" + data-user-id = "'+user.id+'">' +'追加' + '</button>'
                '</li>'
    return html;
  }

  function AddUserHtml(id, name){
    var html =  '<li class = "append-user clearfix">' +
                '<input type = "hidden" name = "group[user_ids][]" value = "' + id + '">' +
                '<p class = "chat-group-user__name">' + name + '</p>' +
                '<button id = "remove_button">' + '削除' + '</button>'
                '</li>';

    return html;
  }

  $('#user-search-field').on('change', function(){
    var input = "";
    var input = $('#user-search-field').val();
    //trimは空白をなくして返してくれる。
     if (input.length !== 0){
        $.ajax({
          type:'GET',
           url:'/users/search',
           data:{keyword:input},
           dataType:'json',
          })
        .done(function(json){
             var new_html = "";
              $.each(json, function(i, data){
                new_html = buildHtmluser(data);
            });
            $('#user-search-result').append(new_html);
        });
      }
    });

  $(document).on('click', '#add_button', function(){
    var id = $(this).data('user-id');
    var name = $(this).data('user-name');
    var user = $(this).parent();
    user.remove();
    var new_html = AddUserHtml(id, name);
   $('#chat-group-users').append(new_html);
  });

  $(document).on('click','#remove_button',function(){
    $(this).parent().remove();
  });
});
