json.array!(@regexes) do |regex|
  json.extract! regex, :id, :expression, :title, :user_id, :text_id
  json.url regex_url(regex, format: :json)
end
