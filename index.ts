import { Cli } from './lib/src'

import { MyCommandSpec, YourCommandSpec, PromptCommandSpec, Prompt2CommandSpec } from './commands'

const cli = new Cli('mycmd', '1.0.0', [MyCommandSpec, YourCommandSpec, PromptCommandSpec, Prompt2CommandSpec])
cli.parse(process.argv)