import { Card } from "scryfall-api";

const IMAGES_ENDPOINT = "http://localhost:8080/images";

class ImageProvider {
    getSrc(card: Card): string {
        const imageUrl = `${IMAGES_ENDPOINT}/${card.set_id}/Cards/${card.id}.jpg`;
        //console.debug(imageUrl);
        return imageUrl;
    }
    /*
    async getSrc(card: Card): Promise<string> {
        return await api.getImageUrl(card.set_id, card.id);
    }
    */
}

export const images = new ImageProvider();