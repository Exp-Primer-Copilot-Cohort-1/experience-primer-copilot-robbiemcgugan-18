function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("member-skills");
    var memberSkillsContainer = document.getElementById("member-skills-container");

    if (memberSkillsContainer.style.display === "none") {
        memberSkillsContainer.style.display = "block";
        memberSkills.style.display = "block";
        member.style.display = "none";
        skills.style.display = "none";
    } else {
        memberSkillsContainer.style.display = "none";
        memberSkills.style.display = "none";
        member.style.display = "block";
        skills.style.display = "block";
    }
}