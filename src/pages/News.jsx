import { Typography, Box } from "@mui/material";

import Flex from "../components/UI/Flex";
import NewsCard from "../components/NewsCard";

const News = () => {
  return (
    <Box marginTop={6}>
      <Typography variant="h4" marginBottom={2} align="center">
        🕵️‍♂️ News Page
      </Typography>

      <Flex justify="space-between" flexWrap>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Flex>
    </Box>
  );
};

export default News;
