import { DesignOptions } from '../../src/models/design-request/design-options';
export type ImageDensityOptionServer = {
    max_page_count: number;
    min_page_count: number;
    max_image_count: number;
    avg_image_count: number;
    min_image_count: number;
};
export type ImageDensityOptionsServer = {
    high: ImageDensityOptionServer;
    medium: ImageDensityOptionServer;
    low: ImageDensityOptionServer;
};
export type DesignOptionsServer = {
    densities: ImageDensityOptionsServer;
};
export declare function designOptionsServerFactory(): DesignOptionsServer;
export declare function designOptionsFactory(): DesignOptions;
