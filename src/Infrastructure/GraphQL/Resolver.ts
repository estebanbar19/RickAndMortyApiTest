import CharactersController from '@infrastructure/GraphQL/Controllers/CharactersController';

const resolver = {
    Query: {
        Characters: () => CharactersController.getAllCharacters(),
    }
}

export default resolver;