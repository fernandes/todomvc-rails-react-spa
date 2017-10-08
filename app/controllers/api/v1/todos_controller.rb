class Api::V1::TodosController < Api::V1::Controller
  def index
    endpoint Api::V1::Todos::Index
  end

  def clear_completed
    endpoint Api::V1::Todos::ClearCompleted
  end

  def toggle_status
    endpoint Api::V1::Todos::ToggleStatus
  end

  def create
    endpoint Api::V1::Todos::Create
  end

  def show
    endpoint Api::V1::Todos::Show
  end

  def update
    endpoint Api::V1::Todos::Update
  end

  def destroy
    endpoint Api::V1::Todos::Destroy
  end
end
