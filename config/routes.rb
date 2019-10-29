Rails.application.routes.draw do
  resources :type_compares
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#index'
  resources :type_compares, only: :index
  resources :moves, only: :index
end
