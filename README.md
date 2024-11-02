Thomas Ward
General Assembly SEB Project 2 README - Freezy, A Food Management App

Project Description

Say hello to Freezy!

![image](https://github.com/user-attachments/assets/6dd25c93-ef6f-4da7-953f-d9a87921686b)

Freezy is my food management app. It is designed to help you keep track of what food is in your fridge, when it is going out of date, what calories your food contains and more.

![image](https://github.com/user-attachments/assets/2283c201-e660-4399-a5a5-d6edcdf2887f)


I built Freezy unassisted for Project 2 of my General Assembly Software Engineering Bootcamp, between 28/10/24 - 1/11/24 while also working full time. 
The app demonstrates my ability to build an MVC style codebase with user authentication and CRUD functionalities while storing user data in MongoDB.

I have wanted to build an app like this for a while because I think it has a lot of utility for regular people - we have all experienced that pain point when that nice meal we were looking forward to is two days 
out of date or the guilt after succumbing to an expensive take-away because you can’t remember if you have anything easy to whip together at home. Managing food wastage is also great for the environment and helpful for low income households.

This is also considered a growth market in the app world with a lot of fun start-ups like Fridge Pal and Out Of Milk vying for position to become the premier food management app worldwide. 
With AI accelerating, CNNs and OCR are developing apace and I look forward to the day when a quick wave of my phone camera will swiftly deposit the vital statistics for all my fridge items neatly into an app not too dissimilar to this one!


Links

Planning Link: https://trello.com/b/JqfIqVo9/food-management-app

Deployment link: https://food-management-app-dfaf15d731b1.herokuapp.com/

GitHub Link: https://github.com/wardy-t/food-management-app.git


Technologies Used

Node.js;
Express;
EJS (Embedded JavaScript);
MongoDB;
Mongoose;
Method-Override;
Morgan;
Bcrypt;
Express-session;
dotenv;
Heroku;
GitHub


Build/Code Process

I started by downloading my required technologies middlewares through the terminal and then went about building my server.js and connecting to port. Most of the middlewares concerned aspects of authentication or connecting with my database. 

I created my .env file to link to my MongoDB cluster and a session secret cookie, as well as a .gitignore file to keep them and my node_modules safe, and then went about building my Schema and homepage. 
I was originally planning to challenge myself to use referencing with my Schema as I have used it less but quickly changed my tune when I realised how much coding I had to do in five days and reverted to tried and tested embedded! 

After building a navbar partial I focused on coding the logic for my user authentication and building out my controllers/auth.js and controllers/foods.js

Once this was done I built all my views. After a bit of debugging my guest could now create a secure user, sign into the app, add foods to a list.

I went about finishing the CRUD functions by giving my user the ability to select, edit and delete individual food items from their list. This completed my MVP requirements.

I used CSS Bootstrap to give my app a minimalist and responsive design - I want the app to be easy for anyone to use, especially low-income families.

Lastly, I was able to give my authentication process some extra password parameters for added security.


Challenges

I was pleased that while the amount of coding for this project was fairly dense, we had gone through each stage of the build process quite forensically during the course module so every step was pretty easy as long as I focused on one thing at a time.

Having said this, I had two issues which required some time on the terminal debugging. My food list was simply coming up as a dot rather than providing the name of the food item as a link to that item. Also my dropdown bar for dietary requirements 
was not being logged in my show.ejs page after new food was logged or food was edited. Neither was bringing up errors on the terminal but it was obvious at a glance they were not working correctly.

After console logging both functions it was clear that the food name was being sent to the database but not being returned, whereas the dropdown bar result was not being sent to the food array on the database at all which indicated the two problems 
were probably not directly linked.

Eventually I established that I had made two separate errors on the Schema - I had changed the ‘food’ object in my Schema to ‘name’ but had not amended this in parts of my code. Also I had made a classic capital letter typo in my 
‘dietary requirements’ object.

![image](https://github.com/user-attachments/assets/cadb415b-a650-4250-b279-048a51f96c05)

These weren’t huge mistakes but they did serve to slow me down a fair bit while I debugged and amended them and drove home the importance of a tight and tidy Schema when building CRUD functionalities. Here is the amended code.

![image](https://github.com/user-attachments/assets/7cd3f862-25b3-4ddc-b8b2-9fcdec93e289)


Wins

This was also my first time using CSS Bootstrap and it was easy to set up. While it was challenging to knit all of the design code around my ejs files, the end result looked really clean and responsive. I was however planning to add 
some additional design elements using a custom.css file but I did not have time in the end.

![image](https://github.com/user-attachments/assets/9c2a4976-4a69-494e-9aca-1d2bac3834e8)


The other part of the project I most enjoyed was adding passwordPattern to give my app an extra level of security by demanding more complex passwords from guests. This I feel mimics real world best practice.

![image](https://github.com/user-attachments/assets/c517da67-4ff2-4c85-9338-c3a696a06c06)
![image](https://github.com/user-attachments/assets/46c68ec8-ee47-41b3-80c4-4bb5d5e92703)


Key Learnings/Takeaways

In summary, the project has given me a lot of confidence that I can take the MVC, CRUD, authentication and database principles I have learned and apply them to the building and maintenance of almost any traditional app or website 
architecture. It has also taught me to mind my Schema!


Future Improvements

Future improvements for the app would include a slightly more engaging visual element and a separate list for freezer items as well as improving the info available on the ‘My Fridge’ list. I would also like to attempt to rewrite 
the code using referencing for practice.
