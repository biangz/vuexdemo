/**
 * export default {} 这种情况下，store index 文件 import {INCREMENT} from './xxxx' 拿到的是 undefined
 */
const INCREMENT = 'INCREMENT'
const CURRENT_TOPIC_INDEX = 'CURRENT_TOPIC_INDEX'
const RECORD_ANSWER = 'RECORD_ANSWER'

export {
  INCREMENT,
  CURRENT_TOPIC_INDEX,
  RECORD_ANSWER
}
