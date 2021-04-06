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
    id: string;

    @CreateDateColumn()
    created: Date;
  
    @UpdateDateColumn()
    updated: Date;
  
    @Column()
     userId : String;
     columnId: String;
     IsEnable: Boolean;
  
  }
  