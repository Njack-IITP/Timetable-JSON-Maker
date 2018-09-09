var course = "Course";
var year = "Year";
var branch = "Branch";
$(document).ready(function(){
  loadTT();
});

function loadTT(){
  $("#course").html(course);
  $("#year").html(year);
  $("#branch").html(branch);
  $("#timetable").html('');

  var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  var i=0;
  for(i=0;i<5;i++){
    var html = "<tr><td>" + day[i] + "</td>";
    var rootRef = firebase.database().ref().child(course).child(year).child(branch).child(day[i]);
    rootRef.on("child_added", snap => {
      var name = snap.val();
      html += "<td>" + name + "</td>";
    });

    html += "</tr>";
    $("#timetable").append(html);
  }
}

function handleCourse(Course) {
  course = Course;
  loadTT();
}

function handleYear(Year) {
  year = Year;
  loadTT();
}

function handleBranch(Branch) {
  branch = Branch;
  loadTT();
}
