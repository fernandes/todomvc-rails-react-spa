class Api::V1::Controller < ActionController::API
  include Knock::Authenticable
  before_action :authenticate_user
  before_action :set_current_user

  def default_handler
    ->(m) do
      m.present { |result| render json: result["representer.render.class"].new(result["model"]).to_json }
      m.created { |result| render json: result["representer.render.class"].new(result["model"]).to_json, status: :created }
      m.success { |result| render json: result["representer.render.class"].new(result["model"]).to_json }
      m.invalid { |result| render json: result["representer.errors.class"].new(result["result.contract.default"].errors.messages).to_json, status: :unprocessable_entity }
      m.not_found { |result| render json: {}, status: :not_found }
      m.unauthenticated { |result| render json: result["representer.render.class"].new(result["model"]).to_json }
    end
  end

  def endpoint(operation_class, options={}, &block)
    options[:args] ||= [params, {}]
    options[:args][1]['document'] = request.body.read
    Api::Endpoint.(operation_class, default_handler, *options[:args], &block)
  end

  def set_current_user
    params[:current_user] = current_user
    return if current_user.nil?
  end
end
