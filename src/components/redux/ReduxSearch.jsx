import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { SetSearchWord } from "./actions/actions";

const { Item } = Form;

const ReduxSearch = () => {
  const dispatch = useDispatch();

  const changeSearchWord = (data) => {
    const {
      search: { text },
    } = data;

    dispatch(SetSearchWord(text));
  };

  return (
    <Form className="search-form" onFinish={changeSearchWord}>
      <Item name={["search", "text"]} className="search-form-item">
        <Input
          placeholder="Search user"
          size="large"
          prefix={<SearchOutlined />}
        />
      </Item>

      <Button
        type="danger"
        size="large"
        htmlType="submit"
        icon={<SearchOutlined />}
      >
        Search
      </Button>
    </Form>
  );
};

export default ReduxSearch;
