require 'rails_helper'

RSpec.describe "pokemons/show", type: :view do
  before(:each) do
    @pokemon = assign(:pokemon, Pokemon.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
