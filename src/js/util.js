export const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
export const getUsersSearchFilter = (users, searchText) => {
  if (!searchText && searchText === "") {
    return users;
  }
  return (
    users.filter((x) => {
      const regex = new RegExp(removeAccents(searchText), "gi");
      return (
        removeAccents(x.name).match(regex) ||
        removeAccents(x.lastname).match(regex) ||
        removeAccents(x.email).match(regex)
      );
    }) ?? []
  );
};
