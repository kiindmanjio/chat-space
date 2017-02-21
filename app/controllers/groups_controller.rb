class GroupsController < ApplicationController

  def index

  end

  def new
    @groups = Group.new
  end

  def create
    group = Group.create(group_params)
    if group.save
      flash[:notice] = "グループが作成されました。"
      redirect_to group_path
    else
      flash[:notice] = "タイトルを入力してください。"
      redirect_to new_group_path
    end
  end

  def edit
    @groups = Group.find(params[:id])
  end

  def update
    group = Group.find(params[:id])
    if group.update(group_params)
      flash[:notice] = "グループが更新されました。"
      redirect_to group_path
    else
      flash[:notice] = "グループが更新できていません。"
      redirect_to edit_group_path
    end
  end





private
 def group_params
   params.require(:group).permit(:name, user_ids: [])
 end
end
