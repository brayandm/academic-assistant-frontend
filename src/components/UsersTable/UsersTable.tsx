import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useUsersQuery } from "@/graphql/hooks";
import { useSession } from "next-auth/react";

export default function UsersTable() {
  const { data: session } = useSession();

  const { data } = useUsersQuery({
    context: {
      headers: {
        Authorization: `Bearer ${session?.user.access_token}`,
      },
    },
  });

  return (
    <>
      {data && (
        <TableContainer sx={{ width: 700 }} component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Roles</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.users.data.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell align="right">{user.name}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">
                    {user.roles.map((role, index) => {
                      if (index) return `, ${role.name}`;
                      return role.name;
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
