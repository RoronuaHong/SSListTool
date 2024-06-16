import React, { useState } from 'react';
import { Space, Switch, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import RoleModal from './components/RoleModal'
// import DemoForm from './components/DemoForm'

// type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.ReactNode;
  name: string;
  age: number;
  address: string;
  children?: DataType[];
}

const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];

// // rowSelection objects indicates the need for row selection
// const rowSelection: TableRowSelection<DataType> = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//   },
//   onSelect: (record, selected, selectedRows) => {
//     console.log(record, selected, selectedRows);
//   },
//   onSelectAll: (selected, selectedRows, changeRows) => {
//     console.log(selected, selectedRows, changeRows);
//   },
// };

const App: React.FC = () => {
  const [myData, setMyData] = useState(data);
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleAdd = (role: any) => {
    setOpen(true);
    setIsEdit(false);
    // console.log(myData);
  }

  const handleEdit = (role: any) => {
    setOpen(true);
    setIsEdit(true);

    console.log('编辑');
  }

  const handleDel = (role: any) => {
    console.log(role);
  }

  const handleRole = (role: any) => {
    console.log(role);
  }

  const handleCheck = (role: any) => {
    console.log(role);
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '12%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '30%',
      key: 'address',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: '30%',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a onClick={role => handleAdd(role)}>新增</a> 
          <a onClick={role => handleEdit(role)}>编辑</a>
          <a onClick={role => handleDel(role)}>删除</a>
          <a onClick={role => handleRole(role)}>角色授权</a>
          <a onClick={role => handleCheck(role)}>查看</a>
        </Space>
      )
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        // rowSelection={{ ...rowSelection, checkStrictly }}
        dataSource={myData}
      />
      {open && <RoleModal open={open} setOpen={setOpen} isEdit={isEdit} />}
      {/* <DemoForm /> */}
    </>
  );
};

export default App;