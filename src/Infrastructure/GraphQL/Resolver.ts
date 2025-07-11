import CharactersController from '@infrastructure/GraphQL/Controllers/CharactersController';

const resolver = {
    Query: {
        Characters: (_: any, args: any) => CharactersController.getCharacters(args),
    }
}

export default resolver;