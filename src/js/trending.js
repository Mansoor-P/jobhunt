document.addEventListener("DOMContentLoaded", function () {
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    const jobNames = document.querySelector(".job-names");

    const jobs = [
      {
        title: "nasa recently launched for b-tech students",
        link: "https://example.com/nasa-job"
      },
      {
        title: "amazon software developer job",
        link: "https://example.com/amazon-job"
      },
      {
        title: "Google is hiring for fresher b-tech students(girls)",
        link: "https://example.com/google-job"
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