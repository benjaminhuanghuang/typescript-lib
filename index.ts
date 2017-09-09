import { Cli } from './lib/src'

import { MyCommandSpec } from './commands'

const cli = new Cli('gan', '1.0.0', [MyCommandSpec])
cli.parse(process.argv)