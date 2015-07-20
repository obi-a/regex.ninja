json.array!(@texts) do |text|
  json.extract! text, :id, :plaintext, :code, :user_id
  json.url text_url(text, format: :json)
end
