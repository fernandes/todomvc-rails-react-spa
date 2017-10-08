class Api::V1::Todos::Create < Trailblazer::Operation
  extend Contract::DSL
  extend Representer::DSL

  contract do
    include Representable::JSON
    defaults render_nil: true

    property :id, writeable: false
    property :title
    property :completed
    validates :title, presence: true
  end

  # if wanna parse with something different from contract
  # representer :parse do
  # end

  # representer :render do
  # end
  # or
  representer :render, Representer.infer(self["contract.default.class"], format: Representable::JSON)

  representer :errors, ::ErrorsRepresenter

  step Model( Todo, :new )
  step :set_user
  step Contract::Build()
  step Contract::Validate( representer: Representer.infer(self["contract.default.class"], format: Representable::JSON))
  failure :fail!
  step Contract::Persist()

  def set_user(options, params:, **)
    options['model'].user = params['current_user']
  end
end
