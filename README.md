# QuizProject
This GitHub project is a quiz website that presents users with 10 random questions out of a pool of 25 questions. Each question has three multiple-choice answers, and the user must select the correct one to earn points. The website keeps track of the user's score and provides feedback after each answer. The project utilizes JavaScript and HTML/CSS for the frontend, and it can be easily customized by modifying the questions array to fit the user's needs.

Table of Content
<ol>
  <li>Introduction	</li>
<li>Development using Agile model</li>

  2.1.Tools & Technology

  2.1.1.Jira software

  2.2.Agile Development: Combining Scrum and Extreme Programming  

  2.3.GitHub usage
  
<li>Team work & communication </li>
<li>Software production</li>
  
4.1. Version 1.0
  
4.2. Version 2.0
  
4.3. Version 3.0
  
4.4. Source code	
  
<li>Github & youtube link</li>
<li>Evaluation & Conclusion</li>
6.1.Technical Aspect
  
6.2.Project management 
  
<li>Conclusion</li>
</ol>


1 Introduction
With the help of agile development and management techniques, this project intends to create a quiz website. Similar to the "Who Wants to Be a Millionaire" competition, the website will have a similar format. Agile management in this context refers to a gradual, iterative design and development approach that prioritises effectively providing the ultimate application. The project will follow a hybrid ScrumBan methodology that combines Scrum and Kanban techniques. 
  
• Scrum - This project will make use of Scrum, one of the most well-liked frameworks for Agile approaches. The backlog of needs will be successfully addressed using sprints as development cycles.
• Kanban - To reduce resource waste, the project will also adopt Kanban. To track and display project progress, a Kanban board will be utilised with a programme like KanbanFlow. As the project moves forward, the information on the board will be updated, and each new task will be represented by a "card." The backlog for the Scrum methodology will be created with the aid of user stories and acceptance criteria. 
• Extreme Programming (XP) - In this project, functionality will take precedence over a long-term product vision using the XP methodology, which emphasises finding the simplest solutions.

This report is structured as follows:
Section 2: Agile Development Approaches
The project's utilisation of agile development methodologies will be examined in this section. It will pay special attention to the tools used to enable agile development, like KanbanFlow and Jira Software. It will also go over the components and uses of Scrum and Extreme Programming. The use of Git services for version control will also be covered in this section. 
  
Section 3: Teamwork and Coordination 
This section will focus on how the project's participants collaborated. It will give a general outline of each person's roles and accomplishments. This component was purposefully saved for later stages due to several challenges encountered during project coordination and teamwork. A diagram will be used to present the project workflow. 
 
Section 4: Development of Software 
The complete software development process will be reviewed and discussed in this part. All quiz website iterations will be included, with version control backups of the back-end and front-end given via GitHub links. The variations between the versions will be emphasised and described. 
  


Section 5: Analysis and Reflection 
An analysis and review of the entire piece will be provided in the last portion. It will address project conclusions as well as technical and managerial issues. The section will offer an evaluation of the developed quiz website and its implementation.

