import CharacterLocation from './LocationDTO';
import Origin from './OriginDTO';

export default class Character{
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: CharacterLocation;
    image: string;
    url: string;
    episode: string[];

    constructor(
        name: string,
        status: string,
        species: string,
        type: string,
        gender: string,
        origin: Origin,
        location: CharacterLocation,
        image: string,
        url: string,
        episode: string[]
    ) {
        this.name = name;
        this.status = status;
        this.species = species;
        this.type = type;
        this.gender = gender;
        this.origin = origin;
        this.location = location;
        this.image = image;
        this.url = url;
        this.episode = episode;
    }

    public static FromDatabase(characterDatabase: any): Character {
        return new Character(
            characterDatabase.name,
            characterDatabase.status,
            characterDatabase.species,
            characterDatabase.type,
            characterDatabase.gender,
            Origin.FromDatabase(characterDatabase.attributes.origin),
            CharacterLocation.FromDatabase(characterDatabase.attributes.location),
            characterDatabase.attributes.image,
            characterDatabase.attributes.url,
            characterDatabase.episode
        );
    }

}