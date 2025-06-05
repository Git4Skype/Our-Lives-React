# Our-Lives-React

React version of the "Our Lives" Game

"Our Lives" is a simple multiplayer dice game I created to do software development projects. I created an intial version in vanilla JavaScript. This is its React version. That versoin worked for 2-3 players. I have extended it to work for upto 6 players in the React version. The code is written such that it can easily be extended to any number of players. When the app is started by pressing the START button, player registration is done by entering the input parameteres. At that time selection of the number of players is done and their names are entered. Also paramters like the initial number of lives the players would start the game with is entered and the maximum score after which a player gets a life is entered.

Each player takes turns throwing the dice by clicking on the dice image, and based on the dice value the player will gain/lose lives and scores. Here are the game rules:

For dice of value 1, the player loses 10 points in their score and loses 2 lives.
For dice of value 2, the player’s score halves and loses 1 life.
For dice of value 3, the player loses 3 points in their score.
For dice of value 4, the player gains 4 points in their score.
For dice of value 5, the player’s score doubles and gains 1 life.
For dice of value 6, the player gains 10 points in their score and gains 2 lives.

The user can specify two input parameters – initial number of lives that are assigned on game initialization to each player and maximum score for each player. When the score reaches this maximum the player gains a life and their score is reset. Similarly when a player’s score reaches zero they lose a life.

The players take turns throwing the dice and their scores/lives keep increasing/decreasing. The player who loses all their lives is eliminated and the others continue playing. The last remaining player is the winner and the game ends at that point.

I intend to extend it to React Native, Node/Express and Python backend. The ultimate version of this game will be played by any number of players from different geographic locations on the web and mobile platforms (iOS/Android). Right now their player details are fetched by web services based on randomly selected latitude/longitude coordinates. Later geographically distributed players’ location details will be updated based on their respective geolocations. Player details demonstrate the use of fetching and displaying data asynchronously in Javascript using the FETCH command.



