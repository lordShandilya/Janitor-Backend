import e from "express";
import { entryRouter } from "./routes/entry.route";
const PORT = 3000;
const app = e();

app.use(e.json());

app.use('/entry' ,entryRouter)

app.listen(PORT, () => {
    console.log(`Server listening at port:${PORT}`);
})