import { Drash } from 'https://deno.land/x/drash@v1.0.0/mod.ts';
const decoder = new TextDecoder();

export default class StaticResource extends Drash.Http.Resource {

    static paths = [
        "/static/:path"
    ];

    public GET() {
        const param = this.request.getPathParam("path");
        console.log(param)
        try {
            let fileContentsRaw = Deno.readFileSync("./static/index.html");
            let template = decoder.decode(fileContentsRaw);
            this.response.body = template;
        } catch (error) {
            throw new Drash.Exceptions.HttpException(
                400,
                `Error reading HTML template. ${error}`
            );
        }
        return this.response;
    }
}
