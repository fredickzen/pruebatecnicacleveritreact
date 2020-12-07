import { Button, Form, Input } from "antd";
import React, { useContext } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { UsersContext } from "./hooks/context/UsersContext";

const { Item } = Form;

const ContextSearch = () => {
  const { setSearchWord } = useContext(UsersContext);

  const changeSearchWord = (data) => {
    const {
      search: { text },
    } = data;

    setSearchWord(text);
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

      <Button type="primary" size="large" htmlType="submit">
        Search
      </Button>
    </Form>
  );
};

export default ContextSearch;
