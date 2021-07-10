import { User } from "../entities/User";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { UsernamePasswordInput } from "./UsernamePasswordInput";

@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  createUser(
    @Arg("options") options: UsernamePasswordInput
  ): Promise<User | undefined> {
    return User.create(options).save();
  }

  @Query(() => User, { nullable: true })
  getUser(@Arg("id", () => Int) id: number): Promise<User | undefined> {
    return User.findOne(id);
  }

  @Query(() => [User])
  allUsers(): Promise<User[]> {
    return User.find();
  }
}
