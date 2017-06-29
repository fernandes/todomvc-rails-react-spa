require 'test_helper'

class TodoServerSideRenderingTest < ActionDispatch::IntegrationTest
  test "server side rendering works" do
    get "/completed"
    assert_response :success

    # this is inside h1 tag in a react component (Header)
    # so if `todos` is found, component was rendered on server side
    assert_select "h1", "todos"
  end
end
