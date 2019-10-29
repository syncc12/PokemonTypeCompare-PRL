class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :moves, :type, :move_type
  end
end
