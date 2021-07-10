import { Message } from "../entities/Message";
import { Arg, Ctx, Int, Mutation, Resolver } from "type-graphql";
import { MyContext } from "src/types";

@Resolver(Message)
export class MessageResolver {
  @Mutation(() => Boolean)
  async createMessage(
    @Arg("channelId", () => Int) channelId: number,
    @Arg("text", () => String) text: string,
    @Ctx() { user }: MyContext
  ): Promise<Boolean> {
    try {
      await Message.create({ text, channelId, userId: user.id }).save();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
