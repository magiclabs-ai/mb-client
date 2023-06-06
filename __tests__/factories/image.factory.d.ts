import { Image, ImageServer } from '../../src';
export type ImageFactoryProps = {
    handle?: string;
    url?: string;
    width?: number;
    height?: number;
    rotation?: number;
    captureTime?: string;
    cameraMake?: string;
    cameraModel?: string;
    filename?: string;
};
export declare function imageFactory(props?: ImageFactoryProps): Image;
export declare function imageServerFactory(props?: ImageFactoryProps): ImageServer;
