var skills = ["javascript","c++","algorithms","graphics","html5","ActionScript","PHP","User Experience","Augmented reality","Python","jQuery","CSS3","computer vision" ,"3d Modeling"];

var contacts = {
    "twitter": "@andrewtdunn",
    "github": "andrewtdunn",
    "location": "New York City"
};

var bio = {
    "name" : "Andrew Dunn",
    "role": "Developer/Smart Creative",
    "imageURL" : "images/1116701.jpg",
    "contacts": contacts,
    "age" : 39,
    "welcomeMessage": "Hello!",
    "skills" : skills,

    display: function(){

        var formattedName = HTMLheaderName.replace("%data%",bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedGreeting = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        var bioPic = HTMLbioPic.replace("%data%", bio.imageURL);

        var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        //$("#topContacts").append(formattedMobile);
        //$("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);

        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);



        $("#header").append(bioPic);
        $("#header").append(formattedGreeting);



        if ( bio.skills.length > 0){

            $("#header").append(HTMLskillsStart);

            for (var i = 0 ; i < bio.skills.length; i++){
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

var education = {

    "schools": [
        {
            "name":"Columbia University",
            "location":"New York City, NY",
            "degree":"Bachelor of Science",
            "majors":["Computer Science - Vision and Graphics"],
            "dates": "2008-2011",
            "url": "http://columbia.edu"
        },
        {
            "name":"Pratt Institue",
            "location":"Brooklyn, NY",
            "degree":"Master of Fine Arts",
            "majors":["Drawing and Painting"],
            "dates": "2000-2002",
            "url": "http://pratt.edu"
        },
        {
            "name":"Lousiana State University",
            "location":"Baton Rouge, LA",
            "degree":"Bachelor of Arts/Bachelor of Fine Arts",
            "majors":["English Literature", "Drawing and Painting"],
            "dates": "1995-1999",
            "url": "http://lsu.edu"
        },
        {
            "name":"Trinity University",
            "location":"San Antonio, TX",
            "degree":"N/A",
            "majors":["studies in pre-medicine"],
            "dates": "1993-1994",
            "url": "http://trinity.edu"
        }
    ],



    "onlineCourses": [
        {
            "title" : "Front End Developer Nanodegree",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com/course/nd001"
        },
        {
            "title" : "Intro to Computer Science",
            "school": "Udacity",
            "dates": "2012",
            "url": "https://www.udacity.com/course/cs101"
        },
        {
            "title" : "Up and Running with Linux for PHP Developers",
            "school": "Lynda.com",
            "dates": "2014",
            "url": "http://www.lynda.com/Apache-tutorials/Up-Running-Linux-PHP-Developers/158372-2.html"
        },
        {
            "title" : "Responsive CSS with SASS and Compass",
            "school": "Lynda.com",
            "dates": "2014",
            "url": "http://www.lynda.com/CSS-tutorials/Responsive-CSS-Sass-Compass/140777-2.html"
        },
        {
            "title" : "Coding Faster with Emmet",
            "school": "Udacity",
            "dates": "2014",
            "url": "http://www.lynda.com/Emmet-tutorials/Coding-Faster-Emmet/133353-2.html"
        },
        {
            "title" : "CSS with LESS and Sass",
            "school": "Lynda.com",
            "dates": "2014",
            "url": "http://www.lynda.com/tutorial/107921-2.html"
        },
        {
            "title" : "Up and Running with Backbone.js (2013)",
            "school": "Lynda.com",
            "dates": "2013",
            "url": "https://www.lynda.com"
        },
        {
            "title" : "AJAX Essential Training",
            "school": "Lynda.com",
            "dates": "2013",
            "url": "https://www.lynda.com"
        },
        {
            "title" : "Node.js First Look",
            "school": "Lynda.com",
            "dates": "2012",
            "url": "http://www.lynda.com/Nodejs-tutorials/Nodejs-First-Look/101554-2.html"
        },
         {
            "title" : "CSS Page Layouts",
            "school": "Lynda.com",
            "dates": "2012",
            "url": "http://www.lynda.com/tutorial/86003-2.html"
        },
        {
            "title" : "Create an Interactive Homepage Marquee with jQuery",
            "school": "Lynda.com",
            "dates": "2012",
            "url": "http://www.lynda.com/course-tutorials/Create-Interactive-Homepage-Marquee-jQuery/87637-2.html"
        },
        {
            "title" : "JavaScript Essential Training",
            "school": "Lynda.com",
            "dates": "2012",
            "url": "http://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/81266-2.html"
        },
        {
            "title" : "PHP with MySQL Beyond the Basics",
            "school": "Lynda.com",
            "dates": "2012",
            "url": "http://www.lynda.com/PHP-tutorials/php-with-OOP-beyond-the-basics/653-2.html"
        },
        {
            "title" : "CSS3 First Look ",
            "school": "Lynda.com",
            "dates": "2012",
            "url": "http://www.lynda.com"
        },
        {
            "title" : "jQuery Essential Training",
            "school": "Lynda.com",
            "dates": "2012",
            "url": "http://www.lynda.com/jQuery-tutorials/jQuery-Essential-Training/48370-2.html"
        },
        {
            "title" : "HTML5 First Look",
            "school": "Lynda.com",
            "dates": "2012",
            "url": "http://www.lynda.com/HTML-5-tutorials/html5-first-look/67161-2.html"
        },
        {
            "title" : "Unix for Mac OS X Users",
            "school": "Lynda.com",
            "dates": "2012",
            "url": "http://www.lynda.com/Mac-OS-X-10-6-tutorials/Unix-for-Mac-OS-X-Users/78546-2.html"
        },
        {
            "title" : "Flash CS4 Professional: Object-Oriented Programming",
            "school": "Lynda.com",
            "dates": "2012",
            "url": "http://www.lynda.com/ActionScript-3-tutorials/flash-cs4-professional-object-oriented-programming/759-2.html"
        },
        {
            "title" : "Flash Player 10 New Features",
            "school": "Lynda.com",
            "dates": "2010",
            "url": "http://www.lynda.com/Flash-Player-10-tutorials/new-features/52767-2.html"
        }

    ],

    display: function(){
        for (var school in education.schools){
            var newSchool = education.schools[school];
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", newSchool.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", newSchool.degree);
            var nameDegree = formattedSchoolName + formattedSchoolDegree;
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",newSchool.location);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", newSchool.dates);
            var majors = "";
            for (var newMajor in newSchool.majors){
                majors = majors + HTMLschoolMajor.replace("%data%", newSchool.majors[newMajor]);
            }

            $(".education-entry:last").append(nameDegree);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(majors);
        }



        $("#education").append(HTMLonlineClasses);

        $("#education").append('<div id="onlineSection">');
        for (var onlineClass in education.onlineCourses){
            $("#onlineSection").append(HTMLschoolStart);
            var newClass = education.onlineCourses[onlineClass];
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", newClass.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", newClass.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", newClass.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", newClass.url)

            var titleSchool = formattedOnlineURL + formattedOnlineTitle + formattedOnlineSchool;

             $(".education-entry:last").append(titleSchool);
             //$(".education-entry:last").append(formattedOnlineDates);
        }

        $("#education").append('</div>');
    }


};

var work = {
    "jobs" : [
        {
            "employer" : "Comcast",
            "title": "Front End Developer",
            "dates": "August 2015 - present",
            "location": "Philadelphia, PA",
            "description":"Developing middleware/cms tool for editors as well and an interface for users in the xfinity.com consumer preferences portal."
        },
        {
            "employer" : "Time Inc",
            "title": "Front End Developer",
            "dates": "May 2015 - August 2015",
            "location": "New York, NY",
            "description":"Developing and implement algorithms for maximizing ad display and share clicks for time.com and fortune.com"
        },
         {
            "employer" : "Burson-Marsteller/Proof Integrated Communications",
            "title": "Front End Developer",
            "dates": "August 2014-May2015",
            "location": "New York, NY",
            "description":"Online PR campaigns for the NFL, Friends of the Hebrew University and mobile implementation of bm.com"
        },
         {
            "employer" : "Shutterfly",
            "title": "Front End Developer",
            "dates": "August 2014-May 2015",
            "location": "New York, NY",
            "description":"Build an in browser word-processor which rendered to and svg element for a web-to-print application."
        },
        {
            "employer":"Showtime Networks",
            "title":"Front End Developer",
            "dates":"February 2009-May 2014",
            "location": "New York, NY",
            "description":"Microsites for Dexter, The Big C and Weeds. Animated Emmy Campaign for Homeland. Engineering of showtimeanytime.com "
        }

    ],

    display: function(){

        for (var job in work.jobs){
            var newJob = work.jobs[job];
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%",newJob.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", newJob.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedWorkDates  = HTMLworkDates.replace("%data%", newJob.dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", newJob.location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", newJob.description);

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }


}

var projects = {
    "projects":[
         {
            "title":"Showtime Emmy Campaign",
            "dates":"2012",
            "description":"Flash Animation of Showtime Emmy Campaign Ads.",
            "images":[
                "http://andrewtdunn.com/_images/project_images/shoEmmy2012.jpg"
            ]
        },
        {
            "title":"Tube The Vote",
            "dates":"2008",
            "description":"Working with a team of European developers, tracked the 2008 US Presidential election using the Twitter and Youtube API to provide data for college journalism students.",
            "images":[
                "http://andrewtdunn.com/_images/project_images/ttv.png"
            ]
        },
       {
            "title":"Hudson River Park Website",
            "dates":"2007",
            "description":"Relaunch of Hudson River Park website. Conceptualization and implementation of an animated map.",
            "images":[
                "http://andrewtdunn.com/_images/project_images/hrpt2.png"
            ]
        }
    ],

    display: function(){

        console.log(projects.projects);

        for (var project in projects.projects){
            addProject(projects.projects[project]);
        }

        function addProject(newProject){
            console.log(newProject.title);
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLworkEmployer.replace("%data%",newProject.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", newProject.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", newProject.description);
            var formattedProjectImages = "";
            for (var image in newProject.images){
                var img = newProject.images[image];
                formattedProjectImages = formattedProjectImages + HTMLprojectImage.replace("%data%",img);
            }

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            $(".project-entry:last").append(formattedProjectImages);
        }

    }
};




/*

$(document).click(function(loc){
    logClicks(loc.pageX, loc.pageY);
});

function logClicks(x,y){
    console.log("--------");
    console.log("X: " + x);
    console.log("Y: " + y);
    console.log("--------");
    console.log("");
}
*/


$("#main").append(internationalizeButton);

$("button").click(function(){
    //console.log(inName("andrew dunn"));

    var formattedName = HTMLheaderName.replace("%data%",inName(bio.name));
    console.log(formattedName);
    $("#header").prepend(formattedName);
});

function inName(oldName){
    var finalName = oldName;
    // Your code goes here!
    var spaceIndex = finalName.indexOf(" ");
    var firstName = finalName.substring(0,spaceIndex).toLowerCase();
    firstName = firstName.substring(0,1).toUpperCase() + firstName.substring(1);
    var lastName = finalName.substring(spaceIndex + 1).toUpperCase();

    finalName = firstName + " " + lastName

    // Don't delete this line!
    return finalName;

}

bio.display();
projects.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);

d3.selectAll("#onlineSection a").style("color", function(d, i) {
  return i % 2 ? "#666" : "#999";
});

d3.selectAll("#onlineSection a").style("opacity", "0.8");

d3.select("#header").transition()
    .duration(5000)
    .style("background-color", "#222");

d3.select("h2").transition()
    .duration(2000)
    .delay(3000)
    .style("color", "#222");

d3.selectAll(".grey-text").transition()
    .duration(500)
    .delay(function(d, i) { return 2000  +  i *  (100 +  Math.random() * 150); })
    .style("color", "#eee");


d3.select("#header .scifi").transition()
    .duration(2000)
    .delay(2000)
    .style("color", "#A6E0F2");


d3.select(".biopic").transition()
    .duration(1000)
    .delay(3600)
    .ease("linear")
    .style("opacity", ".6");

d3.select(".biopicCover").transition()
    .duration(1000)
    .delay(3600)
    .ease("linear")
    .style("opacity", ".8");



d3.select("hr").transition()
    .duration(200)
    .delay(2000)
    .ease("linear")
    .style("width", "100%");