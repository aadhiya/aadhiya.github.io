AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "AI developer/Web content Developer",
    cardImage: "C:/Users/nemo/Desktop/aadhiya.github.io-master/assests/images/experience-page/pegheads.png",
    place: "Pegheads.org",
    time: "(Dec, 2020 - present)",
    desp: "<li>Automate 3D animation with Artificial Intelligence. We are creating an open-source platform for creators to use and showcase their independent animations with AI assistance.</li> <li>Experiment with different built-in models to train them with our peghead images to get the Ai generate animations for us.</li> <li>Created plans and communicated deadlines to ensure projects were completed on time.</li>",
  },
  {
    title: "Online Tutor",
    cardImage: "C:\\Users\\nemo\\Desktop\\aadhiya.github.io-master\\assests\\images\\experience-page\\Byjus.png",
    place: "BYJUS",
    time: "(Jun,2020 - Jun, 2022)",
    desp:"<li>Tutored 30 students per week per course and taught online courses to students located in the US, India, UK, and Canada.</li><li>Aided 15+ students with designing and developing their App or game using technologies such as React Native, JavaScript, and Microsoft Visual Studio. </li><li>Grade student projects, and prepare reports on their performance. </li><li>Maintained a 100% customer satisfaction rating by having monthly meetings with the parents of each student, providing them with a detailed report of their performance and getting their feedback in order to improve the learning experience.</li>",
  },
  {
    title: "ADMIN",
    cardImage: "C:\\Users\\nemo\\Desktop\\aadhiya.github.io-master\\assests\\images\\experience-page\\Loyola.png",
    place: "LOYOLA INTERNATIONAL SCHOOL DOHA",
    time: "(Mar,2018 - Feb, 2019)",
    desp: "<li>Worked on managing the school student database and maintaining the software used to update student information to the ministry of education Qatar.</li> <li>Frequent meetings with the ministry of education about the new rules and updates of school policies.</li><li>School timetable/calendar creation, deciding different events for the school academic year, preparing reports and notifications for the parents about the events, exam timetable generation, and question paper evaluation.</li><li>Interviewing students for the admission process.</li> <li>Understanding the parent's and students requirements by listening to their feedback and helping them with their queries.</li>",
},
  {
    title: "Assistant Lecturer",
    cardImage: "C:\\Users\\nemo\\Desktop\\aadhiya.github.io-master\\assests\\images\\experience-page\\NIIT.png",
    place: "NIIT, Surathkal",
    time: "(May, 15 - May, 17)",
    desp: "<li>Taught a wide number of different courses to over 1500 students like C programming, Java, Database SQL, Computer Networks Dynamic Team.</li> <li>Prepared lesson plans for 4 courses, and question papers for 2 courses with 95% average student satisfaction.</li><li>Reviewed and graded students' assignments, preparing student records to be uploaded to the database.</li><li>Updated the lab and lab manual for those subjects, guided the students in their minor and major projects, and assisted the students in their research.</li> <li>Co-authored an IEEE paper with students, which demonstrated a 50% increase in knowledge of wireless and mobile communication.</li><li>Supervised undergraduate students in the lab, reducing lab accidents by 10% and increasing lab throughput by 15% through the use of weekly lab meetings, leading to a 5% increase in overall lab productivity.</li><li>Conducted a class of 80 students, ensuring a 100% student satisfaction rate.</li><li>Evaluated student performance and provided feedback to the students.</li><li>Delivered lectures, tutorials, and practical classes for 25 students for each class.</li><li>Engaged students with high-quality PowerPoints to improve average class rating from 3.7 to 4.1 in one semester.</li> <li>Assisted faculty with club administration tasks for the coding club, allowing them to focus on teaching for club meetings that averaged 30 students per meeting.</li> <li>Participated in 10 intercollege coding competitions and paper presentations. </li><li>Assisted students in delivering successful presentations and seminars.  </li>",    
},
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

