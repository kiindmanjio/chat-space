class GroupsController < ApplicationController

  def index

  end

  def new
    @groups = Group.new
    # @groups.users << current_user
  end

  def create
    group = Group.create(group_params)
    if group.save
      flash[:notice] = "グループが作成されました。"
      # redirect_to 新グループ
    else
      flash[:notice] = "タイトルを入力してください。"
      redirect_to action: 'new'
  end
end

  def edit

  end




private
 def group_params
   params.require(:group).permit(:name, user_ids: [])
 end
end
