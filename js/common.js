
var jobsPerPage = 4;
var currentPageNumber = 1;

// Function to render jobs based on current page number
function renderJobs() {
  var jobListings = document.getElementById('jobListings');
  jobListings.innerHTML = '';

  var startIndex = (currentPageNumber - 1) * jobsPerPage;
  var endIndex = startIndex + jobsPerPage;
  var displayedJobs = jobs.slice(startIndex, endIndex);

  for (var i = 0; i < displayedJobs.length; i++) {
    var job = displayedJobs[i];

    var card = document.createElement('div');
    card.classList.add('card', 'job-card');

    var cardContent = `
      <div class="card">
        <img src="${job.logo}" class="img-fluid">
        <div class="card-body">
          <h5 class="card-title">${job.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${job.company}</h6>
          <p class="card-text">
            Location: ${job.location}<br>
            Experience: ${job.experience}
            Salary : ${job.salary}
          </p>
          <a href="#" class="apply-link" onclick="showJobDetails(${i})">Apply</a>
        </div>
      </div>
    `;
    card.innerHTML = cardContent;
    jobListings.appendChild(card);
  }
  updateJobCount();
  updatePagination();
}

// Function to update job count
function updateJobCount() {
  var jobCountElement = document.getElementById('jobCount');
  var totalJobs = jobs.length;

  var startIndex = (currentPageNumber - 1) * jobsPerPage;
  var endIndex = Math.min(startIndex + jobsPerPage, totalJobs);
  var displayedJobs = endIndex - startIndex;

  var countText = `Showing  ${startIndex + 1}-${endIndex} of ${totalJobs} jobs`;

  jobCountElement.innerText = countText;
}

function updatePagination() {
  var pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  var totalPages = Math.ceil(jobs.length / jobsPerPage);
  var currentPage = Math.min(currentPageNumber, totalPages);

  var prevLi = document.createElement('li');
  prevLi.classList.add('page-item');
  var prevLink = document.createElement('a');
  prevLink.classList.add('page-link');
  prevLink.href = '#';
  prevLink.innerHTML = '<span aria-hidden="true">&laquo;</span>';
  prevLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (currentPageNumber > 1) {
      currentPageNumber--;
      renderJobs();
    }
  });
  prevLi.appendChild(prevLink);
  pagination.appendChild(prevLi);

  var startPage = Math.max(1, currentPage - 1);
  var endPage = Math.min(startPage + 3, totalPages);

  if (startPage > 1) {
    var li = document.createElement('li');
    li.classList.add('page-item');
    var link = document.createElement('a');
    link.classList.add('page-link');
    link.href = '#';
    link.innerText = '1';
    link.addEventListener('click', function (event) {
      event.preventDefault();
      currentPageNumber = 1;
      renderJobs();
    });
    li.appendChild(link);
    pagination.appendChild(li);

    var elipsisLi = document.createElement('li');
    elipsisLi.classList.add('page-item');
    elipsisLi.innerHTML = '<span class="page-link">...</span>';
    pagination.appendChild(elipsisLi);
  }

  for (var i = startPage; i <= endPage; i++) {
    var li = document.createElement('li');
    li.classList.add('page-item');
    if (i === currentPage) {
      li.classList.add('active');
    }
    var link = document.createElement('a');
    link.classList.add('page-link');
    link.href = '#';
    link.innerText = i;
    link.addEventListener('click', function (event) {
      event.preventDefault();
      currentPageNumber = parseInt(event.target.innerText);
      renderJobs();
    });
    li.appendChild(link);
    pagination.appendChild(li);
  }

  if (endPage < totalPages) {
    var elipsisLi = document.createElement('li');
    elipsisLi.classList.add('page-item');
    elipsisLi.innerHTML = '<span class="page-link">...</span>';
    pagination.appendChild(elipsisLi);

    var li = document.createElement('li');
    li.classList.add('page-item');
    var link = document.createElement('a');
    link.classList.add('page-link');
    link.href = '#';
    link.innerText = totalPages;
    link.addEventListener('click', function (event) {
      event.preventDefault();
      currentPageNumber = totalPages;
      renderJobs();
    });
    li.appendChild(link);
    pagination.appendChild(li);
  }

  var nextLi = document.createElement('li');
  nextLi.classList.add('page-item');
  var nextLink = document.createElement('a');
  nextLink.classList.add('page-link');
  nextLink.href = '#';
  nextLink.innerHTML = '<span aria-hidden="true">&raquo;</span>';
  nextLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (currentPageNumber < totalPages) {
      currentPageNumber++;
      renderJobs();
    }
  });
  nextLi.appendChild(nextLink);
  pagination.appendChild(nextLi);
}

function showJobDetails(index) {
  var job = jobs[index];

  var jobDetails = document.getElementById('jobDetails');
  var jobModal = document.getElementById('jobModal');
  var jobModalLabel = document.getElementById('jobModalLabel');
  var jobModalBody = document.getElementById('jobModalBody');

  jobModalLabel.textContent = job.title;
  jobModalBody.innerHTML = `
    <img src="${job.logo}" class="img-fluid">
    <h6 class="card-subtitle mb-2 text-muted">${job.company}</h6>
    <p class="card-text">
      Location: ${job.location}<br>
      Experience: ${job.experience}<br>

      Salary: ${job.salary}
    </p>
    <h5>Qualifications:</h5>
    <p>${job.qualifications}</p>
    <h5>Description:</h5>
    <p>${job.description}</p>
    <h5>Skills:</h5>
    <p>${job.skills}</p>
    <h5>Responsibilities:</h5>
    <p>${job.responsibilities}</p>
    <a href="${job.applyLink}" class="btn btn-primary">Apply Now</a>
  `;

  if (window.innerWidth <= 766) {
    // Show job details in modal form
    jobDetails.style.display = 'none';
    jobModal.style.display = 'block';
    $('#jobModal').modal('show');
  } else {
    // Show job details at the right side of the page
    jobDetails.innerHTML = `
      <div class="card job-details">
        <div class="card-body">
          <img src="${job.logo}" class="img-fluid">
          <h5 class="card-title">${job.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${job.company}</h6>
          <p class="card-text">
            Location: ${job.location}<br>
            Salary: ${job.salary}
          </p>
          <h5>Qualifications:</h5>
          <p>${job.qualifications}</p>
          <h5>Description:</h5>
          <p>${job.description}</p>
          <h5>Skills:</h5>
          <p>${job.skills}</p>
          <h5>Responsibilities:</h5>
          <p>${job.responsibilities}</p>
          <a href="${job.applyLink}" class="btn btn-primary">Apply Now</a>
        </div>
      </div>
    `;
  }
}

// Function to filter jobs
function filterJobs() {
  var searchJobInput = document.getElementById('searchJobInput').value.toLowerCase();
  var searchLocationInput = document.getElementById('searchLocationInput').value.toLowerCase();
  // var searchCompanyInput = document.getElementById('searchCompanyInput').value.toLowerCase();

  // var filterCompany = document.getElementById('filterCompany').value;
  // var filterSalary = document.getElementById('filterSalary').value;

  var filteredJobs = jobs.filter(function (job) {
    return (
      (job.title.toLowerCase().includes(searchJobInput) || job.company.toLowerCase().includes(searchJobInput) || job.location.toLowerCase().includes(searchJobInput) || job.salary.toLowerCase().includes(searchJobInput)) &&
      (job.location.toLowerCase().includes(searchLocationInput))
    );
  });

  jobs = filteredJobs;
  renderJobs();
}

// Initial rendering of jobs
renderJobs();