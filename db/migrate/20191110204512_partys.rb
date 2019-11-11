class Partys < ActiveRecord::Migration[5.2]
  def change
    create_table :partys do |t|
      t.string :party_name
      t.json :party_json
      t.integer :user_id
      t.timestamps
    end
    add_index :partys, :user_id
  end
end
