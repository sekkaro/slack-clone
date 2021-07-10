import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Message } from "./Message";
import { Team } from "./Team";
import { User } from "./User";

@ObjectType()
@Entity()
export class Channel extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  public: boolean;

  @ManyToMany(() => User)
  @JoinTable()
  member: User[];

  @Field()
  @Column()
  teamId: number;

  @ManyToOne(() => Team, (team) => team.channels)
  team: Team;

  @OneToMany(() => Message, (message) => message.channel)
  messages: Message[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
