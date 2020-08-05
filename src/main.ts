import {Application} from 'https://deno.land/x/abc@v1.0.2/mod.ts';

const app = new Application();
const port = 1337;
const static_path = "src/static"

app.static("/static", static_path);
app
.get("/", (c) => {
    return "Hello, Abc!";
})
.post("/:hash", async (c) => {
    const { data } = await c.body<any>();
    console.log(data)
    const { hash } = c.params as { hash: string };

    Deno.writeTextFile(`${static_path}/plop.txt`, "hello world")

    return c.json({hash});
})
.start({port: port});
console.info(`Server listening on port ${port}`)
