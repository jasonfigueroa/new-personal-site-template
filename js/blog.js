const idGenerator = function* () {
    let id = 1;
    while(true) {
        yield id;
        id++;
    }
};

const articleIdFactory = idGenerator();

const blog_db = {
    "articles": [
        {    
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "JavaScript Fibonacci Memoization",
            "article_date": {"datetime": "2017-10-27", "text": "October 27, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "I wanted to write a blog post but wasn’t sure what to write about. Well, I’ve been working a lot with JavaScript lately and have been having a lot of fun with it. I come from a background of mostly C and Java with a dash of Python 😉. Passing functions as arguments and returning functions is all very new to me so I was considering writing about first-class functions, higher-order functions and/or closures.",
                "Well I started researching online and watching a few videos on YouTube. After a while I was feeling comfortable with what I learned so I decided to create an implementation of Fibonacci.",
                "I will not delve into the details of Fibonacci numbers but there were two concepts I knew right off the bat I wanted to incorporate into the solution. The first was recursion. The second was closures, although I had no idea how I was going to implement the latter with Fibonacci.",
                "Before I started developing the solution I decided that I wanted to have some sort of timer to capture the duration of the solution. Fibonacci executes a lot of recursive calls and a lot of redundant calculations making it very slow when trying to calculate higher numbers.",
                "The following is what I came up with for a timer.",
                "gist",
                "A higher order function returning another function. The function to be timed in this case is Fibonacci. The higher-order function, timer, is to be called just before the execution of Fibonacci. The returned function is to be executed on the completion of Fibonacci. The anonymous function returned also carries a record of the context in which it was created, in this case the variable startTime. This anonymous function along with the context make up a closure.",
                "The following is what I used to report my findings.",
                "gist",
                "A basic function that receives the time clocked in milliseconds, it converts those milliseconds to minutes and seconds and returns them as a string.",
                "Here is the Fibonacci function I came up with.",
                "gist",
                "Nothing ground breaking here.",
                "When I tested that solution I thought maybe something was wrong with my function. My console wasn’t giving me a result. A few minutes later I ran the solution and walked away from my laptop for a while when I returned there was the solution in the console.",
                "This got me thinking about memoization. Memoization is the caching of results from expensive calculations to avoid remaking those same calculations. This works great for something like Fibonacci because the recursive calls can become very taxing, timewise.",
                "I knew an object would be perfect for this, the key could be n and the value could be f(n). However, I didn’t want to pollute the global scope. By now it was getting late in the evening and I decided to call it a night. I woke up at around 3am and couldn’t go back to sleep. Then I started thinking about the problem from the night before and it finally clicked. The solution was exactly what I was looking at the day before, closures.",
                "The following is the solution I came up with the following morning.",
                "gist",
                "On every iteration the object, memo, is searched for the key, n, if the key is found the value associated with the key is returned. This negates the need for any unnecessary recursive calls. Every value is calculated once and cached in the object.",
                "I decided to put this to the test and see if there was any significant difference between the solutions.",
                "The outcome was astounding!",
                "The following is what I ran in the console for the non-memoized solution.",
                "img",
                "Okay, 29 and a half seconds, not bad.",
                "The following is what I ran for the memoized solution.",
                "img",
                "Yep, 1 millisecond!",
                "I had to omit the call to formatted_time() because there were no minutes or seconds to format!",
                "I was in disbelief, I decided to increase the value of n to 50 just to see how much of a difference it would make.",
                "Here is the non-memoized solution.",
                "img",
                "Wow! As you can see the time lapsed seems to increase exponentially.",
                "Here is the memoized solution running 50 as the value of n.",
                "img",
                "2 milliseconds!",
                "Here is a visual representation of what is happening on every iteration an initial calculation is made.",
                "img",
                "The programs sees that a calculation hasn’t been made for the value n, the program executes the calculations and the outcome is cached as a key value pair.",
                "That is just up to number 12. This object gets big fast.",
                "The benefits of memoization are obvious. It would be nice to find a use for this other than experimentation. I have read that some languages feature automatic memoization which can be leveraged by the developer. I’m not sure if JavaScript is one of those languages but that’ll have to be a topic for another day."
            ],
            "article_gists": [
                {
                    "src": "https://gist.github.com/jasonfigueroa/091ea9d9f43936ae01f9e1ec29d0a45c.js",
                    "css": '<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-4e9a9c3875d3f396d756f5d44736996ee29e5a8dec4dd0ffe658bdb144454139.css">',
                    "html": '<div id=\"gist82386830\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-timer-js\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-javascript\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-timer-js-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-timer-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> An example of a valid parameter is Date.now()<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-timer-js-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-timer-js-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">timer<\/span> <span class=\"pl-k\">=<\/span> (<span class=\"pl-smi\">startTimeInMilliseconds<\/span>) <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-timer-js-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-timer-js-LC3\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">startTime<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">parseFloat<\/span>(startTimeInMilliseconds);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-timer-js-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-timer-js-LC4\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-timer-js-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-timer-js-LC5\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> (<span class=\"pl-smi\">endTimeInMilliseconds<\/span>) <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-timer-js-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-timer-js-LC6\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">endTime<\/span>  <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">parseFloat<\/span>(endTimeInMilliseconds);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-timer-js-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-timer-js-LC7\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-timer-js-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-timer-js-LC8\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">return<\/span> endTime <span class=\"pl-k\">-<\/span> startTime;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-timer-js-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-timer-js-LC9\" class=\"blob-code blob-code-inner js-file-line\">    };<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-timer-js-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-timer-js-LC10\" class=\"blob-code blob-code-inner js-file-line\">};<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/jasonfigueroa/091ea9d9f43936ae01f9e1ec29d0a45c/raw/7017f0a657173a7f7f6c1c16a4dc0e9703b0c35f/timer.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/jasonfigueroa/091ea9d9f43936ae01f9e1ec29d0a45c#file-timer-js\">timer.js<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n'
                },
                {
                    "src": "https://gist.github.com/jasonfigueroa/eeb403a745b5c22e07c20e446136695b.js",
                    "css": '<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-4e9a9c3875d3f396d756f5d44736996ee29e5a8dec4dd0ffe658bdb144454139.css">',
                    "html": '<div id=\"gist82387073\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-formatted-time-js\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-javascript\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-formatted-time-js-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-formatted-time-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> returns formatted time in minutes and seconds as a string<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-formatted-time-js-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-formatted-time-js-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">formattedTime<\/span> <span class=\"pl-k\">=<\/span> (<span class=\"pl-smi\">timeInMilliseconds<\/span>) <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-formatted-time-js-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-formatted-time-js-LC3\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">time<\/span> <span class=\"pl-k\">=<\/span> timeInMilliseconds;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-formatted-time-js-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-formatted-time-js-LC4\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-formatted-time-js-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-formatted-time-js-LC5\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">let<\/span> timeStr <span class=\"pl-k\">=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-formatted-time-js-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-formatted-time-js-LC6\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-formatted-time-js-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-formatted-time-js-LC7\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">minutes<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">Math<\/span>.<span class=\"pl-c1\">floor<\/span>(time <span class=\"pl-k\">/<\/span> <span class=\"pl-c1\">60000<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-formatted-time-js-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-formatted-time-js-LC8\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">seconds<\/span> <span class=\"pl-k\">=<\/span> (time <span class=\"pl-k\">%<\/span> <span class=\"pl-c1\">60000<\/span>) <span class=\"pl-k\">/<\/span> <span class=\"pl-c1\">1000<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-formatted-time-js-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-formatted-time-js-LC9\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-formatted-time-js-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-formatted-time-js-LC10\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">`<\/span><span class=\"pl-s1\"><span class=\"pl-pse\">${<\/span> minutes <span class=\"pl-pse\">}<\/span><\/span> minutes and <span class=\"pl-s1\"><span class=\"pl-pse\">${<\/span> seconds <span class=\"pl-pse\">}<\/span><\/span> seconds<span class=\"pl-pds\">`<\/span><\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-formatted-time-js-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-formatted-time-js-LC11\" class=\"blob-code blob-code-inner js-file-line\">};<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/jasonfigueroa/eeb403a745b5c22e07c20e446136695b/raw/6378c3aa5fbe97fd0488ccbd778918599ce078f8/formatted-time.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/jasonfigueroa/eeb403a745b5c22e07c20e446136695b#file-formatted-time-js\">formatted-time.js<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n'
                },
                {
                    "src": "https://gist.github.com/jasonfigueroa/74eea13072ab197872015a1d8b080071.js",
                    "css": '<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-4e9a9c3875d3f396d756f5d44736996ee29e5a8dec4dd0ffe658bdb144454139.css">',
                    "html": '<div id=\"gist82387433\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-fibonacci-js\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-javascript\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-fibonacci-js-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-fibonacci-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">fib<\/span> <span class=\"pl-k\">=<\/span> (<span class=\"pl-smi\">n<\/span>) <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci-js-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-fibonacci-js-LC2\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">if<\/span> (n <span class=\"pl-k\">===<\/span> <span class=\"pl-c1\">0<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci-js-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-fibonacci-js-LC3\" class=\"blob-code blob-code-inner js-file-line\">		<span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">0<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci-js-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-fibonacci-js-LC4\" class=\"blob-code blob-code-inner js-file-line\">	} <span class=\"pl-k\">else<\/span> <span class=\"pl-k\">if<\/span> (n <span class=\"pl-k\">&lt;=<\/span> <span class=\"pl-c1\">2<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci-js-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-fibonacci-js-LC5\" class=\"blob-code blob-code-inner js-file-line\">		<span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">1<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci-js-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-fibonacci-js-LC6\" class=\"blob-code blob-code-inner js-file-line\">	}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci-js-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-fibonacci-js-LC7\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">return<\/span> <span class=\"pl-en\">fib<\/span>(n <span class=\"pl-k\">-<\/span> <span class=\"pl-c1\">1<\/span>) <span class=\"pl-k\">+<\/span> <span class=\"pl-en\">fib<\/span>(n <span class=\"pl-k\">-<\/span> <span class=\"pl-c1\">2<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci-js-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-fibonacci-js-LC8\" class=\"blob-code blob-code-inner js-file-line\">};<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/jasonfigueroa/74eea13072ab197872015a1d8b080071/raw/c2148ccdd761b63672710760bf57ad2b406cd97b/fibonacci.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/jasonfigueroa/74eea13072ab197872015a1d8b080071#file-fibonacci-js\">fibonacci.js<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n'
                },
                {
                    "src": "https://gist.github.com/jasonfigueroa/4a732137dbb2972b6416a3a4967a9b20.js",
                    "css": '<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-4e9a9c3875d3f396d756f5d44736996ee29e5a8dec4dd0ffe658bdb144454139.css">',
                    "html": '<div id=\"gist82388078\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-fibonacci_memo-js\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-javascript\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">fibonacci_memo<\/span> <span class=\"pl-k\">=<\/span> () <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC2\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">memo<\/span> <span class=\"pl-k\">=<\/span> {};<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC3\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC4\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">fibonacci<\/span> <span class=\"pl-k\">=<\/span> (<span class=\"pl-smi\">n<\/span>) <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC5\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">if<\/span> (n <span class=\"pl-k\">in<\/span> memo) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC6\" class=\"blob-code blob-code-inner js-file-line\">            <span class=\"pl-k\">return<\/span> memo[n];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC7\" class=\"blob-code blob-code-inner js-file-line\">        } <span class=\"pl-k\">else<\/span> <span class=\"pl-k\">if<\/span> (n <span class=\"pl-k\">===<\/span> <span class=\"pl-c1\">0<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC8\" class=\"blob-code blob-code-inner js-file-line\">            <span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">0<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC9\" class=\"blob-code blob-code-inner js-file-line\">        } <span class=\"pl-k\">else<\/span> <span class=\"pl-k\">if<\/span> (n <span class=\"pl-k\">&lt;=<\/span> <span class=\"pl-c1\">2<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC10\" class=\"blob-code blob-code-inner js-file-line\">            <span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">1<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC11\" class=\"blob-code blob-code-inner js-file-line\">        }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC12\" class=\"blob-code blob-code-inner js-file-line\">        <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC13\" class=\"blob-code blob-code-inner js-file-line\">        memo[n] <span class=\"pl-k\">=<\/span> <span class=\"pl-en\">fibonacci<\/span>(n <span class=\"pl-k\">-<\/span> <span class=\"pl-c1\">1<\/span>) <span class=\"pl-k\">+<\/span> <span class=\"pl-en\">fibonacci<\/span>(n <span class=\"pl-k\">-<\/span> <span class=\"pl-c1\">2<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC14\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">return<\/span> memo[n];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC15\" class=\"blob-code blob-code-inner js-file-line\">    };<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC16\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC17\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> fibonacci;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fibonacci_memo-js-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-fibonacci_memo-js-LC18\" class=\"blob-code blob-code-inner js-file-line\">};<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/jasonfigueroa/4a732137dbb2972b6416a3a4967a9b20/raw/8a0748db457da691366ef9a9570a1bb9bd0e5fb1/fibonacci_memo.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/jasonfigueroa/4a732137dbb2972b6416a3a4967a9b20#file-fibonacci_memo-js\">fibonacci_memo.js<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n'
                }                
            ],
            "article_images": [
                "images/fib-value-of-46-non-memo.png",
                "images/fib-value-of-46-memo.png",
                "images/fib-value-of-50-non-memo.png",
                "images/fib-value-of-50-memo.png",
                "images/demo-of-value-caching.png"
            ],
            "article_tags": [
                "JavaSript",
                "memoization",
                "dynamic programming",
                "algorithms"
            ]
        }
    ] 
};

