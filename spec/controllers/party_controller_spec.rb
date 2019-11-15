require 'rails_helper'

RSpec.describe PartysController, type: :controller do
  describe "partys#index" do
    it "should successfully load the page" do
      get :index
      expect(response).to have_http_status :success
    end
  end
end
