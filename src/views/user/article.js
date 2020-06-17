import React from "react";
import { RTable } from '../../components/table';
import {Button, Tag} from "antd";
import {FormattedMessage} from "react-intl";

class ArticleDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      columns: [
        {
          title: '部门',
          dataIndex: 'departmentName',
        },
        {
          title: '名称',
          dataIndex: 'name',
        },
        {
          title: '账号',
          dataIndex: 'uid',
        },
        {
          title: '状态',
          dataIndex: 'showLockStatus',
          render: (status) => (
              <Tag color={status === '启用' ? 'geekblue' : 'volcano'} key={status}>
                {status}
              </Tag>
          )
        },
        {
          title: '操作',
          dataIndex: 'operate',
          render: (text, record) => (
              <span>
              <Button
                  type="link"
                  onClick={() => this.handleEdit(record)}
              >
                <FormattedMessage id="operate.edit" />
              </Button>
              <Button
                  type="link"
                  onClick={() => this.handleDelete(record)}
              >
                <FormattedMessage id="operate.delete" />
              </Button>
            </span>
          ),
        },
      ],
      tableData: [],
    };
  }
  componentDidMount() {
    console.log(this.props);
  };
  handleEdit = (row) => {
    this.props.history.push(`/user/article/detail/${row.uid}`);
  };
  handleDelete = (row) => {
    console.log(row.id, 'delete');
    this.refs.table.syncTable();
  };
  handleAdd = () => {
    console.log('add');
  };
  render() {
    const { columns } = this.state;
    const slot = (
      <Button
        type="primary"
        onClick={() => this.handleAdd()}
       >
        <FormattedMessage id="operate.add" />
      </Button>
    );
    return (
      <RTable
        ref="table"
        columns={columns}
        url={'/home.json'}
        method={'GET'}
        slot={slot}
      />
    );
  }
}

export default ArticleDetail;
