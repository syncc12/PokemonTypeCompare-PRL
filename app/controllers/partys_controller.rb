class PartysController < ApplicationController
  before_action :authenticate_user!

  def new
    @party = User.find(current_user.id).new
  end

  def index
  end

  def create
    @partys = Party.create(party_params)
    redirect_to partys_path
  end

  # def update
  #   current_party.update_attributes(party_params)
  #   render plain: 'Party Saved'
  # end 

  # def current_party
  #   @current_party ||= Party.find(params[:id])
  # end

  def add_user_to_partys
    if Party.exists?(user_id: current_user.id)

    else

    end
  end

  private

  def party_params
    params.require(:party).permit(:party_json)
  end

end