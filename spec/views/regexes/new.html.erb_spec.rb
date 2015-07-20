require 'rails_helper'

RSpec.describe "regexes/new", type: :view do
  before(:each) do
    assign(:regex, Regex.new(
      :expression => "MyString",
      :title => "MyString",
      :user => nil,
      :text => nil
    ))
  end

  it "renders new regex form" do
    render

    assert_select "form[action=?][method=?]", regexes_path, "post" do

      assert_select "input#regex_expression[name=?]", "regex[expression]"

      assert_select "input#regex_title[name=?]", "regex[title]"

      assert_select "input#regex_user_id[name=?]", "regex[user_id]"

      assert_select "input#regex_text_id[name=?]", "regex[text_id]"
    end
  end
end
