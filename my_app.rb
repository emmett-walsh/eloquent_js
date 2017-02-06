require 'sinatra/base'

class MyApp < Sinatra::Base
  get '/' do
    'hello world'
  end

  get '/chapter_2' do
    erb :chapter_2
  end
end
