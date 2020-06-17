import React from "react";
import {Form, Input, Button, Checkbox, Switch, Select, Space} from 'antd';
import {FormattedMessage} from "react-intl";

const { Option } = Select;

class RForm extends React.Component {
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
  // 生命周期 - 首次渲染后调用，客户端。
  componentDidMount() {
    // 填充 form 值
    const { formData } = this.props;
    this.formRef.current.setFieldsValue(formData);
  };
  // 表单 - 提交
  handleConfirm = (values) => {
    this.props.handleUpdate(values);
  };
  // 表单 - 取消
  handleCancel = () => {
    this.formRef.current.resetFields();
  };
  renderFormItem = (props) => {
    const { key, type } = props;
    if (type === 'input') return <Input />;
    else if (type === 'password') return <Input.Password />;
    else if (type === 'switch') return <Switch />;
    else if (type === 'checkbox') return (
      <Checkbox.Group options={this.state.bigFormObj[key]} />
    );
    else if (type === 'select') return (
      <Select>
        {
          this.state.bigFormObj[key].map((item) => (
            <Option
              value={item.value}
            >
              {item.label}
            </Option>
          ))
        }
      </Select>
    );
  };
  render() {
    return (
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
          <Form.Item {...this.state.tailLayout}>
            <Space>
              <Button
                type="cancel"
                htmlType="button"
                onClick={this.handleCancel}
              >
                <FormattedMessage id="operate.cancel" />
              </Button>
              <Button
                type="primary"
                htmlType="submit"
              >
                <FormattedMessage id="operate.confirm" />
              </Button>
            </Space>
          </Form.Item>
        </Form>
    );
  }
}

export default RForm;
