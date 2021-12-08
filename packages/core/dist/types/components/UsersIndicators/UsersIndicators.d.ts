/// <reference types="react" />
import type { TLPage, TLShape, TLUsers } from '../../types';
interface UserIndicatorProps<T extends TLShape> {
    page: TLPage<any, any>;
    userId: string;
    users: TLUsers<T>;
    meta: any;
}
export declare function UsersIndicators<T extends TLShape>({ userId, users, meta, page, }: UserIndicatorProps<T>): JSX.Element;
export {};
//# sourceMappingURL=UsersIndicators.d.ts.map