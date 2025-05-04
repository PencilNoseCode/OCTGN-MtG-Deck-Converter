import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Settings } from "../types/settings";

const BASE_URL = 'http://localhost:8080/api';

class Path {
    path: string

    constructor(path: string) {
        this.path = path;
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
            console.error(ex)
        }
    }
    
    private async postRequest(relativeURL: string, data: Path | Settings) {
        try {
            return await this.api.post(relativeURL, data);
        }
        catch (ex) {
            console.error(ex)
        }
    }

    async pathExists(path: string): Promise<AxiosResponse<boolean>> {
        const res =  await this.postRequest("/path-exists", new Path(path));
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
        return await this.postRequest("/decks", new Path(deckDirectory));
    }
    
}

export const api = new ApiService();