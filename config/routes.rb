Rails.application.routes.draw do
  root 'dashboard#index'

  namespace :api do
    resources :events, only: [:index, :create, :update] do
    	collection do
    		get :search 
    	end
    end
  end
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
