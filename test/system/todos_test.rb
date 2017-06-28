require "application_system_test_case"

class TodosTest < ApplicationSystemTestCase
  test 'list todos' do
    visit root_path
    assert_selector "h1", text: "todos"

    total_todo_items(3)
    items_left(2)
  end

  test 'add new todo' do
    visit root_path
    fill_in "What needs to be done?", with: 'New task!'
    find('input.new-todo').native.send_keys(:return)

    total_todo_items(4)
    items_left(3)
  end

  test 'edit todo' do
    visit root_path
    task = find('ul.todo-list li:nth-child(2)')

    # Edit Correct Name
    task.double_click
    within(task) do
      fill_in class: 'edit', with: 'New Name'
      find('input.edit').native.send_keys(:return)
    end
    assert_equal 'New Name', task.find('label').text

    # Edit Incorrect Name and Cancel
    task.double_click
    within(task) do
      fill_in class: 'edit', with: 'Incorrect Name'
      find('input.edit').native.send_keys(:escape)
    end
    assert_equal 'New Name', task.find('label').text
  end

  test 'destroy a todo' do
    visit root_path
    task = find('ul.todo-list li:nth-child(2)')
    task.hover
    task.find('button.destroy').click
    total_todo_items(2)
    items_left(1)
  end

  test 'mark as completed a todo' do
    visit root_path
    task = find('ul.todo-list li:nth-child(2)')
    within(task) do
      find('input.toggle').set(true)
    end
    total_todo_items(3)
    items_left(1)

    clear_completed

    total_todo_items(1)
    items_left(1)
  end

  test 'filters' do
    visit root_path
    total_todo_items(3)
    items_left(2)

    click_on 'Active'
    total_todo_items(2)
    items_left(2)

    click_on 'Completed'
    total_todo_items(1)
    items_left(2)

    click_on 'All'
    total_todo_items(3)
    items_left(2)
  end

  test 'toggle all' do
    visit root_path
    total_todo_items(3)
    items_left(2)

    find('input.toggle-all').set(true)
    total_todo_items(3)
    items_left(0)
    assert_selector('button', text: 'Clear completed')

    find('input.toggle-all').set(false)
    total_todo_items(3)
    items_left(3)
    refute_selector('button', text: 'Clear completed')
  end

  test 'routes' do
    visit completed_path
    total_todo_items(1)
    items_left(2)

    visit active_path
    total_todo_items(2)
    items_left(2)
  end

  private
    def clear_completed
      click_on('Clear completed')
    end

    def items_left(total)
      within('span.todo-count') do
        assert_equal total, find('strong').text.to_i
      end
    end

    def total_todo_items(total)
      within('ul.todo-list') do
        assert_equal total, find_all('li').count
      end
    end
end
