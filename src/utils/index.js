import { message } from 'antd';
import moment from 'moment';

/**
 *
 * @param type 类型 - success, error, info, warning, warn, loading
 * @param content - 提示内容
 * @param duration  单位秒（s）
 * @returns {*}
 * @constructor
 */
export const Message = ({type, content, duration = 1}) => message[type](content, [duration]);

/**
 *
 * @param val - 时间戳（毫秒）
 * @param format - 时间格式
 * @returns {string}
 * @constructor
 */
export const DateFormat = (val, format= 'YYYY-MM-DD HH:mm:ss') => val && moment(val).format(format);
// export const DateFormat = (val, format= 'YYYY-MM-DD HH:mm:ss') => val && moment.unix(val).format(format);
