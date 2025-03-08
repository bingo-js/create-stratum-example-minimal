import { createBase } from "bingo-stratum";
import { z } from "zod";

export const base = createBase({
  options: {
    owner: z.string(),
    repository: z.string(),
  },
});
