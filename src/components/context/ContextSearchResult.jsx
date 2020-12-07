import { Button, Card } from "antd";
import Text from "antd/lib/typography/Text";
import React, { useContext, useEffect, useState } from "react";
import { ApiUsersGetUsers } from "../../js/api/User";
import { getUsersSearchFilter } from "../../js/util";
import { UsersContext } from "./hooks/context/UsersContext";

const ContextSearchResult = () => {
  const { users, setUsers, setSelectedUser, searchWord } = useContext(
    UsersContext
  );

  const [loading, setLoading] = useState(true);

  const clearValues = (values = []) => {
    return values.filter((x) => x.name && x.lastname && x.email);
  };

  useEffect(() => {
    ApiUsersGetUsers().then((result) => {
      const cleanValues = clearValues(result);
      setUsers(cleanValues);
      setLoading(false);
    });
  }, [setUsers]);

  const usersFilter = getUsersSearchFilter(users, searchWord) ?? [];

  return (
    <Card
      title={<Text type="secondary">User names</Text>}
      size="small"
      className="card-user-names"
      loading={loading}
    >
      <div className="users-list">
        {usersFilter.length > 0 ? (
          usersFilter.map((user) => (
            <Button
              key={user.id}
              type="text"
              block
              onClick={() => setSelectedUser(user)}
            >
              <Text type="secondary">
                {user.name} {user.lastName}
              </Text>
            </Button>
          ))
        ) : (
          <Text type="secondary">Sin registros</Text>
        )}
      </div>
    </Card>
  );
};

export default ContextSearchResult;
