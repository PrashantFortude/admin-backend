import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('columnConfig')
export class ColumnConfigEntity {

    @PrimaryColumn()
    userId: String;

    @PrimaryColumn()
    columnId: number;

    @Column()
    isEnable: boolean;
}