import { Buffer } from 'buffer';
import { BufferObject } from '../types/BufferObject';

export function bufferToString(bo: BufferObject) {
    return Buffer.from(bo.data).toString('utf8');
}