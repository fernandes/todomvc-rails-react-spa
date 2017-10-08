Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'signup', edit: 'profile' }

  namespace :api do
    namespace :v1 do
      post 'user_token' => 'user_token#create'
      get 'user' => 'user#show'
      resources :todos do
        collection do
          put 'clear_completed'
          put 'toggle_status'
        end
      end
    end
  end

  match '*path', to: 'todo#index', via: :all
  root to: "todo#index"
end
