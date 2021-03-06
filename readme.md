Weekend Challenge 2

Welcome to your second weekend challenge! We'll be focusing on Node/Express this weekend while reinforcing the JavaScript and JQuery lessons from the previous weeks.

Base Mode:

First, get a basic Node/Express project set up that is serving your HTML file with JQuery and a 'client.js' script file sourced.

Setup an express route "/person" that has both a GET and a POST.

For this project you'll be creating an app that takes in user input as follows:

client0

When the "Add Person" button is clicked the user input should be put into an object and sent to the "/person" route via POST.

Once on the server, log out the object (req.body):

server

Then push this new person into an array. the GET of the "/person" route should return an object that has an array within that has all the people who have been added.

client2

This GET call should be called on page load and on "Add Person" click. Once the data is received display each person on the DOM.

client1

Hard Mode:

Create a carousel that shows only one person at a time. There should be "next" and "previous" buttons that wrap (if at first person, hitting previous should go to the last) and an indicator of which person is being shown:

client3

Pro Mode:

Add a "remove" button for each person that removes that person from the array on the server. Hint: you will probably need .data() for this. Also, don't assume that people's names are unique, you may need another unique way to id them.