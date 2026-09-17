import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routing.js";
import { connectDB } from "./src/config/mongo.init.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/api/v1", router);
app.get("/", async (req, res) => {
  try {
    return res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<title>Server</title>

<style>
* {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

body {
    background: #000;
    color: #39ff14;
    font: 12px monospace;
}

/* BINARY BACKGROUND */

.matrix {
    position: fixed;
    inset: 0;
    overflow: hidden;
    opacity: .28;
    pointer-events: none;
}

.column {
    position: absolute;
    bottom: -100%;
    width: 8px;

    color: #39ff14;
    font-size: 12px;
    line-height: 15px;
    text-align: center;

    animation: fall linear infinite;
}

.column:nth-child(1) {
    left: 3%;
    animation-duration: 7s;
}

.column:nth-child(2) {
    left: 10%;
    animation-duration: 9s;
}

.column:nth-child(3) {
    left: 18%;
    animation-duration: 6s;
}

.column:nth-child(4) {
    left: 27%;
    animation-duration: 11s;
}

.column:nth-child(5) {
    left: 36%;
    animation-duration: 8s;
}

.column:nth-child(6) {
    left: 45%;
    animation-duration: 10s;
}

.column:nth-child(7) {
    left: 54%;
    animation-duration: 7s;
}

.column:nth-child(8) {
    left: 63%;
    animation-duration: 12s;
}

.column:nth-child(9) {
    left: 72%;
    animation-duration: 8s;
}

.column:nth-child(10) {
    left: 81%;
    animation-duration: 10s;
}

.column:nth-child(11) {
    left: 90%;
    animation-duration: 7s;
}

@keyframes fall {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-220vh);
    }
}

/* MAIN DASHBOARD */

.dashboard {
    position: relative;
    z-index: 2;

    width: min(620px, 90%);
    padding: 22px;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    background: #020702;

    border: 1px solid #123d12;
}

/* HEADER */

.header {
    display: flex;
    justify-content: space-between;

    padding-bottom: 12px;

    border-bottom: 1px solid #123d12;
}

.title {
    letter-spacing: 2px;
}

.online {
    color: #39ff14;
}

/* TERMINAL */

.terminal {
    margin-top: 15px;

    padding: 12px;

    background: #010401;

    border: 1px solid #0d280d;

    color: #4c9b43;

    line-height: 1.8;
}

.binary {
    color: #39ff14;
    word-break: break-all;
}

/* COMPUTATION */

.computation {
    margin-top: 15px;
}

.label {
    display: flex;
    justify-content: space-between;

    color: #4c9b43;
    font-size: 10px;
}

#percent {
    color: #39ff14;
}

.bar {
    height: 2px;
    margin-top: 6px;

    overflow: hidden;

    background: #092009;
}

.bar::after {
    content: "";

    display: block;

    width: 25%;
    height: 100%;

    background: #39ff14;

    animation: scan 2s linear infinite;
}

@keyframes scan {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(500%);
    }
}

/* STATS */

.stats {
    display: flex;
    gap: 25px;

    margin-top: 15px;

    color: #4c9b43;
}

.value {
    margin-top: 3px;
    color: #39ff14;
}

/* MOBILE */

@media(max-width:500px) {

    .dashboard {
        padding: 15px;
    }

    .stats {
        gap: 15px;
    }

    .column {
        font-size: 10px;
        line-height: 13px;
    }
}
</style>
</head>

<body>

<!-- LIGHTWEIGHT BINARY BACKGROUND -->

<div class="matrix">

    <div class="column">
        1<br>0<br>1<br>1<br>0<br>0<br>1<br>0<br>1<br>1<br>0<br>1
    </div>

    <div class="column">
        0<br>1<br>1<br>0<br>1<br>0<br>0<br>1<br>1<br>0<br>1<br>0
    </div>

    <div class="column">
        1<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>0<br>1<br>0<br>1
    </div>

    <div class="column">
        0<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>0<br>1
    </div>

    <div class="column">
        1<br>0<br>1<br>0<br>1<br>1<br>0<br>0<br>1<br>1<br>0<br>0
    </div>

    <div class="column">
        0<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>0<br>1<br>1<br>0
    </div>

    <div class="column">
        1<br>1<br>0<br>0<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>1
    </div>

    <div class="column">
        0<br>1<br>1<br>0<br>0<br>1<br>0<br>1<br>1<br>0<br>1<br>0
    </div>

    <div class="column">
        1<br>0<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>1
    </div>

    <div class="column">
        0<br>1<br>0<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1<br>0
    </div>

    <div class="column">
        1<br>0<br>1<br>1<br>0<br>1<br>0<br>0<br>1<br>0<br>1<br>1
    </div>

</div>


<!-- SERVER DASHBOARD -->

<main class="dashboard">

    <header class="header">

        <span class="title">
            SERVER // NODE
        </span>

        <span class="online">
            ● ONLINE
        </span>

    </header>


    <section class="terminal">

        <div>root@server:~$ system.check</div>

        <div>network ............... OK</div>

        <div>memory ................ OK</div>

        <div>computation ........... RUNNING</div>

        <div class="binary">
            010101101001011010010110100101
        </div>

        <div>process ................ ACTIVE</div>

    </section>


    <section class="computation">

        <div class="label">
            <span>01 // COMPUTATION</span>
            <span id="percent">73%</span>
        </div>

        <div class="bar"></div>

    </section>


    <section class="stats">

        <div>
            CPU
            <div class="value">42%</div>
        </div>

        <div>
            MEMORY
            <div class="value">2.4 GB</div>
        </div>

        <div>
            PROCESS
            <div class="value">0x01F4</div>
        </div>

    </section>

</main>

</body>
</html>`);
  } catch (error) {
    console.error("Error", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
});

// function startServer() {}

app.listen(PORT, () => {
  try {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Error starting the server:", error);
  }
});
