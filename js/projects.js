const idGenerator = function* () {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
};

const projectIdFactory = idGenerator();

const projects_db = {
    "projects": [
        {
            "project_id": `${ projectIdFactory.next().value }`,
            "project_name": "blog",
            "project_title": "My Blog",
            "project_content": [
                `I have a <a href="https://jasonfigueroa.github.io">blog</a> that I started in the spring of 2017. It’s a statically generated site hosted on GitHub. I built the site using <a href="https://blog.getpelican.com/">Pelican</a>, a static site generator written in Python. The content written for that site is written in Markdown and the theme I used is a Pelican theme by <a href="https://parbhatpuri.com/">parbhat</a>, which I modified slightly. The workflow for updating that site is very concise which makes it a breeze to push content to the web.`,
                `There are somethings I don’t like about that site. Due to my lack of knowledge of the underlying technologies that comprise Pelican I must depend on a lot of “magic” which I don’t like. Also, I’m not entirely happy with the design and responsiveness of the site.`,
                `I will continue to push content to that site just because of how fast and simple it is to publish to that site.`
            ],
            "date_completed": "",
            "technologies_used": [
                "HTML",
                "CSS",
                "JavaScript",
                "Pelican"
            ],
            "teammates": []
        },
        {
            "project_id": `${ projectIdFactory.next().value }`,
            "project_name": "personal-site",
            "project_title": "This Site",
            "project_content": [
                `This site is a personal site I’m creating while I’m at <a href="http://nashvillesoftwareschool.com/">Nashville Software School</a> (NSS). I’m taking a different approach to this site. All the code so far has been created from scratch. There is very minimal “borrowed” code. For example, the font used in this site is the same font used in Skeleton. I believe this approach will benefit me the most in the long run. I really want to gain a solid grasp on the fundamental technologies powering the users’ experience when interfacing with modern web applications. I’ll use this project to keep my HTML, CSS and JavaScript skills sharp. Maybe later down the road I’ll incorporate other technologies such as jQuery and Ajax.`,
                `This site is hosted on a server I have with <a href="https://www.digitalocean.com/">Digital Ocean</a>. I was using Amazon AWS before but my monthly bill was coming in at around $25 which for a student is way too much. Plus, with that kind of money I can have 5 servers with Digital Ocean. The only catch with Digital Ocean is that I must manage the server myself, with Amazon AWS I basically just dragged and dropped the files I wanted to upload.`
            ],
            "date_completed": "",
            "technologies_used": [
                "HTML",
                "CSS",
                "JavaScript",
                "Skeleton"
            ],
            "teammates": []
        }
    ],
    "other_projects": {
        "title": "Other Projects",
        "content": `I have had two other projects in the past, mostly with static content and using the Bootstrap Framework. I will probably provide a link within this site to those projects eventually.`
    }
}

localStorage.setItem("jasonfigueroa.io/projects_db", JSON.stringify(projects_db));

/***********/
/* Factory */
/***********/
const projects_data = JSON.parse(localStorage.getItem("jasonfigueroa.io/projects_db"));

let html = ``;

projects_data.projects.forEach( (project) => {
    html += `<article>`;
    html += `<h2>${ project.project_title }</h2>`;
    project.project_content.forEach( (paragraph) => {
        html += `<p>${ paragraph }</p>`;
    });
    html += `</article>`;
});

// adding other projects
html += `<article>`;
html += `<h2>${ projects_data.other_projects.title }</h2>`;
html += `<p>${ projects_data.other_projects.content }</p>`;
html += `</article>`;

document.getElementById("projects").innerHTML += html;
/***************/
/* End Factory */
/***************/