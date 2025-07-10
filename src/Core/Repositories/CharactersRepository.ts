import {Characters} from '@config/Sequelize/SequelizeModels';

class CharactersRepository{

    public static getAllCharacters() {
        return Characters.findAll();
    }

}

export default CharactersRepository;