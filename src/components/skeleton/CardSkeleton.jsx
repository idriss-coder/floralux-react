/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */

import React from "react";
import Box from "../box/Box";

function CardSkeleton() {
  return (
    <Box mb={20} mt={40}>
      <span>load</span>
    </Box>
  );
}

export default CardSkeleton;
