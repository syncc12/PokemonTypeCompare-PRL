class CreateParties < ActiveRecord::Migration[5.2]
  def change
    create_table :parties do |t|
      t.string :user
      t.json :party_json
      t.string :pokemon1
      t.string :pokemon2
      t.string :pokemon3
      t.string :pokemon4
      t.string :pokemon5
      t.string :pokemon6
      t.timestamps
    end
  end
end
