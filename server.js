const http = require("http");

http
    .createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        if (req.url === '/mlb') {
            res.end(
                JSON.stringify(
                    {
                        message: "endpoint do mlb"
                    }
                )
            )
        }
        if (req.url === '/sho') {
            res.end(
                JSON.stringify(
                    {
                        message: "endpoint da shopee"
                    }
                )
            )
        }
    })
    .listen(4001, () => console.log("OK"));