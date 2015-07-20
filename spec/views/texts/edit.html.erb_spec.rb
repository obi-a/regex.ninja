require 'rails_helper'

RSpec.describe "texts/edit", type: :view do
  before(:each) do
    @text = assign(:text, Text.create!(
      :plaintext => "MyString",
      :code => "MyString",
      :user => nil
    ))
  end

  it "renders the edit text form" do
    render

    assert_select "form[action=?][method=?]", text_path(@text), "post" do

      assert_select "input#text_plaintext[name=?]", "text[plaintext]"

      assert_select "input#text_code[name=?]", "text[code]"

      assert_select "input#text_user_id[name=?]", "text[user_id]"
    end
  end
end
