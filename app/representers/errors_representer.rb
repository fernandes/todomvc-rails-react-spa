require 'representable/json/hash'

class ErrorsRepresenter < Representable::Decorator
  include Representable::JSON
  include Representable::JSON::Hash
  self.representation_wrap = :errors
  property :messages do
    include Representable::JSON::Hash
    values class: OpenStruct
  end
end
