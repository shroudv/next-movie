import movies from '../mocks/movies.json'

export const getCategoryService = async () =>{
    const query = await movies.results;
    return query;
}