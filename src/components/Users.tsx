import * as React from "react";
import { FC } from "react";
import { useUsersQuery } from "../hooks/user/query";
import { Loader, Table } from 'rsuite';

export const Users: FC = () => {
  const {data, loading, error} = useUsersQuery({
    variables: {first: 10}
  });

  if (loading) return <Loader center={ true } size="md" content="loading..."/>;

  if (error?.networkError) return <p>ネットワークエラーです</p>;

  return (
    <Table virtualized autoHeight data={ data?.users?.edges.map(edge => edge.node) }>
      <Table.Column width={ 300 }>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.Cell dataKey="id"/>
      </Table.Column>
      <Table.Column>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.Cell dataKey="name"/>
      </Table.Column>
      <Table.Column>
        <Table.HeaderCell>Age</Table.HeaderCell>
        <Table.Cell dataKey="age"/>
      </Table.Column>
      <Table.Column>
        <Table.HeaderCell>Gender</Table.HeaderCell>
        <Table.Cell dataKey="gender"/>
      </Table.Column>
    </Table>
  );
};
