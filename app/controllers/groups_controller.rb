class GroupsController < ApplicationController

  before_action :set_group, only: [:edit,:update]

  def index
    @groups = current_user.groups
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.create(group_params)
    if @group.save
      flash[:notice] = "グループが作成されました。"
      redirect_to groups_path
    else
      flash[:notice] = "タイトルを入力してください。"
      redirect_to new_group_path
    end
  end


  def edit
  end

  def update
    if @group.update(group_params)
      flash[:notice] = "グループが更新されました。"
      redirect_to  group_messages_path(@group)
    else
      flash[:notice] = "グループが更新できていません。"
      redirect_to edit_group_path
    end
  end





private
 def group_params
   params.require(:group).permit(:name, user_ids: [])
 end
 def set_group
   @group = Group.find(params[:id])
 end
end
