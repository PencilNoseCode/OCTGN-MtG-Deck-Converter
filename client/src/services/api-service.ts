import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Settings } from "../types/settings";
import DeckDto from "../types/dto/deck-dto";
import { xml } from "./xml-service";

const BASE_URL = 'http://localhost:8080/api';

class Data {
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

    private async getRequest(relativeURL: string) {
        try {
            return await this.api.get(relativeURL);
        }
        catch (ex) {
            console.error(`Error occured while getting ${relativeURL}:\n`, ex);
        }
    }

    private async postRequest(relativeURL: string, data: Data | Settings) {
        try {
            //console.debug(`Posting to ${relativeURL}`);
            return await this.api.post(relativeURL, data);
        }
        catch (ex) {
            console.error(`Error occured while posting to ${relativeURL}:\n`, ex);
        }
    }

    // async getImageUrl(setId: string, cardId: string): Promise<string> {
    //     return await this.getRequest(`/images/${setId}/Cards/${cardId}`).then(result => {
    //         return result?.data as string;
    //     });
    // }

    async pathExists(path: string): Promise<AxiosResponse<boolean>> {
        const res =  await this.postRequest("/path-exists", new Data(path));
        if (!res) {
            console.error(`Error occured while checking if ${path} exists`);
        }
        return res?.data;
    }

    async writeSettings(settings: Settings) {
        return await this.postRequest("/settings-write", settings);
    }

    async readSettings() {
        return await this.getRequest("/settings-read");
    }

    async getDecks(deckDirectory: string) {
        return await this.postRequest("/decks", new Data(deckDirectory));
    }

    async writeDeck(deckFilePath: string, deck: DeckDto) {
        console.debug(`writing deck to ${deckFilePath}`);
        const deckXml = xml.build(deck);
        const res = await this.postRequest("/decks/write", new Data(deckFilePath, deckXml));
        return res;
    }
}

export const api = new ApiService();