class CreatePartypokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :partypokemons do |t|
      t.integer :party_number
      t.string :user
      t.string :pokemon_name
      t.string :move1
      t.string :move2
      t.string :move3
      t.string :move4
      t.json :party_pokemon
      t.timestamps
    end
  end
end
