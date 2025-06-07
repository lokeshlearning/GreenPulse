import { gql } from "@apollo/client";
export const GET_ENTRIES = gql `
query
{
compostEntries
{
id
userId
weightKg
date
materialType
}
}`
