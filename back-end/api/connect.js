import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://danielalbinocf:X42UQp08L4VYiFnU@cluster0.kx6pj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);
export const db = client.db("SpotifyReplica");
