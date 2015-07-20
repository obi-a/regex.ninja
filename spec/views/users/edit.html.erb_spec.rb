require 'rails_helper'

RSpec.describe "users/edit", type: :view do
  before(:each) do
    @user = assign(:user, User.create!(
      :firstname => "MyString",
      :lastname => "MyString",
      :email => "MyString"
    ))
  end

  it "renders the edit user form" do
    render

    assert_select "form[action=?][method=?]", user_path(@user), "post" do

      assert_select "input#user_firstname[name=?]", "user[firstname]"

      assert_select "input#user_lastname[name=?]", "user[lastname]"

      assert_select "input#user_email[name=?]", "user[email]"
    end
  end
end
