### How to run the app ###
After cloning the project, start the Client-side first by running "npm install" then "npm start" or "ng serve --proxy-config proxy.config.json". Run Server-side as a jave application in IntilliJ or eclips and it will kick start the server on port 8080.

### Technologies Used ###

-- Spring Boot --
The back-end is writen in spring boot so that most of the responsibilities and code managements are shifted to the framework so that I can focuse only on pure logic of the project. This way I managed to achieve more with wirting less code, its fast and secure as the framework deals with the dependencies of the application. The application is automatically deployed to Tomcat and I don't have to make a deployment to Wildfly everytime I make a change. 

-- Sqlite ---
I chose Sqlite for the database because its very light weight database file stored locally in the project directory. SQLite does not need to be "installed" before it is used. There is no "setup" procedure. Also There is no server process that needs to be started, stopped, or configured. There is no need for an administrator to create a new database instance or assign access permissions to users. SQLite uses no configuration files. Nothing needs to be done to tell the system that SQLite is running. No actions are required to recover after a system crash or power failure. There is nothing to troubleshoot. This makes it be a perfect choice for the development and offers an easy and compatible switch to mySQL or MariaDb when it comes to deployment. Therefore I chose Sqlite for the database. 

-- Mockito and Hamcrest --
For the unit testing I used JUnit along with Mockito and Hamcrest, because it allow us to Mock dependencies and memics the real behaviour of the application functionality. This allow us to easily test and analyes the output of different functionality of our application. Its fast and light weight compared to integration test tools like Arquillian. Hamcrest offers an easy and readable camparible test results, which is a good alternative to JUnit Assert methods. 

-- Angular5 --
When it comes to Agular there are numerious reasons why it should be chosen as a front-end framework, but one thing that I really love about Angular is the easy and smooth relation of script files with the HTML files. Its very easy to catch the user input through forms, model it and process it. Therefore I chose Angular for the front-end. 
