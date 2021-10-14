# Project 1 Documentation 
## By. Anthony Gonzales

## Introduction 
Explain the project 

Movie Triva Questions 

When starting this project I followed the videos at https://www.youtube.com/playlist?list=PLY6oTPmKnKbYC-NRcAFVN4_R5D3HRmKGu for the basic set up and function of the game. Upon completing the videos I began to customize the game using css and add more features using jQuery and vanilla JavaScript. Such as user input and a win function and letting each person know when it is there turn. 

The source for the question’s that are in the quiz are located here https://www.rd.com/article/movie-trivia-facts/  there is also some fun facts about the questions if you’re interested.

The way to win in this game is to get to 10 points first. The scores will reset to 0 after the winner has been delcared. To change the usernames you have to refreash the page.

## Technologies Used 
- HTML
- CSS 
- JAVASCRIPT
- jQuery

## Challenges 
Explain the issues that you came accross 

###Day One Issues 
I came across an issue on some of the questions that when clicking the right answer it was returning incorrect in the console.log test. Upon investigating the issue I noticed that when making my questions I had a space after the answer which was causing it to return incorrect. After deleting the spaces and publishing the changes it resolved the issue. 

###Day Two Issues 
When adjusting the game to be more mobile I came across an issue with the answers text flowing outside of there boxs. I adjusted the size of the font as well as change the height settings to auto so that the text will fit in any screen size.

###Day Three Issues 
I attempted to add a reset button to the game but could not get the function to work properly without causing errors. So in place of that I added an if and else statement so that after someone wins the scores will reset. I also attempted to add the prompts enter new user names but all it did was cause the game to skip the win statement and continue on with the game. 

#### I have trouble with 

My code looked like this

```js
console.log("hello")
```

It was a giving me a problem... when it was fixed it looked like this:

```js
console.log("goodbye")
````

#### Example Table 

| Column1 | Column2 |
|---------|---------|
| thing1 | thing2 |
| yadda1 | yadda2 |