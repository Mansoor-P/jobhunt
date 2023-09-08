


$(document).ready(function () {
    var jobNames = $(".job-names .job-name");
    var currentIndex = 0;

    // Show initial job names
    showJobNames();

    // Previous arrow click event
    $(".prev-arrow").click(function () {
        if (currentIndex > 0) {
            currentIndex--;
            showJobNames();
        }
    });

    // Next arrow click event
    $(".next-arrow").click(function () {
        if (currentIndex < jobNames.length - 1) {
            currentIndex++;
            showJobNames();
        }
    });

    // Function to display the relevant job names
    function showJobNames() {
        jobNames.hide();
        jobNames.eq(currentIndex).show();
    }
});