import {program} from 'commander'

const book = program.command('book')
book.command('new')
book.command('get')
book.command('update')
book.command('delete')
book.command('galleon')
