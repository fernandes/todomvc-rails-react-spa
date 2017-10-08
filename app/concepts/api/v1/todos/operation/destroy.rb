# DESTROY
class Api::V1::Todos::Destroy < Trailblazer::Operation
  extend Representer::DSL
  step Model( Todo, :find_by )
  step :destroy!

  representer :render, Api::V1::Todos::Create['representer.render.class']

  def destroy!(options, **)
    options['model'].destroy
    true
  end
end
