class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.integer :pokedex_number
      t.string :name
      t.string :type1
      t.string :type2
      t.string :weakness1
      t.string :weakness2
      t.timestamps
    end
  end
end
