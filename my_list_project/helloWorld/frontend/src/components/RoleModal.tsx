import React, { useEffect, useState } from 'react';
import { Button, Modal, Card, Form, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const App: React.FC<any> = ({ open, setOpen, isEdit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    !!isEdit && form.setFieldsValue({
      username: '123',
      password: '321'
    });
  }, [])

  const handleOk = () => {
    setOpen(false);
  }

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => handleOk()}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Card>
          <Form
            form={form}
            name="wrap"
            labelCol={{ flex: '110px' }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            colon={false}
            style={{ maxWidth: 600 }}
            initialValues={{ username: '', password: '' }}
          >
            <Form.Item label="Normal label" name="username" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="A super long label text" name="password" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Form>
          <Form
            name="dynamic_form_item"
            {...formItemLayoutWithOutLabel}
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
          >
            <Form.List
              name="names"
              rules={[
                {
                  validator: async (_, names) => {
                    if (!names || names.length < 2) {
                      return Promise.reject(new Error('At least 2 passengers'));
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                      label={index === 0 ? 'Passengers' : ''}
                      required={false}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Please input passenger's name or delete this field.",
                          },
                        ]}
                        noStyle
                      >
                        <Input placeholder="passenger name" style={{ width: '60%' }} />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: '60%' }}
                      icon={<PlusOutlined />}
                    >
                      Add field
                    </Button>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add('The head item', 0);
                      }}
                      style={{ width: '60%', marginTop: '20px' }}
                      icon={<PlusOutlined />}
                    >
                      Add field at head
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
        </Card>
      </Modal>
    </>
  );
};

export default App;