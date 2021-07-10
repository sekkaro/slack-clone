import { Arg, Int, Mutation, Resolver } from "type-graphql";
import { Channel } from "../entities/Channel";

@Resolver(Channel)
export class ChannelResolver {
  @Mutation(() => Boolean)
  async createChannel(
    @Arg("name", () => String) name: string,
    @Arg("teamId", () => Int) teamId: number,
    @Arg("public", () => Boolean, { nullable: true }) pb: boolean = false
  ): Promise<Boolean> {
    try {
      await Channel.create({ name, teamId, public: pb }).save();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
