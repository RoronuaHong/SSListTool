import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
 
const DemoForm = () => {
  const [form] = Form.useForm();
  const [isEdit, setIsEdit] = useState(false); // 默认为非编辑状态
 
  // 模拟的编辑操作函数
  const handleEdit = () => {
    setIsEdit(true); // 设置为编辑状态
    form.setFieldsValue({
      name: '编辑的名称',
      // 更多字段根据需要设置
    });
  };
 
  // 模拟的提交操作函数
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
 
  return (
    <Form form={form} onFinish={onFinish} initialValues={{ name: '新增的名称' }}>
      <Form.Item name="name" label="名称">
        <Input />
      </Form.Item>
      {/* 其他表单字段 */}
      <Form.Item>
        {isEdit ? (
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        ) : (
          <Button type="primary" onClick={handleEdit}>
            编辑
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};
 
export default DemoForm;