localStorage.setItem("jasonfigueroa.io/blog_db", JSON.stringify(blog_db));

/***********/
/* Factory */
/***********/
const blog_data = JSON.parse(localStorage.getItem("jasonfigueroa.io/blog_db"));


let getGist;
let getImage;
let html = ``;

let currentGist;

const getArrayItem = (arr) => {
    let count = 0;

    return () => {
        count++;
        return arr[count - 1];
    };
};

blog_data.articles.forEach( (article) => {
    
    getGist = getArrayItem(article.article_gists);
    getImage = getArrayItem(article.article_images);

    html += `<article>`;

    html += `<h2>${ article.article_title }</h2>
    <p class="publish-date">
      <time datetime="${ article.article_date.datetime }">${ article.article_date.text }</time>
    </p>`;

    article.article_content.forEach( (content_item) => {
        if (content_item === "gist") {
            // html += `<script src="${ getGist() }"></script>`;
            currentGist = getGist();
            html += `${ currentGist["css"] }`;
            html += `${ currentGist["html"] }`;
        } else if (content_item === "img") {
            html += `<img src="${ getImage() }">`;
        } else {
            html += `<p>${ content_item }</p>`;
        }
    });

    html += `</article>`;
});

document.getElementById("articles").innerHTML = html;
/***************/
/* End Factory */
/***************/