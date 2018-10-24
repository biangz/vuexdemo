/**
 * export default {} 这种情况下，store index 文件 import {INCREMENT} from './xxxx' 拿到的是 undefined
 */
const INCREMENT = 'INCREMENT'
const TOPIC_INDEX = 'TOPIC_INDEX'
const RECORD_ANSWER = 'RECORD_ANSWER'
const IS_END = 'IS_END'

export {
  INCREMENT,
  TOPIC_INDEX,
  RECORD_ANSWER,
  IS_END
}
