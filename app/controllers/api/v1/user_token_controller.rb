class Api::V1::UserTokenController < Knock::AuthTokenController
  def entity_class
    User
  end
end
