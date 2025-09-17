import e from "express";
import { entryRouter } from "./routes/entry.route.js";
import { userRouter } from "./routes/User.route.js";
const PORT = 3000;
const app = e();

app.use(e.json());
app.use('/user', userRouter)
app.use('/entry' ,entryRouter)

app.listen(PORT, () => {
    console.log(`Server listening at port:${PORT}`);
})