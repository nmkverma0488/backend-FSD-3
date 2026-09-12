const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(`
            <h1>Student Record</h1>
            <form method="POST" action="/add">
            Name: <input name="name"><br>
            Roll: <input name="roll"><br>
            Course: <input name="course"><br>
            Email: <input name="email"><br>
            <button>Add Student</button>
            </form>
        `);
        res.end();
    }

    else if (req.url == "/add" && req.method == "POST") {
        let body = "";

        req.on("data", chunk => body += chunk);

        req.on("end", () => {
            fs.appendFile("students.json", body + "\n", () => {
                res.end("Student Added!");
            });
        });
    }

});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});