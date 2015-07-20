require 'sinatra'

get '/' do
  content_type('text/html')
  erb :index
end
