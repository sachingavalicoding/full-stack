import { Account, Client } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65b5b5c7687aebb7aefb');

export const account = new Account(client);    