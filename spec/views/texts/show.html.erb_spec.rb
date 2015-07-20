require 'rails_helper'

RSpec.describe "texts/show", type: :view do
  before(:each) do
    @text = assign(:text, Text.create!(
      :plaintext => "Plaintext",
      :code => "Code",
      :user => nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Plaintext/)
    expect(rendered).to match(/Code/)
    expect(rendered).to match(//)
  end
end
