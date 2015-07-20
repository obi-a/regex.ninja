require "rails_helper"

RSpec.describe RegexesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/regexes").to route_to("regexes#index")
    end

    it "routes to #new" do
      expect(:get => "/regexes/new").to route_to("regexes#new")
    end

    it "routes to #show" do
      expect(:get => "/regexes/1").to route_to("regexes#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/regexes/1/edit").to route_to("regexes#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/regexes").to route_to("regexes#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/regexes/1").to route_to("regexes#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/regexes/1").to route_to("regexes#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/regexes/1").to route_to("regexes#destroy", :id => "1")
    end

  end
end
