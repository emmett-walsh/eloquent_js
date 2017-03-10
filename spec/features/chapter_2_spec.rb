require 'spec_helper'

describe 'chapter 2', type: :feature do
  describe 'greeting button' do
    it 'says hello on click' do
      visit '/chapter_2'
      click_button 'hello'
      expect(page).to have_content 'hello'
    end
  end

  describe 'triangle button' do
    it 'displays a trianlge of # on click' do
      visit '/chapter_2'
      click_button 'loop triangle'
      expect(page).to have_content '#######'
    end
  end

  describe 'fizzbuzz button' do
    it 'displays fizzbuzz values for 1-21' do
      visit '/chapter_2'
      click_button 'FizzBuzz'
      expect(page).to have_content '1, 2, Fizz, 4, Buzz'
    end
  end
end
