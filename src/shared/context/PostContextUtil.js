import React, { createContext, useState } from "react";

export const PostContext = createContext({
  likes: null,
  handleLike: () => {},
});
