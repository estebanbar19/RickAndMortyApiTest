import dotenv from "dotenv";

dotenv.config();

const express = require('express');
const router = express.Router();

const GRAPHQL_URL = process.env.PLATFORM_GRAPHQL_URL || "localhost:3000/graphql";

const timeLog = (req: any, res: any, next: any) => {
    console.log('Time: ', Date.now());
    next();
}

router.use(timeLog);

const fetchGraphQlQuery = async (query: string) => {
    const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query
        })
    });

    const data = await response.json();

    return data;
}

const getGraphQlQuery = (filters: Record<string, any>) => {

    let gqlParams: string = "(";
    for(let filter in filters){{
        gqlParams += `${filter}: "${filters[filter]}"`;
        if(filter !== Object.keys(filters)[Object.keys(filters).length - 1]){
            gqlParams += ", ";
        }
    }}
    gqlParams += ")";

    let isEmptyFilters = Object.keys(filters).length === 0;

    return `
        query{
          Characters${isEmptyFilters ? "" : gqlParams}{
            name,
            status,
            gender,
            type,
            origin{
              name
            },
            location{
              name
            }
          }
        }`;
}

router.get('/', async (req: any, res: any) => {

    const params = req.query;

    const query = getGraphQlQuery(params);

    res.send(`${JSON.stringify(await fetchGraphQlQuery(query))}`);
});

export default router;