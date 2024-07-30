import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: 'qrrqiewa',
    dataset: 'production',
    apiVersion: "2024-07-29",
    useCdn: false,
};

const client = createClient(config);

export default client;