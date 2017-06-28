class TodoController < ApplicationController
  helper_method :request_filter

  def index
  end

  private
    def request_filter
      filter = request.path.gsub(/^\//, '')
      return 'all' if filter.empty?
      filter
    end
end
