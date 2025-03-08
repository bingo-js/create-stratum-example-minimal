#!/usr/bin/env node
import { runTemplateCLI } from "bingo";

import template from "../src/index.js";

process.exitCode = await runTemplateCLI(template);
