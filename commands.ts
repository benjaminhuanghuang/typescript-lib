import { CommandSpec } from "./lib/src";
import { createInterface } from 'readline';
var prompt = require('prompt-sync')();

export const MyCommandSpec: CommandSpec = {
  name: "mycmd",
  run() {
    this.ui.info("my...");
  }
};

export const YourCommandSpec: CommandSpec = {
  name: "yourcmd",
  run() {
    this.ui.error("your...");
  }
};

export const PromptCommandSpec: CommandSpec = {
  name: "prompt",
  run() {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question("What do your question? ", answer => {
      // TODO: Log the answer in a database
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.close();
    });
  }
};

export const Prompt2CommandSpec: CommandSpec = {
  name: "prompt2",
  run() {
    let keepDoing = true;
    while (keepDoing) {
      const answer = prompt("What do your question?");
      console.log(`Thank you for your valuable feedback: ${answer}`);
      if (answer === "q") {
        keepDoing = false;
      }
    }
  }
};
