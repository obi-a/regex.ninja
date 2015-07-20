require 'rails_helper'

RSpec.describe "users/new", type: :view do
  before(:each) do
    assign(:user, User.new(
      :firstname => "MyString",
      :lastname => "MyString",
      :email => "MyString"
    ))
  end

  it "renders new user form" do
    render

    assert_select "form[action=?][method=?]", users_path, "post" do

      assert_select "input#user_firstname[name=?]", "user[firstname]"

      assert_select "input#user_lastname[name=?]", "user[lastname]"

      assert_select "input#user_email[name=?]", "user[email]"
    end
  end
end
