require 'rails_helper'

RSpec.describe "regexes/index", type: :view do
  before(:each) do
    assign(:regexes, [
      Regex.create!(
        :expression => "Expression",
        :title => "Title",
        :user => nil,
        :text => nil
      ),
      Regex.create!(
        :expression => "Expression",
        :title => "Title",
        :user => nil,
        :text => nil
      )
    ])
  end

  it "renders a list of regexes" do
    render
    assert_select "tr>td", :text => "Expression".to_s, :count => 2
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
  end
end
