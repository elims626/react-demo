import React from "react";
import { Table, Input, Row, Col } from 'antd';
import axios from "../../interceptor";

const { Search } = Input;

export class RTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tableData: [],
      params: {
        pagination: {
          current: 1,
          pageSize: 10,
          total: 0,
        },
        keyword: '',
      },
      loading: false,
    };
  }
  componentDidMount() {
    this.syncTable();
  }
  // 同步表格数据
  syncTable = () => {
    this.setState({ loading: true });
    const { keyword, pagination } = this.state.params;
    const { method, url, params } = this.props;
    axios({
      method,
      url,
      [method === 'GET' ? 'params' : 'data']: {
        keyword,
        ...pagination,
        ...params,
      },
    }).then((res) => {
      if(res.data.code === '0') {
        this.setState({
          loading: false,
          tableData: res.data.data.data,
          params: {
            pagination: {
              ...pagination,
              total: res.data.data.dataCount,
            },
            keyword,
          },
        });
      }
    });
  };
  // 搜索框值改变
  handleSearch = (value) => {
    const { params } = this.state;
    Object.assign(params.pagination, {current: 1});
    Object.assign(params, {keyword: value});
    this.syncTable(params.pagination);
  };
  // 表格page改变
  handleChangePage = (pagination) => {
    const { params } = this.state;
    Object.assign(params, {pagination});
    this.syncTable();
  };
  render() {
    const { tableData, params, loading } = this.state;
    const { columns } = this.props;
    const { pagination } = params;
    return (
        <div>
          <Row>
            <Col span={18}>
              {this.props.slot}
            </Col>
            <Col span={6}>
              <Search
                placeholder="input search text"
                onSearch={this.handleSearch}
                enterButton
                allowClear
              />
            </Col>
          </Row>
          <Table
            className="mt-20"
            columns={columns}
            rowKey={record => record.uid}
            dataSource={tableData}
            pagination={pagination}
            loading={loading}
            onChange={this.handleChangePage}
          />
        </div>
    );
  }
}
