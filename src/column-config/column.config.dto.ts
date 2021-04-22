export interface ColumnConfigDTO extends ColumnConfigInput {
    userId: string;
    // columnId: number;
    // isEnable: boolean;
}

export interface ColumnConfigInput {
    columnId: number;
    isEnable: boolean;
}