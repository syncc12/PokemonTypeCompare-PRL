class RemoveWeakness1FromPokemons < ActiveRecord::Migration[5.2]
  def change
    remove_column :pokemons, :weakness1, :string
    remove_column :pokemons, :weakness2, :string
  end
end
