import {Characters} from '@config/Sequelize/Models/Character';
import {CharacterFilterTypes} from "../../Common/Filters/CharacterFilterTypes";
import {Op} from "sequelize";
import Character from "@core/DTO/CharacterDTO";

class CharactersRepository{

    public static getAllCharacters() {
        return Characters.findAll();
    }

    public static async getCharactersByFilters(filters: any) {
        const whereClause: Record<string, any> = {};

        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                switch (key) {
                    case CharacterFilterTypes.NAME:
                        whereClause.name = {
                            [Op.iLike]: `%${value}%`
                        };
                        break;
                    case CharacterFilterTypes.STATUS:
                        whereClause.status = value;
                        break;
                    case CharacterFilterTypes.SPECIES:
                        whereClause.species = value;
                        break;
                    case CharacterFilterTypes.GENDER:
                        whereClause.gender = value;
                        break;
                    case CharacterFilterTypes.ORIGIN:
                        whereClause['attributes.origin.name'] = value;
                        break;
                }
            }
        });

        return (await Characters.findAll({
            where: whereClause,
        })).map(character => Character.FromDatabase(character));
    }


}

export default CharactersRepository;