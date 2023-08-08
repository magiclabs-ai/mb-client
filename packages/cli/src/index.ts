#!/usr/bin/env node
import './commands/books'
import './commands/config'
import './commands/design-options'
import './commands/images'
import './commands/mb-client'
import './commands/spreads'
import './commands/storyboard-items'
import {EngineAPI} from '@/core/models/engine-api'
import {getConfig} from './utils/toolbox'
import {program} from 'commander'

export const commands = program
export let engineAPI: EngineAPI
(async () => {
  const config = await getConfig()
  engineAPI = new EngineAPI(config.apiHost, config.apiKey)
  // program.parse()
})()

