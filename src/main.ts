import {Application} from 'https://deno.land/x/abc@v1.0.2/mod.ts';

const app = new Application();
const port = 1337;

app.static("/static", "src/static");
app
.get("/", (c) => {
    return "Hello, Abc!";
})
.post("/", (c) => {
    return c.json({msg:'ok!'});
})
.start({port: port});
console.info(`Server listening on port ${port}`)
