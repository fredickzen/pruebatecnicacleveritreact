import { Button, Form, Input, Modal } from "antd";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ApiAxiosUsersAddUser } from "../../js/api/User";
import { antDesingValidateMessages } from "../../js/lang/es/AntDesingValidateMessages";
import { AddUsers, SetIsAddVisible } from "./actions/actions";

const { Item } = Form;

const ReduxAdd = ({ isAddVisible }) => {
  const dispatch = useDispatch();

  const setIsAddVisibleDispach = () => {
    dispatch(SetIsAddVisible(false));
  };

  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const submitForm = (data) => {
    const { user } = data;
    
    setLoading(true);

    ApiAxiosUsersAddUser(user).then((result) => {

      dispatch(AddUsers(result));

      setIsAddVisibleDispach();

      setLoading(false);

      formRef.current.resetFields();

    });
  };
  const Footer = (
    <div className="modal--footer-add-user">
      <Button type="primary" danger htmlType="submit" loading={loading}>
        Save user
      </Button>
    </div>
  );

  return (
    <Modal
      title="Add user"
      visible={isAddVisible}
      footer={false}
      onCancel={setIsAddVisibleDispach}
    >
      <Form
        name="addUser"
        layout="vertical"
        requiredMark={false}
        validateMessages={antDesingValidateMessages}
        ref={formRef}
        onFinish={submitForm}
      >
        <Item
          name={["user", "name"]}
          label="User name"
          rules={[
            {
              required: true,
              type: "string",
              min: 3,
              max: 25,
            },
          ]}
        >
          <Input maxLength={25} />
        </Item>
        <Item
          name={["user", "lastname"]}
          label="Last name"
          rules={[
            {
              required: true,
              type: "string",
              min: 3,
              max: 25,
            },
          ]}
        >
          <Input maxLength={25} />
        </Item>
        <Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input maxLength={100} />
        </Item>
        {Footer}
      </Form>
    </Modal>
  );
};

export default ReduxAdd;
