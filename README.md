# Rare Bird Society
[Live Site](http://birdiehunter.herokuapp.com/)
## Andrew Miller
### 2020
***
> ## What is Rare Bird Society?
#### Rare Bird Society (RBS) is a place for golfers to keep track of their scoring metrics. Golf is not a game of perfect, rather, it is a game of minimizing your mistakes.
> ## What is different about RBS than any other golf scoring app?
#### Some commonly tracked statistics are overall score, putts per round, greens hit in regulation, and fairways hit off the tee. RBS adds one more to the mix, which is referred to as the "anyway stroke". While the first four metrics can often give a pretty clear picture of how the round was played, they give no information as to the mental state of the golfer. A poorly struck shot will not show up on the scorecard, and while a single mistake won't tank your round, it sure can tank your mental state, which will absolutely send your round into an downward spiral of mistakes.
> ## What is the "anyway stroke"?
#### The anyway stroke was derived from a common phrase I found myself saying: "I wasn't mentally prepared, committed and ready to hit the shot, but I *HIT IT __ANYWAY__*". Over time, I have found that proper mental preparation for the shot allows for the body to respond naturally to the swing. In other words, if your mind is still calculating the shot or paying attention to outside stimulus during the swing, it is more than likely going to be a bad shot. Some examples of my common "anyway thoughts" are:
1. "I know my feet aren't set properly, but I can make it work."
2. "My ball is sitting in a divot."
3. "What's that bug doing on my ball?"
4. "My grip feels funny."
5. And for the most common: "Just make a good swing."
#### __The anyway stroke requires a great deal of *personal honesty*, just like the game of golf__. Sometimes, a bad shot is just a bad shot, even if you were prepared for it, and sometimes an anyway stroke can result in a good shot. You'll need to find out for yourself what your anyway strokes look like, and record them honestly. If I had to guess, you will have more of them than you think the first few times you play. 
***
> ## Usage
### 1. Register/Login
#### Users can register and login to save scores. The registration is a simple username/password combination, accepts strings in any format (lower/uppercase, numbers, special characters)
### 2. Score Entry
#### To enter a score, click the "Add Round" button from the dashboard. Select the desired course from the list, then select if you are entering total scores or hole by hole scores. Totals will ask you for score, putts and anyway strokes, and hole by hole will ask for the same statistics by hole. __*RBS is best utilized hole by hole.*__
* Due to golf course databases being prohibitively expensive (5k/year) and this being a passion project, I have chosen to let users add courses as need be. If you do not see the course you would like to input scores for in the list, please enter the course data by clicking the "Add Course" button from the dashboard. It requires the following data: ({ TOTALS: Par, total Yardage, course rating, hole count,}{HOLES: par, yardage, handicap}). 
### 3. View scores
#### To view your saved scores, click "View Rounds" button from dashboard. This loads your saved round data and displays the totals from each round as a datapoint on the screen. If hole by hole data is available, the round will appear as a link. Clicking on the round will provide score card data.
> ### How to help
1. Any code edits will be processed using git flow. Please submit a [pull request](https://github.com/jazznerd206/Golf_App/pulls) here.
2. Icebox items --
* Add "Rare Bird" insignia to user dashboard after 5 rounds based on total anyway shots per round.
  * Less than 5, albatross
  * Less than 10, eagle
  * Less than 15, birdie
  * 16 or more, turkey
3. Add data analytics to dashboard.
* Currently having some issues with async functions not firing until after page load, resulting in data for analytics not being available until refresh. hmm.
4. TEST SUITE
* Josh told me to always start with a test. Josh, if you're reading this, you were right. Its easier to build from a test than to write all the tests when you're done. I know this now. I'm working on it.
> ### Dependencies
* ReactJS
  * Context API (state management)
  * JS Cookie
  * Axios
* NodeJS
  * Nodemon
  * If-env
  * FS
  * Cookie-parser
  * Body-parser
  * Concurrently
* Express
  * Express-Session
* MySQL
* Sequelize
  * Connect-Session-Sequelize
  * MomentJS (deprecated but usable)
  * PG
* Passport
  * Passport-Local
> ## Builder
## __*Andrew Miller*__
