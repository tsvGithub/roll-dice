"homepage": "https://tsvGithub.github.io/roll-dice"

This project was created using Jonas Schmedtmann (for my opinion, the best teacher on JavaScript) Udemy's course "The complete JavaScript Course 2021".

I rewrote JavaScript code into ReactJS components after finishing Bob Ziroll (great courses on Scrimba) and John Smilga (the best teacher) courses on React. This is my first ReactJS project created on my own.

I used React Context, functional Components, state, Hooks (useState, useContext, useEffect); controlled form; dynamically rendered images.

The logic behind is:

1. new game => set all state;
2. roll dice => 1.random roll; 2.If 'dice' is '1' => set state 'current score' to '0' and change player (see switch/change player). Otherwise, add state 'dice' to 'current score';
3. switch/change player => check state current player & set the other player;
4. hold score => add state 'current score' to the 'total score';
5. chek winner => check state 'total score' if equal or greater than '21' and end the Game.
