import React from "react";

export const SearchItem = ({ id, title, body }) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
      </tr>
    </>
  );
};
