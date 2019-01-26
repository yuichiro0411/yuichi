Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'tells#index'
  get 'tells/about' => 'tells#about'
  get 'tells/portfolio' => 'tells#portfolio'
  get 'article/index' => 'article#index'
 end
