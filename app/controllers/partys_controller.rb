class PartysController < ApplicationController
  # before_action :authenticate_user!

  def new
    @party = Party.new
  end

  def index
  end

  def show
    @party = Party.find(params[:id])
  end

  def create
    
    @partys = current_user.partys.create(party_params)
    redirect_to party_path(current_party)
  end

  # def update
  #   current_party.update_attributes(party_params)
  #   render plain: 'Party Saved'
  # end 

  helper_method :current_party
  def current_party
    @current_party ||= current_user.partys.find([:id])
  end

  

  private

  def party_params
    params.require(:party).permit(:party_name, :party_json)
  end

end