import { lesson24 } from './lesson24'
import { lesson23 } from './lesson23'
import { lesson22 } from './lesson22'
import { lesson15 } from './lesson15'
import { lesson16 } from './lesson16'
import { lesson17 } from './lesson17'
import { lesson18 } from './lesson18'
import { lesson25 } from './lesson25'
import { englishType } from 'types'

type LessonType = {
  [key: string]: englishType[]
}

export const lesson: LessonType = { lesson15, lesson16, lesson17, lesson18, lesson22, lesson23, lesson24, lesson25 }
