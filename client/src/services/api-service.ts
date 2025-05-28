import axios, { Axios, AxiosInstance, AxiosResponse } from "axios";
import { Settings } from "../types/settings";
import DeckDto from "../types/dto/deck-dto";
import { xml } from "./xml-service";

const BASE_URL = 'http://localhost:8080/api';

class PostBody {
    path: string
    content: string

    constructor(path?: string, content?: string) {
        this.path = path || '';
        this.content = content || '';
    }
}

class ApiService {
    api: AxiosInstance
    
    constructor() {
        this.api = axios.create({
            baseURL: BASE_URL,
        })
    }

    private async getRequest<T>(relativeURL: string) {
        const res: AxiosResponse<T> = await this.api.get<T>(relativeURL);
        const data: T = res.data;
        return data;
    }

    private async postRequest<T>(relativeURL: string, postBody: PostBody | Settings) {
        const res: AxiosResponse<T> = await this.api.post<T>(relativeURL, postBody);
        const data: T = res.data;
        return data;
    }

    async pathExists(path: string) {
        return await this.postRequest<boolean>("/path-exists", new PostBody(path));
    }

    async writeSettings(settings: Settings) {
        return await this.postRequest<boolean>("/settings-write", settings);
    }

    async readSettings() {
        return await this.getRequest<Settings>("/settings-read");
    }

    async getDecks(deckDirectory: string) {
        return await this.postRequest<any>("/decks", new PostBody(deckDirectory));
    }

    async writeDeck(deckFilePath: string, deck: DeckDto) {
        console.debug(`writing deck to ${deckFilePath}`);
        const deckXml = xml.build(deck);
        return await this.postRequest<boolean>("/decks/write", new PostBody(deckFilePath, deckXml));
    }
}

export const api = new ApiService();