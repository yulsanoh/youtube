# README.md

## This application is about video, like youtube :-)

1. rootRouter
   / -> home, showing videos (get)
   /login -> login page (get, post)
   /signup -> signup page (get, post)

2. userRouter
   /users/:id -> user profile page (get)
   /users/:id/edit -> edit user profile page (get, post)
   /users/:id/delete -> delete user page (post)
   /users/logout -> logout page (post)

3. videoRouter
   /videos/:id -> watching video page (get)
   /videos/:id/edit -> edit video page (get, post)
   /videos/:id/remove -> remove video page (post)
   /videos/upload -> upload video (get, post)
