require 'rails_helper'
require 'pry-rails'


 describe MessagesController do
  let(:group) {create(:group)}
  let(:user) {create(:user)}
  let(:user_groups) {create(:user_groups)}
    before do
      login_user user
    end
    describe 'GET#index' do
      before do
        get :index, params: {group_id: group}
      end
      it 'assigns the requested group to @group' do
        expect(assigns(:gorup)).to eq group
      end
    end
 end
