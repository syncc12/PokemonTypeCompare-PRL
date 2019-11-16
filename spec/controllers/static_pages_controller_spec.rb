require 'rails_helper'

RSpec.describe StaticPagesController, type: :controller do

  describe "static_pages#how_to_use" do
    it "should successfully load the page" do
      get :how_to_use
      expect(response).to have_http_status :success
    end
  end

end
