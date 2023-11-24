export type User = {
    isAuthorized: boolean;
    login?: string;
    name?: string;
};

export type Post = {
    author?: User;
    private: boolean;
    haveAccess?: User[];
    date?: Date;
    versions?: Post[];
};

export interface Context {
    user: User;
    post: Post;
}
