import { CommandSpec } from './lib/src'

export const MyCommandSpec: CommandSpec = {
  name: 'doit',
  run() {
    this.ui.error('error...')
  }
}

