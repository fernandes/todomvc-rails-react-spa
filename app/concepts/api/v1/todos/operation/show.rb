require_dependency Rails.root.join('app/concepts/api/v1/todos/operation/create')

class Api::V1::Todos::Show < Trailblazer::Operation
  extend Representer::DSL
  step Model( Todo, :find_by )

  representer :render, Api::V1::Todos::Create['representer.render.class']
end
