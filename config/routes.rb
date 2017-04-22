Rails.application.routes.draw do
  root 'groups#index'
  devise_for :users
  resources :groups do
    resources :messages, only: [:index, :create, :edit]
  end
  resources :users, only: [] do
    collection do
      get 'search'
    end
  end
end
