import CharactersRepository from '@core/Repositories/CharactersRepository';

class CharactersController {
    public static getAllCharacters() {
        return CharactersRepository.getAllCharacters();
    }
}

export default CharactersController;