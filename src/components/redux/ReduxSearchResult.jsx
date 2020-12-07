import { Button, Card } from "antd";
import Text from "antd/lib/typography/Text";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadUsers, SetSelectedUser } from "./actions/actions";
import { ApiAxiosUsersGetUsers } from "../../js/api/User";
import { getUsersSearchFilter } from "../../js/util";

const ReduxSearchResult = () => {
  const { users, searchWord } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const ChangeSelectedUser = (user) => {
    dispatch(SetSelectedUser(user));
  };

  const clearValues = (values = []) => {
    return values.filter((x) => x.name && x.lastname && x.email);
  };

  useEffect(() => {
    ApiAxiosUsersGetUsers().then((result) => {
      const cleanValues = clearValues(result);
      dispatch(LoadUsers(cleanValues));
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              onClick={() => ChangeSelectedUser(user)}
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

export default ReduxSearchResult;
