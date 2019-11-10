class Partys < ActiveRecord::Migration[5.2]
  def change
    create_table :partys do |t|
      t.json :party_json
      t.timestamps
    end
  end
end
