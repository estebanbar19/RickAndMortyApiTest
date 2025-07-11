import CharactersRepository from '@core/Repositories/CharactersRepository';

class CharactersController {

    public static getCharacters(args: any) {
        if(args === null || args === undefined || Object.keys(args).length === 0){
            return CharactersRepository.getAllCharacters();
        }
        return CharactersRepository.getCharactersByFilters(args);
    }

}

export default CharactersController;