# StudyBudy: The AI-Powered ~~Study~~ Life Planner
Learn smarter, not harder!   
Input anything you want to learn and get a custom study plan in an interactive beautiful calendar.
Your AI study planner in a snap! 

## Getting Started
- Install the dependencies (one by one inside frontend and backend directory), using this command :
```bash
npm install
```
- Create .env file in the root directory(of backend) and add OPENAI API key:
```bash
OPENAI_SECRET_KEY="yourveryverysecretkey"
```

- First, run backend server using (inside backend directory) :

```bash
node server.js
```

- Then run frontend using the following command (inside frontend directory):
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result and enjoy the experience.

---

![Image 2-25-24 at 8 49 AM](https://github.com/AryAgain/StudyBudy/assets/5464475/2a361002-b649-4707-8550-2bb98335f94e)


### Inspiration
Being a student often means juggling between studying and life's many demands. The idea for StudyBudy stemmed from my personal experiences with the overwhelming nature of managing academic and personal life. We wanted to create a tool that not only simplifies study planning but also adapts to the unique needs of each student.

### What it does
StudyBudy is an AI assistant that helps students with study planning. Users input details like deadlines, syllabus, and course structure, and the app generates a detailed study plan. This plan is displayed on an interactive calendar, making it easy to visualize and follow.

![Image 2-25-24 at 8 49 AM (1)](https://github.com/AryAgain/StudyBudy/assets/5464475/5937c069-1330-4824-be61-cb7aac22cd05)

### How we built it
StudyBudy was built using Next.js, React, MongoDB, Mongoose, and an Express server. This tech stack was chosen for its robustness and flexibility. The front end was developed with React for its efficiency in updating and rendering components, while Next.js was used to enhance React's capabilities. MongoDB and Mongoose formed our database solution, with Express handling server-side logistics. We also used openai api to resolve complex tasks breakdown into achievable sub-tasks and display them in an interactive beautiful calendar using FullCalendar React library.

<img width="1512" alt="Screenshot 2024-02-25 at 8 50 38 AM" src="https://github.com/AryAgain/StudyBudy/assets/5464475/fd5959b2-42a5-495c-aac9-39c48f4517ac">
<img width="1512" alt="Screenshot 2024-02-25 at 8 50 47 AM" src="https://github.com/AryAgain/StudyBudy/assets/5464475/5e670f0c-917c-4e3e-8f88-3952bfe166e1">


### Challenges we ran into
One major challenge was adopting Next.js for the first time. Having previous experience with React, we faced hurdles when many familiar React libraries were not compatible with Next.js. This required us to explore alternative solutions and adapt our development approach.

### Accomplishments that we're proud of
I am particularly proud of building a full-stack application in a single night, which I can personally use as a student. The ability to transform an idea into a functioning product in such a short time frame was immensely satisfying.

### What we learned
This project was a valuable learning experience, both in terms of technical and soft skills. Technically, we gained deeper insights into Next.js and how it differs from standard React development. On the soft skills front, I improved my problem-solving abilities and adaptability, especially when dealing with incompatible libraries and new technologies.

![Image 2-25-24 at 8 52 AM](https://github.com/AryAgain/StudyBudy/assets/5464475/083a8c95-f0c7-420b-bec3-165e6f8bd7ac)

### What's next for StudyBudy
The next step is to deploy app on the cloud and make it available to other students for feedback. Also, plan is to further suggesting microtasks for a single day into specific timelines for a sub-task. Additionally, we plan to expand its features to make the app more interactive and enhance its ability to resolve time conflicts between multiple tasks more effectively.


