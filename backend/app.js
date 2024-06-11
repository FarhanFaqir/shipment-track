const express = require("express");
const db = require("./models");
const cors = require("cors");

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/shipment/:id", async (req, res) => {
    const id = req.params.id;
    const data = await db.shipment.findOne({where: {shipmentId: id}});
    if (!data) return res.json({
        msg: "Shipment not found",
        data: {},
        status: 304
    })

    return res.json({
        msg: "success",
        data: data,
        status: 200
    });
})

app.listen(PORT, () => {
    db.sequelize.sync();
    console.log("Server is running on port", PORT);
});


