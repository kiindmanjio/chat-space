Rails.application.routes.draw do
  root 'groups#index'
  resources :groups, only: [:index]

end
