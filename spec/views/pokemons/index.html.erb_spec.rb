require 'rails_helper'

RSpec.describe "pokemons/index", type: :view do
  before(:each) do
    assign(:pokemons, [
      Pokemon.create!(),
      Pokemon.create!()
    ])
  end

  it "renders a list of pokemons" do
    render
  end
end
