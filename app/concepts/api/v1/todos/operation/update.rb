require_dependency Rails.root.join('app/concepts/api/v1/todos/operation/create')

class Api::V1::Todos::Update < Api::V1::Todos::Create
  step Model( Todo, :find_by ), replace: "model.build"
end
