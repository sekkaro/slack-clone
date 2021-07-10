import { Team } from "../entities/Team";
import {
  Arg,
  Ctx,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { MyContext } from "src/types";
import { User } from "../entities/User";

@Resolver(Team)
export class TeamResolver {
  // @FieldResolver(() => User)
  // owner(@Root() team: Team, @Ctx() { userLoader }: MyContext) {
  //   return userLoader.load(team.ownerId);
  // }

  @Mutation(() => Boolean)
  async createTeam(
    @Arg("name", () => String) name: string,
    @Ctx() { user }: MyContext
  ): Promise<Boolean> {
    try {
      await Team.create({ name, ownerId: user.id }).save();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  // @Query(() => Team, { nullable: true })
  // getTeam(@Arg("id", () => Int) id: number): Promise<Team | undefined> {
  //   return Team.findOne(id);
  // }

  // @Query(() => [Team])
  // allTeams(): Promise<Team[]> {
  //   return Team.find();
  // }
}
