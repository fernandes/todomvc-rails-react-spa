class Todo < ApplicationRecord
  belongs_to :user

  default_scope { order(:created_at) }
end
