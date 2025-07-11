export default class CharacterLocation{
    name: string;
    url: string;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }

    public static FromDatabase(originDatabase: any): CharacterLocation {
        return new CharacterLocation(originDatabase.name, originDatabase.url);
    }

}