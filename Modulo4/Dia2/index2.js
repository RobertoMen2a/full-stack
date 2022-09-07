const express =require("express");
const fs =require("fs");
const app = express();
const port = process.env.PORT;
const products = fs.readFileSync(`${__dirname}/data/products.json`);
console.log(products);

app.get("/api/v1/products", (req, res) => {
    const products = JSON.parse(
      fs.readFileSync(`${__dirname}/data/products.json`)
    );
  
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  });

app.listen(port, ()=> {
    console.log(`App runnig on port ${port}`);
});  