# QuizProject
This GitHub project is a quiz website that presents users with 10 random questions out of a pool of 25 questions. Each question has three multiple-choice answers, and the user must select the correct one to earn points. The website keeps track of the user's score and provides feedback after each answer. The project utilizes JavaScript and HTML/CSS for the frontend, and it can be easily customized by modifying the questions array to fit the user's needs.

<h3>Version 1.0</h3>

This is a preview of the version 1.0

![Image](https://user-images.githubusercontent.com/55691960/235436586-64003c36-56ed-4cdd-8c49-2a6275445360.png)

User can see their score on top

![Image](https://user-images.githubusercontent.com/55691960/235436616-5744c08f-1097-4685-ace1-c39d7e3e050c.png)

**Corns of this version:**

1. Lack of user feedback: The website does not provide any feedback on whether the user selected the correct answer until after they have clicked a button. 

2. Limited question pool: The quiz only includes 7 questions, which could lead to users getting bored quickly if they play the game multiple times.

3. Security concerns: While this code does not contain any obvious security vulnerabilities, it is important to ensure that the website is secure against common attack vectors such as cross-site scripting (XSS) and SQL injection. Consider implementing security measures such as input validation and sanitization to prevent attacks.

4. Accessibility: The website does not include any accessibility features for users with disabilities, such as support for screen readers or alternative input methods. Consider adding accessibility features to make the game more inclusive and reach a wider audience.

5. Design and layout: The website has a very basic design and layout, which could impact user engagement and make the game less visually appealing. Consider improving the design and layout of the website to make it more attractive and user-friendly.

6. Loop : There is no end of the quiz. when user tick wrong option then quiz restart itself again.

<h3>Version 2.0</h3>
Here we will be presented with a set of questions on various topics. Each question has a time limit of 15 seconds. once you select an answer, it cannot be changed. To ensure an immersive experience, we've added a timer to keep track of the progress. We've also incorporated a user-friendly interface, featuring sleek designs and clear instructions. You'll find a range of icons from Font Awesome to enhance the visual appeal and create an intuitive experience. Once you've completed the quiz, you'll be shown your score and a crown icon as a token of your accomplishment. In this version code handles the functionality of starting the quiz, displaying random questions and options, tracking user answers, calculating the score, and displaying the result.
![image](https://github.com/starksid3000/QuizProject/assets/55691960/15b2c17a-5327-4f33-91ae-b5d134867240)


                                                           Figure 1.2 Home page with start button



![image](https://github.com/starksid3000/QuizProject/assets/55691960/3ea14015-7e7e-46c0-91ac-ba20c29c4195)


	Figure 1.3 page with basic information
![image](https://github.com/starksid3000/QuizProject/assets/55691960/490cd50b-c766-4e89-bad5-672bafa0b322)

	   Figure 1.4 random question with correct answer


![image](https://github.com/starksid3000/QuizProject/assets/55691960/00b37df0-e300-412f-8f45-27257027f3a8)


                                                      Figure 1.5 random question with incorrect answer


![image](https://github.com/starksid3000/QuizProject/assets/55691960/9f6855b9-37a9-4a0b-a66f-592cc8488c00)



		      Figure 1.6 final page with score


Version 3
In this version 3 frontend application sends a request to the backend API to fetch the quiz data. The backend API retrieves the quiz data from a database and the quiz data is returned from the backend API as a response to the frontend application. The frontend application receives the quiz data, including questions, options, and correct answers, here JavaScript code in the frontend processes the received quiz data and displays the questions and options to the user. The user selects an option, and the frontend code handles the user's answer, calculates the score, and tracks the progress. Once the user completes the quiz or runs out of time, the score is sent back to the backend API for further processing or storage.
