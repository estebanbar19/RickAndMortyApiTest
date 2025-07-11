export default class Origin {
    name: string;
    url: string;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }

    public static FromDatabase(originDatabase: any): Origin {
        return new Origin(originDatabase.name, originDatabase.url);
    }
}