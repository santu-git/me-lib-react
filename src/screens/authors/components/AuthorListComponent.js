import React from "react";
export const AuthorListComponent = (props)=>{
  return (
    <table className="table text-left">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Short Name</th>
          </tr>
      </thead>
      <tbody>
      {props.authors.map((author,index)=>{
        return (
          <tr>
            <th scope="row">{index+1}</th>
            <td>{author.first_name}</td>
            <td>{author.last_name}</td>
            <td>{author.short_name}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}
