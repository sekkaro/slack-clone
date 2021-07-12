import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import withApollo from "../../utils/withApollo";
import { useAllUsersQuery } from "../generated/graphql";

const Index = () => {
  const { loading, data } = useAllUsersQuery();

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <Box>
          {data.allUsers.map((user) => (
            <Flex key={user.id}>
              <Text>{user.email}</Text>
            </Flex>
          ))}
        </Box>
      )}
    </>
  );
};

export default withApollo({ ssr: false })(Index);
