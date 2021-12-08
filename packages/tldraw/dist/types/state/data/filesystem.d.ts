import type { TDDocument } from '../../types';
import { FileSystemHandle } from './browser-fs-access';
export declare function loadFileHandle(): Promise<any>;
export declare function saveFileHandle(fileHandle: FileSystemHandle | null): Promise<void>;
export declare function saveToFileSystem(document: TDDocument, fileHandle: FileSystemHandle | null): Promise<FileSystemHandle | null>;
export declare function openFromFileSystem(): Promise<null | {
    fileHandle: FileSystemHandle | null;
    document: TDDocument;
}>;
//# sourceMappingURL=filesystem.d.ts.map