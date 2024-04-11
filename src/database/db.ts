import pg from 'pg';

// Make sure we DO NOT "prerender" this function to allow the ENV variables to update on the fly
export const prerender = false;

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'OnBoardingLKS',
    password: 'Nerea2002',
    port: 5433,
});

await client.connect()

export { client as db };
