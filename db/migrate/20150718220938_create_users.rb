class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :firstname, null: false, default: ""
      t.string :lastname,  null: false, default: ""

      t.timestamps null: false
    end
  end
end
