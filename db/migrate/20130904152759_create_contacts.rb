class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :website
      t.text :message
      t.boolean :treat

      t.timestamps
    end
  end
end
