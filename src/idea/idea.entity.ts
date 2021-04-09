import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Column,
    ManyToOne,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
    OneToMany,
  } from 'typeorm'; 
//   import { ObjectType, Field } from '@nestjs/graphql'; 

  @Entity('idea')
  export class IdeaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column()
    IsEnable: Boolean;
  
    @Column()
    columnId: String;
  
    @Column()
     userId : String;
  }
  