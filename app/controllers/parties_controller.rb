class PartiesController < ApplicationController

  def index
    @party = Party.new
    params[:rpokemon1]
    params[:rmove1_1]
    params[:rmove1_2]
    params[:rmove1_3]
    params[:rmove1_4]
    params[:rpokemon2]
    params[:rmove2_1]
    params[:rmove2_2]
    params[:rmove2_3]
    params[:rmove2_4]
    params[:rpokemon3]
    params[:rmove3_1]
    params[:rmove3_2]
    params[:rmove3_3]
    params[:rmove3_4]
    params[:rpokemon4]
    params[:rmove4_1]
    params[:rmove4_2]
    params[:rmove4_3]
    params[:rmove4_4]
    params[:rpokemon5]
    params[:rmove5_1]
    params[:rmove5_2]
    params[:rmove5_3]
    params[:rmove5_4]
    params[:rpokemon6]
    params[:rmove6_1]
    params[:rmove6_2]
    params[:rmove6_3]
    params[:rmove6_4]
  end

  def create
    @parties = Party.create(party_params)
    redirect_to parties_path
  end



  private

  def party_params
    params.require(:party).permit(:user, :pokemon1, :move1_1, :move1_2, :move1_3, :move1_4, :pokemon2, :move2_1, :move2_2, :move2_3, :move2_4, :pokemon3, :move3_1, :move3_2, :move3_3, :move3_4, :pokemon4, :move4_1, :move4_2, :move4_3, :move4_4, :pokemon5, :move5_1, :move5_2, :move5_3, :move5_4, :pokemon6, :move6_1, :move6_2, :move6_3, :move6_4)
  end

end