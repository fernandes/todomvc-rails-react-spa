# INDEX
class Api::V1::Todos::ClearCompleted < Trailblazer::Operation
  extend Representer::DSL

  representer :render do
    include Representable::JSON::Collection

    items class: Todo do
      property :id, writeable: false
      property :title
      property :completed
    end
  end

  step :clear_completed!
  step :model!

  def clear_completed!(options, params:, **)
    Todo.where(completed: true, user: params['current_user']).destroy_all
  end

  def model!(options, params:, **)
    options["model"] = Todo.all
  end
end
