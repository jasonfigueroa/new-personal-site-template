/***********/
/* Factory */
/***********/
const contactData = {
    platforms: {
        github: {
            href: "https://github.com/jasonfigueroa",
            icon: "fa-github",
            text: "Checkout my GitHub"
        },
            twitter: {
                href: "https://twitter.com/jasonfigueroa_",
                icon: "fa-twitter",
                text: "Follow me on Twitter"
        }
    }

};

localStorage.setItem("contactData", JSON.stringify(contactData));
/***************/
/* End Factory */
/***************/

/**************/
/* Controller */
/**************/
const extractedData = JSON.parse(localStorage.getItem("contactData"));

let html = "";

for(key in extractedData) {
    let platformsObj = extractedData[key]; 
    for(platform in platformsObj) {
        let platformName = platformsObj[platform];
        html += `<article>
        <p><a href="${platformName.href}"><i class="fa ${platformName.icon}" aria-hidden="true"></i> ${platformName.text}</a></p>
        </article>`
    }
    
}

document.getElementById("social-media-links").innerHTML = html;
// $('#social-media-links').html(html);
/******************/
/* End Controller */
/******************/