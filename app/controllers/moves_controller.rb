class MovesController < ApplicationController

  def index
    @pokemons=Pokemon.all
    @moves=Move.all
  end

end
