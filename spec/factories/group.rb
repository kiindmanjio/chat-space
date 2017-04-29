FactoryGirl.define do

  factory :group do
    name  Faker::Name.name

    after (:create) do |group|
      create(:user_groups, :user)
    end
  end
end

