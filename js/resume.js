const idGenerator = function* () {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}

const jobIdFactory = idGenerator();
const schoolIdFactory = idGenerator();

const resume_db = {
    "jobs": [
        {    
            "job_id": `${ jobIdFactory.next().value }`,
            "job_duties_accomplishments": [
                "I worked in Human Resources and Information Systems at Kennedy Space Center. I helped run some of our recurring data reports using tools such as Excel, Access and OBIEE. I was also an editor of the Pathways website.",
                "I automated some of our recurring reports using VBA. Before I left I was developing an Access database to help encapsulate the process of onboarding new employees. I was using forms for the user interface, VBA for the logic, and a combination of VBA and SQL for data manipulation.",
                "I was a member of the Agency’s OBIEE User Group. I was also on the Agency’s OBIEE transition team. I had the opportunity to go to Marshall Space Flight Center in Alabama to help develop some of the Agency’s biggest analyses. I helped generalize some of our analyses using date calculations to avoid having to prompt users for dates. Some of my date calculation formulas have been published in the Agency’s official OBIEE documentation."
            ],
            "job_title": "Student Trainiee (Information Technology)",
            "job_organization": "NASA",
            "job_date_rng": "Jan 2016 - Sep 2017"
        },
        {
            "job_id": `${ jobIdFactory.next().value }`,
            "job_duties_accomplishments": [
                "Managed living quarters for the company. Was the liaison for our Commander and Iraqi Management Team.",
                "Managed lead vehicle for a personal security detail. Responsible for navigation and situation reports.",
                "Company’s Counter RCIED Electronic Warfare Specialist."
            ],
            "job_title": "Infantryman, Squad Leader",
            "job_organization": "United States Army",
            "job_date_rng": "Sep 2006 - Feb 2012"
        },
        {
            "job_id": `${ jobIdFactory.next().value }`,
            "job_duties_accomplishments": [
                "Sorted, loaded and unloaded packages. Awarded Employee of the Month 3 times."
            ],
            "job_title": "Unloader",
            "job_organization": "UPS",
            "job_date_rng": "Aug 2004 - Aug 2006"
        }
    ],
    "schools": [
        {
            "school_id": `${ schoolIdFactory.next().value }`,
            "school_name": "St. Johns River State College",
            "school_location": "Orange Park, FL",
            "school_cert_awarded": "Associate in Arts",
            "school_gpa": "3.51",
            "school_award_title": "Honors",
            "school_award_desc": "Cum Laude"
        },
        {
            "school_id": `${ schoolIdFactory.next().value }`,
            "school_name": "University of Central Florida",
            "school_location": "Orlando, FL",
            "school_cert_awarded": "Information Technology, BS",
            "school_gpa": "3.359",
            "school_award_title": "Dean's List",
            "school_award_desc": "Spring 2014, Fall 2016"
        }
    ],
    "skills": "Bootstrap, HTML/CSS, JavaScript, Python, VBA, Linux, Excel, Access, Outlook, Word, PowerPoint"    
}

localStorage.setItem("jasonfigueroa.io/resume_db", JSON.stringify(resume_db));

/***********/
/* Factory */
/***********/
const resume_data = JSON.parse( localStorage.getItem("jasonfigueroa.io/resume_db") );

const jobs = resume_data.jobs;

let html = "";

html += `<p class="bold underline">Work Experience</p>`;

jobs.forEach( (job) => {
    html += `<article>`;
    html += `<div class="job-desc">
    <div class="row">
      <p class="bold one-half column">${ job.job_organization }</p>
      <p class="bold one-half column job-date-rng">${ job.job_date_rng }</p>
    </div>
    <p><span class="bold">Title:</span> ${ job.job_title }</p>
    <p class="bold">Duties and Accomplishments</p>
    `;
    
    job.job_duties_accomplishments.forEach( (paragraph) => {
        html += `<p>${ paragraph }</p>`;
    } );
} );
html += `</article>`;
html += `</div>`;

document.getElementById("professional-history").innerHTML = html;

html = ``;

html += `<p class="bold underline">Education</p>`
        
const schools = resume_data.schools;

schools.forEach( (school) => {
    html += `<p class="bold">${ school.school_name }</p>
    <p>${ school.school_location }</p>
    <div class="row">
    <p class="one-third column"><span class="bold">Major:</span> ${ school.school_cert_awarded }</p>
    <p class="one-third column"><span class="bold">GPA:</span> ${ school.school_gpa }</p>
    <p class="one-third column"><span class="bold">${ school.school_award_title }:</span> ${ school.school_award_desc }</p>
    </div>`    
} );

document.getElementById("educational-history").innerHTML = html;

html = `<p>
<span class="bold">Skills:</span> ${ resume_data.skills }
</p>`;

document.getElementById("skills").innerHTML = html;
/***************/
/* End Factory */
/***************/