2 Development using Agile model
2.1 Tools & technology 
Jira Software was important in the project's early stages as the main project management and agile development tool. It was heavily utilised to support numerous agile procedures and practises. Jira Software specifically offered capabilities for sprint planning, issue tracking, task management, and progress tracking.
2.1.1 Jira Software
Atlassian created the project management application known as Jira Software. It is especially made to assist agile software development teams with project planning, tracking, and release. Jira Software assists teams in effectively managing their processes and collaborating more effectively with capabilities like issue tracking, agile boards, backlog management, release management, reporting, and integrations.
Jira Software offers a variety of features and tools to assist with project management, including the use of categories like "To-do," "In-Progress," "Review," and "Done." Teams can then use a Kanban board to visualise and monitor the progress of their activities. Each sprint cycle was limited to a maximum of eight activities in the "In-Progress" category in order to ensure effective workflow management and minimise work in progress.
The Kanban board view in Jira Software is seen in Figure 1, where tasks are arranged into columns that indicate various levels of completion. Each job was given a unique workflow, enabling particular actions like "Revise Work" when issues were brought up during the review stage. The allocated software engineer had visibility thanks to this unique procedure, which allowed them to monitor the task's development. Subtasks were also streamlined and classified as "To-do" or "Done," which streamlined the monitoring procedure.
![image](https://github.com/starksid3000/QuizProject/assets/55691960/e5dc780b-778c-495a-b9ad-54ae491096d3)

Fig 1.1 Jira kanban Board 

![image](https://github.com/starksid3000/QuizProject/assets/55691960/e69283b0-62b6-4c5d-8555-44609cd6de5b)

Fig 1.2 workflow diagram

The activities were divided into three separate categories throughout the Jira phase: "Development Orientation”, "Version 1.0", "Version 2.0," and "Version 3.0." This classification function was really helpful because it gave a clear picture of the project's timeframe and development. With the help of this team were able to find their respective task and track the project progress.

![image](https://github.com/starksid3000/QuizProject/assets/55691960/9d799a3f-ea61-4cf7-91d2-69f5cda6a389)

Fig 1.3 Jira Backlog with sprint

At the conclusion of a sprint, any incomplete work are often added to the backlog. The Scrum master and the team assess these tasks during retrospective sessions and determine whether to include them in the following iteration or to lower their priority on the list of requirements. Unfinished work is adequately addressed and managed thanks to this procedure. The Jira Roadmap functionality allows users to visualise this process and task management, as seen in Figures 3 and 4. The Roadmap gives the team a clear picture of the project's status and aids in decision-making around job prioritisation and scheduling.

![image](https://github.com/starksid3000/QuizProject/assets/55691960/5ddfb769-4b40-413d-a039-374f4632277c)
Fig 1.4 Jira Roadmap View


2.2 Scrum and Extreme Programming Report for Random Quiz Generator
1. Introduction
The development of the Random Quiz Generator project follows an incremental model/evolutionary development model. The project is divided into versions or increments, with each increment incorporating new or improved content. During active sprints, other requirements are frozen to maintain focus and ensure efficient progress.
 2. Scrum and Kanban (ScrumBan)
The project utilizes a combination of Scrum and Kanban methodologies, known as ScrumBan, to manage the development process. Scrum is adopted to maximize the development approach by organizing work into sprints and addressing a backlog of requirements. Kanban is implemented to minimize resource waste by using a Kanban board, such as KanbanFlow, to visualize project progress and update information as the project evolves. User stories and acceptance criteria are used to create the backlog for the Scrum approach.
 
3. Extreme Programming (XP) Practices
In addition to Scrum and Kanban, various components from Extreme Programming (XP) practices are incorporated into the project. User stories, derived from the assignment brief, provide specific descriptions of desired functionalities, such as "Complete a quiz from a category." Test-driven development (TDD) is applied wherever possible during feature development. The TDD process involves initially committing code for failing tests, then implementing the necessary changes to make the tests pass, and finally performing any required refactoring. For unit testing, Jest is used as the testing framework. Two separate testing procedures are created: one for the frontend and another for the backend. Each test comprises multiple sub-tests, and successful execution of all sub-tests leads to the parent test passing. This follows a green-red-refactor workflow.
 

4. Test Results
Figure 7 depicts the frontend tests passing, demonstrating the successful implementation and validation of frontend features. Similarly, Figure 8 showcases the backend tests passing, affirming the correct functionality of the backend components.



![image](https://github.com/starksid3000/QuizProject/assets/55691960/f7834449-c417-4bdb-99dd-2e70ed689896)

Fig 1.5 backend deployment

5. Dynamic Timeframes
While a typical project would have a 3-4-week gap between increments, the Random Quiz Generator project required dynamic timeframes. This flexibility was necessary to accommodate the availability of team members and consider the limited development duration specified in the assessment. By adapting the timeframes to everyone's availability and considering the overall project timeline, the team ensured efficient utilization of resources and maintained progress throughout the development process.

2.3 GitHub Usage
In this development effort, GitHub was used as the version control system for both the frontend and backend projects. Each project's repository was created separately, allowing for a distinct division of duties. This division allowed various team members to concentrate on various facets of the overall project.
Using branches within the Git process, an organised approach was taken when working on website development chores. Each job was associated with a new branch on the Kanban board, more specifically in the "new progress" section. A new branch would be made, for instance, if the job called for adding a new category to the project. The most recent code at the moment would serve as the foundation for the new branch.



![image](https://github.com/starksid3000/QuizProject/assets/55691960/589e5715-72d1-4a5d-a0d1-7735b0875d15)







The incremental logic needed to satisfy the demands of the new category was committed to the repository within the designated branch. Making frequent commits as the task's various phases were finished was a requirement of the development process. This made it possible to track developments in detail.










The branch holding the logic for the new category was combined with the master branch once the process was finished. The new functionality was merged into the primary source during this process, ensuring that the modifications were preserved and accessible for additional testing and development.

![image](https://github.com/starksid3000/QuizProject/assets/55691960/c5d8ded6-fcb1-4839-9653-57a67b6a931e)

















The team successfully managed collaboration, code management, and version control while developing the frontend and backend projects by using GitHub for version control and adhering to this branching and merging procedure.

3 Team work & communication
The project workflow incorporates a review process to ensure the quality and accuracy of the work being done. Due to limited development experience, Dev Rami and Prarthitkumar Badamliya collaborated under the same GitHub account, following pair programming practices and reviewing each other's work simultaneously. Milan Bhanuslai took on the role of backend developer, while Siddharth Dave acted as the scrum master, overseeing the management and workflow processes, with partial involvement in backend development. Frontend development responsibilities were handled by Shreya Adesara.
 
The initial step of the project involved thorough research on all the necessary tasks to complete the entire project. This included gaining proficiency in HTML, CSS, JavaScript, MongoDB, and Express. Additionally, the team familiarized themselves with tools such as Jest for testing, Jira Software for project management, Scrum practices (including Scrum Master, Scrum Sprint, and Product Backlog), Kanban tools, and various aspects of Extreme Programming, including user stories, refactoring, test-driven development, and pair programming.
 
The second step of the project focused on backend development. This involved setting up the server-side of the quiz website using MongoDB, Node.js, and Express. APIs were created and deployed using Railway.app.
 
The third step involved the creation of the frontend design. With the backend development completed, the team proceeded to design the user interface using React and Visual Studio Code. Different branches were created for each design iteration to ensure that no changes affected the main codebase until the final version was reached. Questions were prepared for each category, which were then passed to the backend development phase.
 
At the conclusion of the development process, the master branch was connected to a remote source to make the project accessible to the public. This deployment of the finalized version can be seen below, with the blue tick next to the date of the merged pull request indicating the successful deployment to the remote source.

4 Software Production:
In this project, we have explored the potential of HTML, CSS, and JavaScript to deliver seamless user experiences. HTML provides the structural foundation, CSS enhances visual appeal, and JavaScript adds interactivity and responsiveness. By leveraging the strengths of each language, we have crafted three distinct versions of our software, each offering unique features and design elements.
 
Version 1.0 
In this version we create basic quiz app using html. Here Each question will be presented with multiple-choice options, and your task is to choose the correct answer. Once you've made your selection, you can move on to the next question. At the end of the quiz, you'll receive your final score, giving you an indication of your performance. If you’ve made wrong selection, then you will get pop-up message.


![image](https://github.com/starksid3000/QuizProject/assets/55691960/94cb8e63-9663-434a-bd2c-07e1a5b3956d)

Fig 2.1 home page – versioin1.0












![image](https://github.com/starksid3000/QuizProject/assets/55691960/278c7c5f-39d9-4b04-97d1-b8d0ee62ab9d)


Fig 2.2 wrong answer pop-up – version1.0 


Version 2.0
Here we will be presented with a set of questions on various topics. Each question has a time limit of 15 seconds. once you select an answer, it cannot be changed. To ensure an immersive experience, we've added a timer to keep track of the progress. We've also incorporated a user-friendly interface, featuring sleek designs and clear instructions. You'll find a range of icons from Font Awesome to enhance the visual appeal and create an intuitive experience. Once you've completed the quiz, you'll be shown your score and a crown icon as a token of your accomplishment. In this version code handles the functionality of starting the quiz, displaying random questions and options, tracking user answers, calculating the score, and displaying the result.











![image](https://github.com/starksid3000/QuizProject/assets/55691960/834c5651-a9c9-432e-b1c1-7c5477866a53)

	   Figure 2.3 Home page with start button
![image](https://github.com/starksid3000/QuizProject/assets/55691960/30b6837b-baa6-4518-b1f4-0c24e9e19bc7)

Figure 2.4 page with basic information

![image](https://github.com/starksid3000/QuizProject/assets/55691960/74e10ea4-2d4f-43f7-892d-d5728558b74b)
![image](https://github.com/starksid3000/QuizProject/assets/55691960/1d40b3db-9d5e-4237-bce5-ed850882b537)

Figure 2.5 random question with correct answer












![image](https://github.com/starksid3000/QuizProject/assets/55691960/8ebd65ba-cf42-4756-9a54-ede59ed521bb)


Figure 2.6 random question with incorrect answer


![image](https://github.com/starksid3000/QuizProject/assets/55691960/40142d7c-a08e-4113-98c0-f3f3a181e669)

Figure 2.7 final page with score





















Version 3
In this version 3 frontend application sends a request to the backend API to fetch the quiz data. The backend API retrieves the quiz data from a database and the quiz data is returned from the backend API as a response to the frontend application. The frontend application receives the quiz data, including questions, options, and correct answers, here JavaScript code in the frontend processes the received quiz data and displays the questions and options to the user. The user selects an option, and the frontend code handles the user's answer, calculates the score, and tracks the progress. Once the user completes the quiz or runs out of time, the score is sent back to the backend API for further processing or storage. 

![image](https://github.com/starksid3000/QuizProject/assets/55691960/d20e1b24-591c-4187-b779-0280ffbeb9a9)








![image](https://github.com/starksid3000/QuizProject/assets/55691960/d4e7a70b-8483-4af5-97b6-7f9a0dc2ef51)


Figure 2.8 with wrong answer













![image](https://github.com/starksid3000/QuizProject/assets/55691960/57083b2e-5b0a-4f65-888b-5e0cccef0bfd)


	Figure 2.9 with correct answer

![image](https://github.com/starksid3000/QuizProject/assets/55691960/54c494fd-7ce0-477c-bfa3-b23e878282e8)

                                                                Figure 3.0 with high score




![image](https://github.com/starksid3000/QuizProject/assets/55691960/68597609-8d1f-489e-a47b-fa30275b8517)
![image](https://github.com/starksid3000/QuizProject/assets/55691960/34563f38-a7e1-4d91-aca5-8255cd5ffee5)



	Backend deployment
	![image](https://github.com/starksid3000/QuizProject/assets/55691960/4fd9e96a-6058-48f4-976b-c2fd34fe927e)

Font end deployment
5. Github & Youtube Links:
Github link: https://github.com/starksid3000/QuizProject.git
Youtube link: https://youtu.be/qgyHSwFaxAc


6.Evaluation & Conclusion:
6.1Technical Aspect:
Our team ran into a number of technical issues while developing the product. First, because of React's unique syntax and challenging learning curve, we had trouble developing for it. However, because our team had exposure to fundamental coding techniques, we were able to comprehend React's functionality and successfully navigate these difficulties.
The build process failed as a result of version mismatch warnings we encountered when attempting to retrieve data from the API using Railway.app. We also had problems with Node.js deployment on Railway.app. Since Postman's options were restricted, we created a GET/POST request technique specifically to address this. Although Express Server may have fixed this problem, the deployment process would have become more complicated.
Our team's proficiency with fundamental coding was a strength, but it occasionally resulted in overengineering. Each team member had a preferred strategy, so in order to come to an agreement, we had to carefully analyse and balance the various approaches. The development process took longer as a result of this method.
6.2 Project management:
Throughout the project, the team worked well together and gained important knowledge. Individual team members were given assignments, or we collaborated on various project components. This gave us the opportunity to obtain knowledge about new technologies and agile project management.
Reviewing the Kanban activities and ensuring alignment with the sprints presented a hurdle, though. Because there was no specific management or scrum master, everyone participated in both development and testing.


7. Conclusion:
In conclusion, both technical and project management elements were included in the development cycle. Despite the early difficulties encountered on the technological front, our team's expertise and capacity for problem-solving allowed us to successfully overcome them. Working collaboratively was advantageous for project management, but we had trouble staying in sync with the Kanban board. Overall, the project was effectively finished, and we gained important knowledge and experience along the way.
