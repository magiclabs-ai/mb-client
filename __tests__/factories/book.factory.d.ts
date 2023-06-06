import { Book, BookDesignRequestProps } from '../../src/models/book';
import { State } from '../../src/models/design-request';
export type BookFactoryProps = {
    id?: string;
    state?: State;
    title?: string;
    guid?: string;
    design_request?: BookDesignRequestProps;
};
export declare function bookFactory(props?: BookFactoryProps): Book;
