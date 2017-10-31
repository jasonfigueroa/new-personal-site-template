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
        }, // Lorem Blog Posts
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Quisque in Auctor",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Curabitur vitae est commodo, consectetur nibh non, commodo ipsum. Vestibulum semper varius diam, et tempus metus pretium at. Mauris quis sapien ac mi aliquet gravida et sit amet dui. Ut faucibus varius neque at fringilla. Duis vulputate ligula volutpat justo vulputate porta. Mauris vel maximus diam. Duis finibus condimentum lorem, non ultrices sem lacinia ac. Phasellus fermentum sem ipsum, sit amet faucibus lacus dignissim at. Mauris nunc mauris, tristique a ullamcorper vel, ornare sit amet nibh. Vestibulum sodales enim et felis lobortis dapibus. Aenean commodo, libero non mattis tempus, arcu est consequat nisl, quis tristique eros odio ac nisi. Nullam faucibus lobortis odio, vel fermentum nunc dapibus in. Proin dapibus tristique erat vel viverra. Pellentesque nec semper orci, eget pharetra nunc.",
                "Quisque euismod augue id porta feugiat. Nam sodales a est ac scelerisque. Suspendisse a risus finibus, bibendum nunc a, pharetra nunc. Nunc iaculis, metus at facilisis finibus, massa lacus rutrum dui, vel rutrum neque urna ac lorem. Quisque ut mattis lectus, quis vulputate nisl. Quisque volutpat semper mauris vitae volutpat. Etiam leo diam, efficitur vel malesuada quis, varius non tellus. Cras semper velit metus, in dictum nibh faucibus eget. Sed fringilla mauris non mauris feugiat, at finibus velit dignissim. Vestibulum varius elementum sapien sed consequat. In hac habitasse platea dictumst. Nunc scelerisque malesuada metus sit amet dignissim. Donec luctus enim eu turpis auctor, nec vestibulum turpis egestas. Maecenas eu facilisis magna.",
                "Praesent vehicula turpis sem, id lacinia turpis pellentesque a. Donec pretium consectetur luctus. Mauris eleifend ante ex, id hendrerit dolor eleifend a. Mauris pulvinar sapien eget nunc elementum, quis luctus nisl varius. Nulla sodales finibus lobortis. Suspendisse potenti. Nullam est mauris, euismod sit amet odio nec, faucibus ornare enim. Donec fringilla venenatis nibh et semper. Sed lacinia orci ac est varius suscipit. Maecenas hendrerit dolor sit amet justo convallis euismod. Nullam dapibus bibendum eros ac sagittis. Integer accumsan ante eu dictum sagittis.",
                "Nam interdum hendrerit mi, ac dignissim sem mollis sit amet. Praesent eget nibh velit. Etiam id viverra diam, id congue eros. Vivamus finibus sapien et lacinia aliquam. Nulla facilisi. Mauris mollis dui ac pellentesque malesuada. Proin a dolor tortor. Fusce iaculis volutpat sem a egestas. Nullam luctus auctor odio."
            ],
            "article_gists": [
                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "JavaSript",
                "CSS"
            ]
        },
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Vivamus Elementum",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Etiam a accumsan turpis, nec auctor erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam aliquet suscipit velit, sit amet consequat felis porta nec. Pellentesque vestibulum commodo purus, in laoreet ipsum finibus et. Ut non mi imperdiet, gravida lectus euismod, sodales tortor. Nam luctus ante nunc, ut malesuada dui bibendum sed. Nam vitae massa blandit, gravida lectus at, feugiat massa. Sed fringilla luctus pharetra. Etiam rhoncus maximus orci et tincidunt. Aliquam sit amet elit ligula. Quisque non pharetra mauris, et consectetur ipsum. Sed lectus turpis, pharetra a urna sed, interdum euismod erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur a nunc quis eros faucibus maximus. Quisque varius tortor nulla, at vestibulum nisl finibus quis. Nunc massa mauris, fermentum in odio sit amet, mattis sagittis orci.",
                "Praesent in odio in metus viverra finibus. Aliquam et nibh nisl. Proin vitae dolor nec neque varius sagittis. Maecenas id diam et felis malesuada sollicitudin eget non enim. Quisque sit amet luctus lectus, eu porta velit. Curabitur pulvinar, velit ac dapibus elementum, tellus turpis posuere nunc, ac viverra nulla mauris id quam. Vivamus sollicitudin, diam vitae laoreet semper, enim purus mattis ex, quis consequat ante lacus eget nibh. Maecenas vehicula leo ac tortor efficitur cursus. Pellentesque ac ultrices mi, id fringilla ipsum. Vestibulum molestie, erat et egestas laoreet, leo enim pellentesque enim, sed venenatis tellus elit ac lorem. Donec non dignissim lectus, ac pharetra libero. Sed id nibh libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ut nibh non metus eleifend porta vel a magna.",
                "Nulla accumsan est et libero eleifend, non ultricies diam mollis. Proin molestie sapien eu metus eleifend sodales. Donec vitae dictum magna. Integer porttitor lacinia arcu, quis commodo massa laoreet eu. Sed venenatis arcu eget ante aliquam, non semper justo dignissim. In hac habitasse platea dictumst. Nunc consequat sem ante, vel molestie quam cursus sed. Ut feugiat tellus ac velit venenatis fermentum. Quisque posuere tincidunt varius. Suspendisse massa libero, consectetur et vestibulum in, posuere ac nisl. Sed eget cursus nibh. Donec nec velit luctus, porta est id, mollis nisl. Nulla facilisi."
            ],
            "article_gists": [
                                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "JavaSript",
                "JSON"
            ]
        },
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Praesent Eget Nibh",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Cras est mi, fermentum vel imperdiet non, maximus sed dolor. Phasellus vel aliquam turpis, id bibendum augue. Nam ligula lacus, sollicitudin sit amet porttitor in, congue at turpis. Donec eu purus in metus facilisis dictum. Nulla pulvinar risus sit amet varius facilisis. Integer ultricies eros sit amet eros efficitur ultrices. Integer eros metus, consequat vel gravida sit amet, accumsan vel quam. Ut vestibulum elit sit amet risus finibus efficitur. Aenean id ipsum malesuada, ullamcorper elit in, convallis nulla. Quisque luctus cursus viverra. Aliquam scelerisque, nulla quis commodo vulputate, orci nunc hendrerit tortor, eget sagittis magna ex eget ipsum. Duis enim libero, bibendum malesuada metus non, pulvinar vestibulum risus. Etiam ultrices congue egestas. Nam mollis nisl sit amet bibendum feugiat. In eget lacinia mi.",
                "Phasellus vel vulputate sem. Praesent lorem diam, consequat eu felis eu, eleifend viverra metus. Aliquam luctus, metus sit amet hendrerit laoreet, magna nisi tristique eros, eget faucibus mi est sed lectus. Nullam erat leo, pretium vel ipsum quis, tincidunt accumsan nisi. Cras consequat diam at metus fermentum, sit amet cursus orci vestibulum. Suspendisse et condimentum ligula. Nulla ut blandit neque, et malesuada magna. Phasellus dolor ex, tincidunt in fermentum vulputate, vehicula vel velit. Fusce a enim eleifend, porta ex quis, posuere sem. Nunc interdum augue turpis, a elementum magna sodales at. Maecenas velit eros, auctor quis tellus ac, sodales consectetur felis. Nulla eget neque justo. Morbi a mauris egestas massa consectetur iaculis eget eget magna. Nulla id mollis tellus, quis sollicitudin mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut facilisis turpis et mauris tincidunt tristique."
            ],
            "article_gists": [
                                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "C#",
                ".NET",
                "Windows"
            ]
        },
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Quis Luctus Nisl",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Etiam sit amet orci at massa vulputate tristique id in elit. In in nibh vitae augue consectetur tempor eget feugiat augue. Fusce vestibulum tincidunt diam ut faucibus. Cras aliquet ullamcorper aliquam. Nullam ac quam a ante convallis luctus. Vestibulum est dui, venenatis commodo dapibus quis, ultrices non diam. Sed pharetra aliquam enim sit amet maximus. Maecenas in eros ullamcorper, posuere ligula vel, tempor sapien. Duis efficitur, diam ut accumsan viverra, arcu odio tristique sapien, in imperdiet dolor mi id leo. Cras a ex mauris. Nunc a odio quis magna semper molestie at non diam. Curabitur lectus urna, vulputate vitae elementum quis, semper id leo. Quisque suscipit in risus vel venenatis. Cras id pulvinar justo, vitae finibus velit. Sed nisi lacus, pharetra eu vulputate in, varius vel mi.",
                "In nec rutrum tellus, a sodales nibh. Vestibulum a turpis sed felis maximus volutpat. Suspendisse nibh est, rhoncus quis consequat ac, lacinia vitae purus. Ut ut ante massa. Sed sed nisi pulvinar, malesuada nibh non, tincidunt quam. Quisque nisi dui, lacinia eu dui id, efficitur ultricies nibh. Pellentesque lacus felis, placerat a condimentum venenatis, sagittis eget orci. Phasellus lacinia leo eget dapibus euismod. Suspendisse potenti. Nam varius libero consectetur enim malesuada, sit amet venenatis orci convallis. Nam aliquet tristique purus nec faucibus. Sed et leo id tortor consectetur iaculis in ut turpis.",
                "Vestibulum vitae mattis arcu. Aenean rutrum volutpat tellus, ac aliquam nulla feugiat sit amet. Quisque pretium varius tortor, a molestie ex ultricies id. Maecenas condimentum maximus erat vel commodo. Aenean mollis vulputate ipsum, non sagittis tellus mattis et. Nunc dictum mi nulla, et dapibus enim facilisis non. Nam sagittis orci vel lectus dapibus lobortis. Vestibulum aliquet leo vulputate erat gravida luctus. Proin lacinia neque a orci eleifend, in rutrum elit posuere. Vivamus tincidunt nisl sit amet iaculis suscipit. Pellentesque elementum ullamcorper velit accumsan suscipit. Aenean gravida mi in sem lacinia sagittis. Morbi a dignissim lorem, fermentum faucibus elit. Sed in lacus ut nisl convallis ornare eu sit amet quam. Morbi bibendum ut magna eget porta. Duis quis nulla cursus arcu ultrices tincidunt a quis enim.",
                "Duis suscipit nec turpis ut iaculis. Donec imperdiet dictum mi sit amet molestie. Praesent et feugiat risus. Donec ac lectus dolor. In semper elementum metus, et malesuada elit consectetur sollicitudin. Mauris cursus ante eleifend nisl aliquam, eget varius nisl accumsan. Ut bibendum eu enim vel venenatis. Aenean dapibus mauris ut turpis fermentum, ut lobortis elit congue. Nullam consequat urna rutrum magna commodo, nec consectetur erat volutpat. Quisque et elit eros. Sed tempus, nulla rutrum semper tincidunt, neque erat varius odio, nec mollis enim arcu ut magna. Fusce blandit, nisl mattis tincidunt tristique, risus quam finibus nisi, quis feugiat mauris orci at turpis. Duis congue elementum ex in tincidunt. Ut feugiat turpis id eros tempor tincidunt. Morbi blandit fringilla ex, nec fermentum sem bibendum et. Morbi tristique nibh a mattis ullamcorper."
            ],
            "article_gists": [
                                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "JavaSript",
                "Linux"
            ]
        },
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Lacus Rutrum Dui",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Nullam efficitur orci massa, auctor placerat nunc dignissim vitae. Donec ac sem non est feugiat sollicitudin. Mauris tincidunt consectetur congue. Quisque bibendum ex quis porttitor maximus. Nunc luctus urna porttitor, iaculis est a, laoreet ipsum. Mauris ornare blandit bibendum. Morbi enim nisi, tristique in semper sit amet, ornare ut ante. Quisque in mattis nisi.",
                "Nam aliquam, justo non vestibulum blandit, ante augue fermentum enim, vel luctus ipsum tellus vel ante. Nulla facilisi. Donec suscipit massa vitae ipsum ornare convallis. Phasellus magna dui, maximus a posuere et, ornare a justo. Praesent pharetra dolor venenatis nibh rhoncus fermentum. Integer ac magna ligula. Fusce id nisi magna. Morbi mi neque, facilisis a vestibulum non, malesuada ac diam. Cras euismod, lorem a congue aliquam, tortor enim viverra felis, nec ullamcorper mauris est id purus. Mauris sagittis sed nisl vel aliquet. Aenean vehicula ex ac lorem interdum pretium. Nunc fringilla arcu in erat rhoncus, eu gravida enim mattis. Duis imperdiet feugiat fermentum. Etiam at finibus leo, eget placerat tellus. Duis viverra diam arcu, quis volutpat odio accumsan at. Cras vitae arcu ac mauris cursus luctus in ut dui.",
                "Nulla dictum lobortis risus, sit amet tincidunt est volutpat sed. Aenean tincidunt turpis eget commodo venenatis. Fusce pretium hendrerit neque et pulvinar. Aliquam sodales, ante id porttitor convallis, purus risus eleifend eros, eu ullamcorper purus turpis sed sem. Nulla velit nisl, ultrices nec magna eu, euismod aliquam ligula. Duis molestie lectus vitae nisi vehicula, vitae sodales nulla ultrices. Aenean lacinia quis ligula vel volutpat. Curabitur tempus sapien nec ante mollis, vel placerat ante rhoncus. Proin sollicitudin rhoncus ipsum, convallis molestie sem posuere vel. Sed vel luctus arcu. Donec viverra pharetra congue. In mollis erat est, vel vulputate justo egestas sit amet. Vestibulum ut vestibulum ex, ut ornare quam. Nulla ut ante posuere, congue massa in, ullamcorper mi."
            ],
            "article_gists": [
                                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "Nodejs",
                "Windows"
            ]
        },
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Faucibus Ornare",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Cras viverra eu justo ut ornare. Ut porta suscipit turpis sit amet auctor. Aliquam quis est eu odio tempor feugiat. Maecenas volutpat, enim sed blandit ultricies, nunc risus accumsan mi, a hendrerit massa justo quis nulla. Praesent non velit a urna mollis facilisis vel at est. Nulla pellentesque nibh in elit tincidunt, vitae dapibus orci posuere. Aliquam pharetra diam vel enim auctor, vitae efficitur nibh varius. Vestibulum venenatis lacinia tortor, in tempor odio varius nec. Nam et ornare lectus. Integer molestie pulvinar neque, sed varius nunc aliquet id. Aenean laoreet neque ac nisl scelerisque, eu dictum purus sagittis.",
                "Donec maximus, ipsum nec sodales mollis, massa ex pretium mauris, ac faucibus orci nibh vitae mauris. Nulla convallis finibus magna eu auctor. Aenean ultrices urna velit, eget porttitor nisi porta non. Sed ultricies euismod lobortis. Sed ac diam malesuada, interdum turpis quis, cursus dolor. Ut et sem tortor. Donec euismod condimentum dolor, nec pulvinar lectus vehicula eget. In sit amet semper justo. Aenean non tincidunt massa.",
                "Sed ut arcu hendrerit metus ullamcorper ultricies ac sed velit. Cras egestas purus vitae ornare dictum. Integer id sagittis metus. Quisque eu odio finibus lorem interdum rhoncus sit amet sit amet eros. Suspendisse nec dolor libero. Donec ac dolor sed velit commodo finibus. Nunc vitae venenatis orci, vel ullamcorper orci. Suspendisse imperdiet diam ut magna volutpat vulputate. Integer a odio luctus, varius metus nec, porta magna. Curabitur lacus mauris, imperdiet quis tristique ac, malesuada eget odio. Nullam fringilla eros luctus nisi molestie, nec interdum quam elementum.",
                "Sed gravida nisl dui, nec ullamcorper arcu congue ut. Duis ut ultrices eros. Vivamus tempor tempor justo eu viverra. In sodales risus nisl, vel suscipit nibh suscipit ultricies. Sed ut felis lacinia, dapibus enim eget, laoreet urna. Praesent sapien risus, tempus ut nisi et, facilisis facilisis lacus. Sed tellus ex, condimentum ac enim sed, semper pulvinar massa. Donec malesuada felis sit amet tortor commodo, ut laoreet ex blandit. Suspendisse non turpis vitae dolor molestie gravida eu in massa. Mauris lobortis et nisi nec interdum. Nulla pellentesque purus sapien, eget lacinia ipsum dapibus vitae. In ante est, pharetra id lobortis ac, feugiat non mauris. Sed mi massa, bibendum eu est sed, accumsan dapibus augue. Curabitur semper et ipsum a aliquam. Nam tincidunt diam hendrerit, finibus purus at, tristique urna. Donec non viverra tellus, sit amet dapibus sem."
            ],
            "article_gists": [
                                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "NSS",
                "Nashville Software School",
                "Frontend Development"
            ]
        },
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Semper Mauris",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Pellentesque eleifend vitae eros eget varius. Fusce rhoncus arcu justo, ac hendrerit risus dictum eu. Praesent mattis ex vitae nisi ornare, id aliquet dolor volutpat. Nullam tristique at massa ac placerat. Sed feugiat porttitor semper. In hac habitasse platea dictumst. In sit amet odio sit amet libero condimentum fermentum. Donec lobortis luctus ligula, eu ultrices odio venenatis non. Sed vestibulum nunc eget nisl vestibulum, at pulvinar nibh vehicula. Ut viverra arcu ac elit finibus, nec porta nisi malesuada.",
                "Cras quis accumsan quam. Suspendisse consectetur tincidunt orci in pulvinar. Sed tincidunt nulla in elit egestas, non pretium nibh lobortis. Praesent sit amet bibendum purus. Ut lacinia, sapien ac accumsan sagittis, leo massa tincidunt orci, tincidunt porta sapien nisi id turpis. Sed consectetur consequat orci, vel hendrerit elit viverra in. Donec viverra turpis nibh, ac efficitur eros aliquam eu. Duis eget purus eget sem hendrerit facilisis. Suspendisse potenti. Vivamus risus nulla, placerat eget volutpat congue, pulvinar sed sem. Nam orci velit, ornare viverra orci vitae, tincidunt auctor nulla. Duis sit amet nibh eget quam placerat tempor ut sit amet velit. Proin nec mauris erat. Integer euismod elementum volutpat.",
                "Nam sed placerat nisl. Suspendisse at sollicitudin arcu, id lacinia odio. Nullam auctor tempus orci. Vivamus venenatis purus nec neque tincidunt varius. Duis luctus fringilla libero, nec placerat mi maximus ut. Ut congue augue eget felis tincidunt, sit amet imperdiet velit gravida. Duis ac pharetra arcu. Ut ut auctor velit. Sed pulvinar tincidunt sapien. Integer sit amet libero tortor. Cras sit amet nibh ut odio dignissim faucibus. Vestibulum gravida augue sit amet erat volutpat porta. Suspendisse potenti. Maecenas imperdiet auctor malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel tortor in lorem hendrerit sollicitudin eu ut lectus."
            ],
            "article_gists": [
                                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "JavaSript",
                "Arrays",
                "MDN"
            ]
        },
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Donec Pretium Consectetur",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Donec pellentesque scelerisque aliquet. Sed non nunc rutrum urna congue auctor. Maecenas bibendum eget augue et mollis. Suspendisse vulputate fermentum mauris, vitae egestas lectus scelerisque a. Vestibulum pretium sem non dui pretium, non laoreet quam elementum. Maecenas feugiat finibus diam, vel feugiat diam tincidunt ac. Cras quis orci leo. Praesent et volutpat ipsum. Nam nec tincidunt arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer fermentum sed sem in accumsan. Sed purus nunc, posuere nec risus sit amet, convallis aliquam justo. Aliquam congue, nibh ut pellentesque mollis, quam turpis iaculis metus, in consequat ante sem a metus. Phasellus laoreet id orci quis suscipit. Donec et augue orci.",
                "Duis eleifend tincidunt tempus. Fusce eu euismod nulla, sit amet viverra ante. Suspendisse elementum, risus vel dignissim dapibus, diam purus egestas quam, nec condimentum est est non purus. Fusce eu est pulvinar, malesuada augue non, ultrices magna. Aliquam non sem risus. Nulla in arcu aliquet, venenatis tellus non, pretium ligula. Suspendisse semper ex vitae eros feugiat luctus. Vestibulum at nibh eu felis pharetra dignissim. Maecenas luctus aliquam finibus. Donec lorem risus, mollis vel est eu, venenatis congue augue. Maecenas at iaculis enim. Curabitur ut eleifend erat. Aenean quis sem purus. Cras ut urna pulvinar, accumsan dui vel, viverra tortor. Mauris et vehicula leo.",
                "Aenean non consequat nisl. Donec et est placerat, mattis libero nec, posuere erat. Sed rutrum lobortis justo. Donec consectetur vulputate feugiat. Mauris sit amet faucibus quam, eu convallis ligula. Maecenas gravida magna sit amet sem lacinia, et maximus sem placerat. Cras eget turpis purus. Aliquam malesuada, neque sit amet ultrices suscipit, dolor libero pharetra turpis, eu placerat sem mauris non lacus. In eu ipsum aliquam, efficitur dolor non, dictum enim. Aenean iaculis enim libero, iaculis bibendum nunc commodo id. Sed eleifend dolor in est vulputate, non imperdiet erat rhoncus. Sed malesuada id nisi vitae ultricies. Vestibulum vestibulum ultrices neque, sit amet pharetra leo porttitor ut. Mauris id imperdiet lectus. Aenean interdum diam tellus. Cras ultrices luctus purus, nec lobortis purus facilisis a."
            ],
            "article_gists": [
                                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "Resources",
            ]
        },
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Mauris Mollis Dui",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Nulla hendrerit elit neque, ut varius nisi varius ac. Sed tristique felis ac magna vehicula, ut pharetra urna varius. Sed scelerisque at elit nec maximus. Sed quis urna interdum, sodales magna sed, aliquam risus. Duis id posuere dui. Aliquam volutpat nisi at elit ultricies, in dignissim turpis facilisis. Aenean tempus lacus lectus, vitae auctor justo tincidunt quis. Aliquam iaculis, metus vel ornare aliquam, nisl nunc molestie felis, eget accumsan quam mauris at mauris. Donec pharetra, magna et congue interdum, mauris sem egestas arcu, ut efficitur est eros a purus.",
                "Fusce pulvinar aliquam erat, non rhoncus turpis. In et quam gravida, vestibulum orci nec, posuere ante. Phasellus ullamcorper commodo hendrerit. Vestibulum nec nisi molestie, congue nisl nec, auctor quam. Maecenas sit amet lobortis ligula. Proin augue erat, commodo sed dui sit amet, ultrices vulputate augue. Fusce ut magna ac lacus mollis accumsan sed a orci. Vestibulum id finibus mauris, eget varius lacus. Sed gravida nulla purus, quis posuere erat lobortis sed. Donec ac quam erat. Morbi elementum massa at dui sagittis maximus. Pellentesque vel blandit sem, ac dapibus metus. Etiam vitae justo quis lectus tincidunt sodales vel in dui. Fusce scelerisque sollicitudin ligula. Donec ipsum justo, hendrerit at enim in, tempor consequat nunc. Donec ultrices, leo quis luctus ultricies, arcu massa accumsan enim, nec sollicitudin justo est et quam.",
                "Donec fermentum vel sem et porta. Sed non eleifend ex. Curabitur vitae pretium risus. Suspendisse et justo sit amet purus varius pulvinar. Nunc sem enim, dictum id massa at, venenatis mollis mi. Ut elit ipsum, semper at sollicitudin ut, aliquet eget nisl. Curabitur congue elementum purus nec sagittis. Vivamus iaculis molestie nunc eu gravida. Nullam tincidunt maximus euismod. Morbi sollicitudin lacus nec justo laoreet, non porttitor sapien tincidunt. Sed euismod dictum nulla sit amet cursus."
            ],
            "article_gists": [
                                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "JavaSript",
                "Git",
                "Linus Torvalds"
            ]
        },
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Non Mauris Feugiat",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Aenean elementum dolor sit amet tempus pretium. Donec vehicula porta dui, vitae interdum nisi lacinia eu. Ut a magna ultrices erat consequat fringilla. Etiam maximus consectetur erat ac vehicula. Aliquam id lobortis mauris. Cras et lacus ac felis tincidunt sagittis. Aliquam non ultrices orci, eu mollis turpis. In congue ex quam, vel convallis metus tincidunt sit amet. Quisque quis sem eget odio aliquet posuere. Aliquam sagittis quis tortor vitae tempus. Mauris rhoncus et felis eget condimentum. Vivamus tincidunt, ligula ac luctus dictum, orci est dictum ex, vitae commodo elit magna in ante. Proin eget felis diam. Donec euismod dolor vitae lacus luctus, non suscipit ex tempus. Cras purus quam, mollis vel volutpat et, posuere et lacus. Quisque ut mauris malesuada, ullamcorper nulla nec, vestibulum turpis.",
                "Aenean ac quam vitae ex ornare placerat vel eget ante. Nunc elementum libero non cursus dignissim. Cras sit amet sapien congue, placerat quam ut, consectetur sapien. Donec vel bibendum erat. Duis aliquet lacinia tellus in suscipit. Quisque at erat sed libero suscipit tincidunt vel id dolor. Praesent mattis augue quis sem ornare mollis. Fusce fringilla eu arcu ut aliquam. Sed nunc metus, tempor nec scelerisque a, pretium vitae sem. Ut pulvinar elementum diam imperdiet blandit. Nunc sed posuere arcu. Aenean non neque condimentum, gravida dui at, maximus metus.",
                "Nullam sit amet aliquet erat, dictum consequat justo. Suspendisse potenti. Donec feugiat maximus dui, sit amet condimentum massa bibendum at. Maecenas interdum tortor a libero facilisis, nec ultrices leo rutrum. Morbi ultricies ultrices ligula pulvinar pellentesque. Vivamus sed sapien orci. Quisque vel vehicula ipsum. Donec a imperdiet turpis. Maecenas augue est, volutpat ut nunc at, vestibulum dignissim ante. Pellentesque tincidunt felis urna, sit amet sodales felis ultricies eu. Mauris euismod scelerisque sapien. Cras vitae ex non ante rhoncus dictum vel at quam. Sed condimentum est nec lacus ullamcorper sollicitudin. Pellentesque vehicula euismod pharetra. Praesent vel dolor felis."
            ],
            "article_gists": [
                                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "Visual Studio Code",
                "Tools"
            ]
        },
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Aenean Commodo Libero",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Morbi vel elementum orci. Etiam quis pulvinar justo, vitae sollicitudin nunc. Sed maximus odio sed malesuada imperdiet. Ut vestibulum fermentum leo eget tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus placerat pharetra est ut accumsan. Vivamus id elit at elit aliquet consectetur. Duis ac porta est. Ut quis suscipit justo. Nam sit amet sem ante. Nulla lobortis enim ipsum, vitae vulputate augue euismod at. Cras hendrerit quis ex non rhoncus. Aliquam erat volutpat. Nam pellentesque sem volutpat ligula maximus efficitur.",
                "Etiam tincidunt quam sed velit posuere, non scelerisque dolor posuere. Pellentesque maximus ante et quam accumsan posuere. Sed at risus venenatis, pretium tellus nec, porttitor felis. Aenean porta, magna vitae pharetra pulvinar, justo magna fringilla nunc, vitae porttitor velit neque a ex. Integer cursus aliquam leo vitae aliquam. Donec sit amet hendrerit dolor. Duis vel nunc lacus. Curabitur condimentum feugiat dui sed mollis.",
                "Praesent ullamcorper iaculis odio, vitae pharetra ipsum facilisis eu. Ut dignissim est id risus varius suscipit. In tempus, magna sit amet suscipit bibendum, ex elit tincidunt purus, sit amet laoreet libero justo a tellus. Cras purus libero, venenatis eget volutpat nec, euismod vel lectus. Aliquam vehicula, ligula id tempus convallis, lacus neque tempus dolor, et vehicula elit ipsum ut odio. Donec sapien sapien, mattis vel pharetra dictum, commodo id felis. Nullam tincidunt diam dolor, sed vulputate arcu interdum sit amet. Fusce lectus arcu, finibus eget tellus quis, malesuada dapibus magna. Etiam id egestas libero, et porta dui. Proin tempus mollis tellus sed hendrerit."
            ],
            "article_gists": [
                                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "CSS"
            ]
        },
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Proin Dapibus Tristique",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Vivamus scelerisque nisi non neque sodales, eu consequat purus pulvinar. Nam viverra et ex ut maximus. Mauris quis libero sed lectus varius imperdiet sit amet et sapien. Nunc sed finibus ante, sit amet imperdiet urna. Morbi commodo libero ligula, nec cursus lectus dapibus sit amet. Sed faucibus, nulla tincidunt posuere pellentesque, lorem erat pharetra odio, a ultrices ligula ex ut leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce nisl metus, pretium vel tempor sed, pellentesque non ante. Ut ut molestie mi, vel viverra purus. Cras egestas, est vel rutrum placerat, nunc sapien porta nibh, id ultricies est dui in nunc. Duis ultrices bibendum ex, tincidunt pretium felis fringilla ac. Curabitur vitae est lorem. Vivamus eleifend velit justo, vitae imperdiet neque gravida quis. Nam pellentesque commodo nulla, vel pharetra quam bibendum ac.",
                "Vestibulum pellentesque elit risus, accumsan semper tellus tempor in. Morbi vulputate elementum orci ut elementum. Donec pellentesque mattis molestie. Cras et sapien elementum, dignissim sem eu, aliquam risus. Sed ornare nibh enim. Nullam placerat tortor in urna malesuada, eget rhoncus odio lobortis. Cras blandit feugiat nisl id malesuada. Curabitur eu venenatis dui. Morbi augue eros, rutrum vitae fringilla eu, scelerisque ac leo. In vitae rhoncus est, sed vehicula magna. Vestibulum porttitor est nec metus aliquet lobortis. Integer vulputate luctus gravida. Donec et imperdiet leo. Proin gravida, nisi ac vulputate iaculis, dolor augue convallis ipsum, ac dapibus sapien tellus ut mi.",
                "Fusce erat mauris, accumsan id felis non, suscipit tristique ligula. Nulla vehicula vehicula nulla eget hendrerit. Nam rhoncus, ante at ornare dignissim, nunc lorem dapibus quam, vitae condimentum felis turpis at orci. Nam sodales eros ac tincidunt faucibus. Phasellus vitae euismod nisl. Proin ultrices arcu mauris, vel laoreet arcu posuere sit amet. Etiam finibus magna lectus, sed malesuada nulla lobortis vel. Maecenas tempus erat vitae euismod pulvinar. Aliquam finibus sem a eros varius auctor.",
                "Morbi fringilla ipsum ut commodo sagittis. Proin in consequat sem, tincidunt dignissim ex. Vivamus urna augue, pharetra at nunc sit amet, condimentum cursus lacus. Integer fermentum erat eu accumsan iaculis. Phasellus sollicitudin ante enim, eget maximus mauris pellentesque id. Curabitur euismod efficitur ante sed mattis. Mauris pellentesque blandit massa, at egestas sapien dictum vitae. Maecenas vel molestie arcu, ac cursus nibh. Donec sit amet porta nisi. Morbi mollis justo nec semper cursus. Aenean consequat dui dui. Quisque in vestibulum leo, vitae dignissim dui. Cras at tellus pharetra, mollis lectus quis, porttitor ante."
            ],
            "article_gists": [
                                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "CSS"
            ]
        },
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Pellentesque Nec",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Nullam nec metus vitae augue convallis tincidunt. Fusce eu mauris ac nibh convallis dapibus non dapibus nunc. Etiam ultrices dui justo, eget fermentum nisi scelerisque eu. Maecenas consequat vestibulum diam, non placerat odio laoreet a. Integer efficitur quis diam ac facilisis. Donec ut eros ac augue sagittis placerat. Ut vehicula, libero quis feugiat porttitor, enim enim venenatis risus, sed semper orci nisi sit amet lorem. Duis luctus dolor sed magna finibus laoreet. Vestibulum eget sapien suscipit, imperdiet lacus sit amet, mollis nulla. Nulla id nunc elit.",
                "Quisque imperdiet tortor ac dolor pretium fermentum. Curabitur sit amet velit condimentum, pharetra odio eu, gravida diam. Morbi sapien tortor, dignissim iaculis tristique ut, mattis vel lectus. Nunc vehicula vehicula magna, vel consectetur neque consectetur non. In hac habitasse platea dictumst. Fusce hendrerit rhoncus erat, sit amet lacinia justo cursus id. Mauris tincidunt non erat eu dapibus. Sed nisl enim, laoreet sed auctor fermentum, fringilla in risus. Cras dapibus ex tortor, ut dictum nulla porta nec. Donec laoreet ac nibh aliquam efficitur."
            ],
            "article_gists": [
                                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "JavaSript"
            ]
        },
        {
            "article_id": `${ articleIdFactory.next().value }`,
            "article_title": "Nulla Vitae Dui",
            "article_date": {"datetime": "2017-10-28", "text": "October 28, 2017"},
            "article_author": "Jason Figueroa",
            "article_content": [
                "Nullam orci est, commodo nec efficitur eu, blandit non massa. Nam tincidunt in risus eu viverra. Integer ullamcorper orci in enim consectetur gravida. Donec eget dui consectetur, malesuada metus et, eleifend neque. Praesent porta tristique turpis viverra interdum. Suspendisse nec purus ut quam dapibus tempus posuere sed odio. Morbi pulvinar turpis eu augue elementum tempor. Sed tortor urna, facilisis vitae ultrices sed, dapibus eleifend ligula. Curabitur tristique dictum dapibus.",
                "Duis tincidunt nulla in tellus ullamcorper, eu consequat lectus porta. Proin a imperdiet lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam urna in libero pellentesque dignissim. Praesent tincidunt enim vel eleifend laoreet. Aliquam congue fringilla ex, in mattis sem cursus quis. Nullam orci mi, malesuada ut hendrerit quis, eleifend nec justo. Sed vehicula, neque et consectetur maximus, lectus tellus tempus est, eu imperdiet massa orci ac tellus. Nunc vel faucibus ligula, quis dapibus eros",
                "Nam aliquam fringilla ex non egestas. Ut interdum purus id ligula vehicula rutrum. Aenean id nisl sit amet lacus fringilla eleifend. Aenean enim est, aliquam ut cursus vitae, cursus nec sem. Aenean eu maximus risus, a efficitur lectus. Suspendisse ullamcorper tempor diam, nec mollis sem. Nullam convallis pellentesque neque, vel cursus ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam congue convallis tempus. Sed ac purus quis purus pellentesque gravida ac quis tortor. Vivamus maximus, diam egestas porttitor pellentesque, ligula massa rutrum nulla, et gravida orci mi feugiat ex. Vestibulum eget augue varius, rutrum quam eu, malesuada velit. Nam semper ac dolor id porta. Nunc vestibulum maximus mi, in porta dolor dapibus sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
            ],
            "article_gists": [
                                
            ],
            "article_images": [
                
            ],
            "article_tags": [
                "JavaSript"
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