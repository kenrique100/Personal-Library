# [Personal Library](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/personal-library)
- On Replit the key is NODE_ENV and the test is the value (using the Secrets).
- It will most likely crash the server and you must restart it again. You can add an after function at the bottom of the “Functional Tests” (after the tests but still inside the callback).
after(function() {
chai.request(server)
.get('/')
});



