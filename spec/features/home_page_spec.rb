require 'spec_helper'

describe 'the home page', type: :feature do
  it 'says hello' do
    visit '/'
    expect(page).to have_content 'hello world'
  end
end
