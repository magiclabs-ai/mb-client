import { BookCreationRequest } from '../../src/models/galleon';
export type galleonFactoryProps = {
    title?: string;
};
export declare function galleonFactory(props?: galleonFactoryProps): BookCreationRequest;
