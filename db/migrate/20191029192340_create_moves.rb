class CreateMoves < ActiveRecord::Migration[5.2]
  def change
    create_table :moves do |t|
      t.integer :index_number
      t.string :move_name
      t.string :move_type
      t.string :category
      t.string :pp
      t.string :power
      t.string :accuracy
      t.string :generation
      t.timestamps
    end
  end
end
