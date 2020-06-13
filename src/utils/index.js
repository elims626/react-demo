import { message } from 'antd';

/**
 * 消息提示
 * @param type 类型 - success, error, info, warning, warn, loading
 * @param content - 提示内容
 * @param duration  单位秒（s）
 * @returns {*}
 */
export const Message = ({type, content, duration = 1}) => message[type](content, [duration]);
