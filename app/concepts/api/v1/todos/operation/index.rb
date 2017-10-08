# INDEX
class Api::V1::Todos::Index < Trailblazer::Operation
  extend Representer::DSL

  representer :render do
    include Representable::JSON::Collection

    items class: Todo do
      property :id, writeable: false
      property :title
      property :completed
    end
  end

  step :model!

  def model!(options, params:, **)
    options["model"] = Todo.all
  end
end
