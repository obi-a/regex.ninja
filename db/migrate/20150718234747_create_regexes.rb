class CreateRegexes < ActiveRecord::Migration
  def change
    create_table :regexes do |t|
      t.string :expression, null: false, default: ""
      t.string :title, null: false, default: ""
      t.references :user, index: true, foreign_key: true
      t.references :text, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
