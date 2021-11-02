/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import { add } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz'
import type { AgendaItems } from './components'
const day1 = zonedTimeToUtc('2021-11-10 00:00:00', 'America/Los_Angeles')
// const day1 = zonedTimeToUtc(
//   add(new Date(), { hours: -10 }),
//   'America/Los_Angeles'
// )
const day2 = add(day1, { days: 1 })
let current = day1

const later = (start: Date, hours: number) => {
  current = add(start, { minutes: hours * 60 })
  return current
}

/**
 * from https://looker.com/events/join/agenda?agendaPath=session/616880
 */
export const agenda = [
  {
    start: later(day1, -4), // Nov 9th
    // NOTE: if stop values are not defined, they default to the start of the next agenda item
    stop: later(day1, -3.5), // Nov 9th
    description: { en: '## Welcome APAC', ja_JP: '## 日本 Welcome APAC' },
  },
  {
    start: later(day1, 5), // Nov 10th
    stop: later(day1, 5.5), // Nov 10th
    description: { en: '## Welcome EMEA', ja_JP: '## 日本 Welcome EMEA' },
  },
  {
    start: later(day1, 10),
    stop: later(day1, 10.5),
    description: { en: '## Welcome AMER', ja_JP: '## 日本 Welcome AMER' },
  },
  {
    start: later(day1, -3.5), // Nov 9th
    stop: later(day1, -2),
    description: {
      en: `_Supported hacking hours_

Use [slack](https://app.slack.com/client/T0A4R5X0F/C02ELGL644F) to ask Looker staff for assistance

See [looker-open-source](https://github.com/looker-open-source) for cool stuff!`,
      ja_JP: `_日本 Supported hacking hours_

Use [slack](https://app.slack.com/client/T0A4R5X0F/C02ELGL644F) to ask Looker staff for assistance`,
    },
  },
  {
    start: later(day1, 1.5), // Nov 10th
    stop: later(day1, 3.5),
    description: {
      en: '_Supported hacking hours_',
      ja_JP: '_日本 Supported hacking hours_',
    },
  },
  {
    start: later(day1, 5), // Nov 10th
    stop: later(day1, 7),
    description: {
      en: '_Supported hacking hours_',
      ja_JP: '_日本 Supported hacking hours_',
    },
  },
  {
    start: later(day1, 10.5),
    stop: later(day1, 13),
    description: {
      en: '_Supported hacking hours_',
      ja_JP: '_日本 Supported hacking hours_',
    },
  },
  {
    start: later(day1, 14.5),
    stop: later(day1, 16),
    description: {
      en: '_Supported hacking hours_',
      ja_JP: '_日本 Supported hacking hours_',
    },
  },
  {
    start: later(day1, 19),
    description: {
      en: '**Hack@Night session**',
      ja_JP: '**日本 Hack@Night Session**',
    },
  },
  {
    start: later(day2, -4),
    stop: later(day2, -3.5),
    description: {
      en: '_Roundtable Check-In APAC_',
      ja_JP: '_日本 Roundtable Check-In APAC_',
    },
  },
  {
    start: later(day2, 5),
    stop: later(day2, 5.5),
    description: {
      en: '_Roundtable Check-In EMEA_',
      ja_JP: '_日本 Roundtable Check-In EMEA_',
    },
  },
  {
    start: later(day2, 10),
    stop: later(day2, 10.5),
    description: {
      en: '_Roundtable Check-In AMER_',
      ja_JP: '_日本 Roundtable Check-In AMER_',
    },
  },
  {
    start: later(day2, -3.5),
    stop: later(day2, -2),
    description: {
      en: '_Supported hacking hours_',
      ja_JP: '_日本 Supported hacking hours_',
    },
  },
  {
    start: later(day2, 1.5),
    stop: later(day2, 3.5),
    description: {
      en: '_Supported hacking hours_',
      ja_JP: '_日本 Supported hacking hours_',
    },
  },
  {
    start: later(day2, 5),
    stop: later(day2, 7),
    description: {
      en: '_Supported hacking hours_',
      ja_JP: '_日本 Supported hacking hours_',
    },
  },
  {
    start: later(day2, 10.5),
    stop: later(day2, 13),
    description: {
      en: '_Supported hacking hours_',
      ja_JP: '_日本 Supported hacking hours_',
    },
  },
  {
    start: later(day2, 13),
    description: {
      en: `**Final submissions due**`,
      ja_JP: '**日本 Final submissions due**',
    },
  },
  {
    start: later(day2, 14),
    description: {
      en: `## Winner announcements + Demos`,
      ja_JP: '## 日本 Winner announcements + Demos',
    },
  },
  // NOTE: All other stop values can default. The final stop value is required.
  {
    start: later(day2, 15),
    stop: later(day2, 17),
    description: { en: `## Hacky Hour`, ja_JP: '## 日本 Hacky Hour' },
  },
]

export const localAgenda = (loc: string): AgendaItems =>
  agenda.map((i) => {
    return {
      start: i.start,
      stop: i.stop,
      description: i.description[loc] ? i.description[loc] : i.description.en,
    }
  })