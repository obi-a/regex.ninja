class Text < ActiveRecord::Base
  belongs_to :user
  has_one :regex
end
