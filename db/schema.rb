# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_10_204512) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "moves", force: :cascade do |t|
    t.integer "index_number"
    t.string "move_name"
    t.string "move_type"
    t.string "category"
    t.string "pp"
    t.string "power"
    t.string "accuracy"
    t.string "generation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "parties", force: :cascade do |t|
    t.string "user"
    t.json "party_json"
    t.string "pokemon1"
    t.string "pokemon2"
    t.string "pokemon3"
    t.string "pokemon4"
    t.string "pokemon5"
    t.string "pokemon6"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "partypokemons", force: :cascade do |t|
    t.integer "party_number"
    t.string "user"
    t.string "pokemon_name"
    t.string "move1"
    t.string "move2"
    t.string "move3"
    t.string "move4"
    t.json "party_pokemon"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "partys", force: :cascade do |t|
    t.json "party_json"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pokemons", force: :cascade do |t|
    t.integer "pokedex_number"
    t.string "name"
    t.string "type1"
    t.string "type2"
    t.string "sprite"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
