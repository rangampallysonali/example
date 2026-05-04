const http = require("http");
const server = require("./app");

server.listen(0, () => {
  const port = server.address().port;

  http.get(`http://localhost:${port}`, (res) => {
    let data = "";

    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      if (data === "Hello from Docker!") {
        console.log("Test passed ✅");
        server.close(() => process.exit(0));
      } else {
        console.error("Test failed ❌");
        console.error(`Expected "Hello from Docker!" but got "${data}"`);
        server.close(() => process.exit(1));
      }
    });
  }).on("error", (err) => {
    console.error("Request failed ❌", err);
    server.close(() => process.exit(1));
  });
});