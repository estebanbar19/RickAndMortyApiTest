import {Characters} from '@config/Sequelize/Models/Character';

class CharactersRepository{

    public static getAllCharacters() {
        return Characters.findAll();
    }

}

export default CharactersRepository;