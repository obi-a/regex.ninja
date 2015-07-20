require 'rails_helper'

RSpec.describe "regexes/show", type: :view do
  before(:each) do
    @regex = assign(:regex, Regex.create!(
      :expression => "Expression",
      :title => "Title",
      :user => nil,
      :text => nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Expression/)
    expect(rendered).to match(/Title/)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
  end
end
