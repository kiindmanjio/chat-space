class MessagesController < ApplicationController

    def index
      @groups = current_user.groups
      @message = Message.new
      @group = Group.find(params[:group_id])
      @messages = @group.messages
    end

    def create
      @message = Message.create(message_params)
      if @message.save
        redirect_to group_messages_path
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



