document.addEventListener("DOMContentLoaded", function () {
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    const jobNames = document.querySelector(".job-names");

    const jobs = [
      {
        title:"ISRO IS HIRING: SCIENTIST/ ENGINEER",
        link:"https://apps.ursc.gov.in/CentralBE-2023/advt.jsp"
      },
      {
        title: "Google Hiring Girl Hackathon 2023 ",
        link: "https://rsvp.withgoogle.com/events/girl-hackathon-2023/home"
      },
      {
        title: "LENNOX INTERNATIONAL IS HIRING: GRADUATE TRAINEE ENGINEER",
        link: "https://indiacareers-lennox.icims.com/jobs/38329/job?mobile=false&width=561&height=500&bga=true&needsRedirect=false&jan1offset=330&jun1offset=330"
      },
      {
        title: "CORNERSTONE IS HIRING: JUNIOR ENGINEER, QUALITY",
        link: "https://cornerstone.csod.com/ux/ats/careersite/2/home/requisition/8322?c=cornerstone&source=LinkedIn"
      },
      // Add more job objects here as needed
    ];

    let currentJobIndex = 0;
    const numJobsToShow = 1;

    function fadeOut(element) {
      element.style.opacity = "0";
      element.style.transition = "opacity 0.3s";
      setTimeout(() => {
        element.style.display = "none";
      }, 300);
    }

    function fadeIn(element) {
      element.style.display = "block";
      setTimeout(() => {
        element.style.opacity = "1";
      }, 100);
    }

    function updateJobNames() {
      const jobNamesContainer = document.createElement("div");
      jobNamesContainer.classList.add("job-names");

      for (let i = currentJobIndex; i < currentJobIndex + numJobsToShow; i++) {
        if (i >= jobs.length) {
          break;
        }

        const job = jobs[i];
        const jobName = document.createElement("a");
        jobName.classList.add("job-name");
        jobName.textContent = job.title;
        jobName.href = job.link;
        jobName.target = "_blank";
        jobNamesContainer.appendChild(jobName);
      }

      fadeOut(jobNames);
      setTimeout(() => {
        jobNames.innerHTML = "";
        jobNames.appendChild(jobNamesContainer);
        fadeIn(jobNames);
      }, 300);
    }

    prevArrow.addEventListener("click", function () {
      currentJobIndex -= numJobsToShow;

      if (currentJobIndex < 0) {
        currentJobIndex = 0;
      }

      updateJobNames();
    });

    nextArrow.addEventListener("click", function () {
      currentJobIndex += numJobsToShow;

      if (currentJobIndex >= jobs.length) {
        currentJobIndex = jobs.length - numJobsToShow;
      }

      updateJobNames();
    });

    // Initial update
    updateJobNames();
  });