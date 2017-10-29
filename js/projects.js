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
            "date_completed": "",
            "technologies_used": [
                "HTML",
                "CSS",
                "JavaScript",
                "Skeleton"
            ],
            "teammates": []
        }
    ]
}

localStorage.setItem("jasonfigueroa.io/projects_db", JSON.stringify(projects_db));

/***********/
/* Factory */
/***********/
const projects_data = JSON.parse(localStorage.getItem("jasonfigueroa.io/projects_db"));

/***************/
/* End Factory */
/***************/