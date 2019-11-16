Rails.application.routes.draw do
  devise_for :users
  # resources :type_compares
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'partys#index'
  get 'how_to_use', to: 'static_pages#how_to_use'
  # resources :type_compares, only: :index
  # resources :partys, only: [:new, :create, :index, :update, :show] 
  # resources :partys, only: [:index] 
end
