class PartiesController < ApplicationController

  def create
    @parties = Party.create(party_params)
    redirect_to root_path
  end

  private

  def party_params
    params.require(:user).permit(:pokemon1, :move1_1, :move1_2, :move1_3, :move1_4, :pokemon2, :move2_1, :move2_2, :move2_3, :move2_4, :pokemon3, :move3_1, :move3_2, :move3_3, :move3_4, :pokemon4, :move4_1, :move4_2, :move4_3, :move4_4, :pokemon5, :move5_1, :move5_2, :move5_3, :move5_4, :pokemon6, :move6_1, :move6_2, :move6_3, :move6_4)
  end

end