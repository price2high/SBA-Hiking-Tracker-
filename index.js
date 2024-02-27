document.addEventListener('DOMContentLoaded', function() {
    // Cache elements
    const hikeForm = document.getElementById('hikeForm');
    const hikeNameInput = document.getElementById('hikeName');
    const startTimeInput = document.getElementById('startTime');
    const stopTimeInput = document.getElementById('stopTime');
    const viewHikesBtn = document.getElementById('viewHikesBtn');
    const hikeLog = document.getElementById('hikeLog');
    const hikeList = document.getElementById('hikeList');
  
    // Event listener for form submission
    hikeForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Validate input using HTML attribute validation
      if (hikeForm.checkValidity()) {
        // Create a new hike entry
        const hikeEntry = document.createElement('li');
        hikeEntry.innerHTML = `<strong>${hikeNameInput.value}</strong> - ${startTimeInput.value} to ${stopTimeInput.value}`;
  
        // Add the new hike entry to the log
        hikeList.appendChild(hikeEntry);
  
        // Clear the form inputs
        hikeForm.reset();
      }
    });
  
    // Event listener for viewing previously logged hikes
    viewHikesBtn.addEventListener('click', function() {
      // Toggle the visibility of the hike log section
      hikeLog.classList.toggle('hidden');
    });
  
    // Use BOM to get current date and time
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    console.log('Current Time:', currentTime);
  
    // Use BOM to get user agent information
    const userAgent = navigator.userAgent;
    console.log('User Agent:', userAgent);
  });
  