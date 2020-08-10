class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :planner
      t.string :event_type
      t.date :date

      t.timestamps
    end
  end
end
