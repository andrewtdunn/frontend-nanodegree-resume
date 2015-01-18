//$("#main").append("Andrew T. Dunn");

/*
var awesomeThoughts = "I am Andrew Dunn and I am AWESOME!";

console.log(awesomeThoughts);

var email = "atd2005@udacity.com";

var newEmail = email.replace("udacity","gmail");

console.log(email);
console.log(newEmail);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Andrew T. Dunn");;
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Developer");
$("#header").append(formattedRole);
*/


// $("#main").append(skills);
//$("#main").append(skills.length);
//

console.log (bio.name);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedGreeting = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var bioPic = HTMLbioPic.replace("%data%", bio.imageURL);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(bioPic);
$("#header").append(formattedGreeting);

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);

$("#header").append(work["position"]);
$("#header").append(education.name);