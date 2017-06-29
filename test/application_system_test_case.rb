require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  if ENV['CHROME_HEADLESS']
    driven_by :selenium, using: :chrome, options: { args: ['headless'] }
  else
    driven_by :selenium, using: :chrome, screen_size: [1400, 1400]
  end

  if ENV['CHROME_DRIVER_PATH']
    Selenium::WebDriver::Chrome.driver_path=ENV['CHROME_DRIVER_PATH']
  end
end
