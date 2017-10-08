# INDEX
class Api::V1::Todos::ToggleStatus < Trailblazer::Operation
  extend Representer::DSL

  representer :render do
    include Representable::JSON::Collection

    items class: Todo do
      property :id, writeable: false
      property :title
      property :completed
    end
  end

  step :toggle_status!
  step :model!

  def toggle_status!(options, params:, **)
    status = params[:status].nil? ? false : !!params[:status]
    Todo.where(user: params['current_user']).update_all(completed: status)
  end

  def model!(options, params:, **)
    options["model"] = Todo.all
  end
end
