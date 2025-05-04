import { Buffer } from 'buffer';

interface BufferObject {
    type: string,
    data: Buffer
}

export function bufferToString(bo: BufferObject) {
    return Buffer.from(bo.data).toString('utf8');
}