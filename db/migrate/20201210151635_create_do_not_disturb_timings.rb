class CreateDoNotDisturbTimings < ActiveRecord::Migration[6.0]
  def change
    create_table :do_not_disturb_timings do |t|
      t.integer :user_id, null: false
      t.datetime :starts_at, null: false
      t.datetime :ends_at, null: false
    end
    add_index :do_not_disturb_timings, [:user_id], unique: false
  end
end
