require 'spec_helper'

describe 'chapter 2', type: :feature do
  it 'has a greeting button' do
    visit '/chapter_2'
    click_button 'hello'
    expect(page).to have_content 'hello'
  end

  it 'has a trianle loop button' do
    visit '/chapter_2'
    click_button 'loop triangle'
    expect(page).to have_content '#######'
  end
end
