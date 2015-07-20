require 'rails_helper'

RSpec.describe "texts/new", type: :view do
  before(:each) do
    assign(:text, Text.new(
      :plaintext => "MyString",
      :code => "MyString",
      :user => nil
    ))
  end

  it "renders new text form" do
    render

    assert_select "form[action=?][method=?]", texts_path, "post" do

      assert_select "input#text_plaintext[name=?]", "text[plaintext]"

      assert_select "input#text_code[name=?]", "text[code]"

      assert_select "input#text_user_id[name=?]", "text[user_id]"
    end
  end
end
