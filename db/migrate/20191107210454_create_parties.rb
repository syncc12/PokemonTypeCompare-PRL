class CreateParties < ActiveRecord::Migration[5.2]
  def change
    create_table :parties do |t|
      t.string :user
      t.string :pokemon1
      t.string :move1_1
      t.string :move1_2
      t.string :move1_3
      t.string :move1_4
      t.string :pokemon2
      t.string :move2_1
      t.string :move2_2
      t.string :move2_3
      t.string :move2_4
      t.string :pokemon3
      t.string :move3_1
      t.string :move3_2
      t.string :move3_3
      t.string :move3_4
      t.string :pokemon4
      t.string :move4_1
      t.string :move4_2
      t.string :move4_3
      t.string :move4_4
      t.string :pokemon5
      t.string :move5_1
      t.string :move5_2
      t.string :move5_3
      t.string :move5_4
      t.string :pokemon6
      t.string :move6_1
      t.string :move6_2
      t.string :move6_3
      t.string :move6_4
      t.timestamps
    end
  end
end
