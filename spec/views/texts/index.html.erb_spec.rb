require 'rails_helper'

RSpec.describe "texts/index", type: :view do
  before(:each) do
    assign(:texts, [
      Text.create!(
        :plaintext => "Plaintext",
        :code => "Code",
        :user => nil
      ),
      Text.create!(
        :plaintext => "Plaintext",
        :code => "Code",
        :user => nil
      )
    ])
  end

  it "renders a list of texts" do
    render
    assert_select "tr>td", :text => "Plaintext".to_s, :count => 2
    assert_select "tr>td", :text => "Code".to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
  end
end
