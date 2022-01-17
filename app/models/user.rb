class User < ApplicationRecord
  before_save{self.email = email.downcase}
  validates :name, presence: true,
                  length: {maximum: Settings.validates.length.maximum.name}
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze
  validates :email, presence: true,
                    length: {maximum: Settings.validates.length.maximum.email},
                    format: {with: VALID_EMAIL_REGEX},
                    uniqueness: {case_sensitive: false}
  has_secure_password
  validates :password, presence: true,
                       length: {
                         minimum: Settings.validates.length.minimum.password,
                         maximum: Settings.validates.length.maximum.password
                       }
  def self.digest string
    cost = if ActiveModel::SecurePassword.min_cost
             BCrypt::Engine::MIN_COST
           else
             BCrypt::Engine.cost
           end
    BCrypt::Password.create string, cost: cost
  end
end
