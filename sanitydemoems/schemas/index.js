// First, we must import the schema creator

// Then import schema types from any plugins that might expose them
import lessontext from '../schemas/object/lessontext'
import lesson from '../schemas/documents/lesson'
import course from '../schemas/documents/course'
import user from '../schemas/documents/user'
import comment from '../schemas/documents/comment'

export const schemaTypes = [lessontext, lesson, course, user, comment]
