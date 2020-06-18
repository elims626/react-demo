import React from "react";
import {Form, Input, InputNumber, Checkbox, Switch, Select, Radio, Modal, DatePicker } from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;

class DialogForm extends React.Component {
  formRef = React.createRef();
  constructor(props){
    super(props);
    this.state = {
      formData: {},
      formDefault: [
        {
          name: '用户名',
          key: 'username',
          type: 'input',
          message: '用户名不能为空',
          required: true,
        },
      ],
      bigFormObj: {},
      layout: {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 16,
        },
      },
      tailLayout: {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      },
    };
  };
  // 生命周期 - 在渲染前调用,客户端-服务端。
  componentWillMount() {
    const { formDefault, bigFormObj } = this.props;
    if (formDefault) this.setState({
      formDefault,
      bigFormObj,
    });
  }
  componentDidUpdate = (nextProps) => {
    setTimeout(() => {
      this.formRef.current.setFieldsValue(nextProps.formData);
    },0);
  };
  // 表单 - 提交
  handleConfirm = () => {
    this.formRef.current.validateFields().then((value) => {
      this.props.handleUpdate(value);
      this.formRef.current.resetFields();
    }).catch();
  };
  // 表单 - 取消
  handleCancel = () => {
    this.props.handleUpdate();
    this.formRef.current.resetFields();
  };
  renderFormItem = (props) => {
    const { key, type } = props;
    if (type === 'input') return <Input />;
    else if (type === 'password') return <Input.Password />;
    else if (type === 'number') return <InputNumber  />;
    else if (type === 'switch') return <Switch checked={true} />;
    else if (type === 'checkbox') return (
        <Checkbox.Group options={this.state.bigFormObj[key]} />
    );
    else if (type === 'radio') return (
        <Radio.Group>
          {
            this.state.bigFormObj[key].map((item) => (
                <Radio
                    key={item.value}
                    value={item.value}
                >
                  {item.label}
                </Radio>
            ))
          }
        </Radio.Group>
    );
    else if (type === 'select') return (
        <Select>
          {
            this.state.bigFormObj[key].map((item) => (
                <Option
                    key={item.value}
                    value={item.value}
                >
                  {item.label}
                </Option>
            ))
          }
        </Select>
    );
    else if (type === 'data') return (
        <DatePicker
          showTime={props.showTime}
        />
    );
    else if (type === 'dataRange') return (
        <RangePicker
          showTime={props.showTime}
        />
    );
  };
  render() {
    return (
        <Modal
            title="Basic Modal"
            visible={this.props.visible}
            onOk={this.handleConfirm}
            onCancel={this.handleCancel}
        >
          <Form
              {...this.state.layout}
              name="control-ref"
              ref={this.formRef}
              initialValues={{
                open: false,
              }}
              onFinish={this.handleConfirm}
          >
            {
              this.state.formDefault.map((item) => (
                  <Form.Item
                      label={item.name}
                      name={item.key}
                      key={item.key}
                      rules={[
                        {
                          required: item.required,
                          message: item.message,
                        },
                      ]}
                  >
                    {this.renderFormItem(item)}
                  </Form.Item>
              ))
            }
          </Form>
        </Modal>
    );
  }
}

export default DialogForm;
