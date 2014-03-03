class UserMailer < ActionMailer::Base
  default from: "system@takeandmake.co" ,
  to: ["yossi@takeandmake.co","mika@takeandmake.co","liri@takeandmake.co"]

  def new_registration_user(user)
    @user = user
    mail subject: "New user in the Instructor site"
  end
end
