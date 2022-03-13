import { GET, Path } from 'typescript-rest';

@Path('/ping')
export class PingController {

    @GET
    async ping(): Promise<string> {
        return 'pong';
    }
}
