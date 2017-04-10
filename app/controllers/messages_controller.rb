class MessagesController < ApplicationController

    def index#_leftからgroup_idが渡されている状態
      # binding.pry
      @groups = current_user.groups
      @message = Message.new
      @group = Group.find(params[:group_id])
      @messages = @group.messages
    end

    def create
      # binding.pry
      @message = Message.create(message_params)
      if @message.save
        respond_to do |format|
          format.html {redirect_to group_messages_path(params[:group_id])}
          format.json
        end
      else
        flash[:notice] = "本文を入力してください。"
        redirect_to group_messages_path
      end
    end




  private
    def message_params
      params.require(:message).permit(:body).merge(group_id: params[:group_id], user_id: current_user.id)
    end
end



