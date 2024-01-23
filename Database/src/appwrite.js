import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('65a05a15e5700eeb68d5') // Your project ID
    ;

const promise = databases.listDocuments('65b0455a93ac7df7644a', '65b045687ffabc2ab44a');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});