class TodoController < ApplicationController
  helper_method :request_filter
  caches_action :index, cache_path: { version: 1 }

  def index
  end

  private
    def request_filter
      filter = request.path.gsub(/^\//, '')
      return 'all' if filter.empty?
      filter
    end
end
