class CreateInstructorTexts < ActiveRecord::Migration
  def change
    create_table :instructor_texts do |t|
      t.string :name
      t.text :val

      t.timestamps
    end
  end
end
