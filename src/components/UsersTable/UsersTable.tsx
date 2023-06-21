import * as React from "react";
import { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useUsersQuery, useRolesQuery } from "@/graphql/hooks";
import { useSession } from "next-auth/react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { GraphqlRequestClientContext } from "@/providers/GraphqlRequestClientProvider";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  p: 4,
};

type createUserForm = {
  name: string;
  email: string;
  password: string;
  roles: string[];
};

export default function UsersTable() {
  const { data: session } = useSession();

  const graphqlRequestClient = useContext(GraphqlRequestClientContext);

  const { data, refetch: refetchUsers } = useUsersQuery({
    context: {
      headers: {
        Authorization: `Bearer ${session?.user.access_token}`,
      },
    },
  });

  const { data: roles } = useRolesQuery({
    context: {
      headers: {
        Authorization: `Bearer ${session?.user.access_token}`,
      },
    },
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [createUserFormData, setCreateUserFormData] = useState<createUserForm>({
    name: "",
    email: "",
    password: "",
    roles: [],
  });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setOpen(false);

    e.preventDefault();
    graphqlRequestClient
      .createUser(createUserFormData, {
        Authorization: `Bearer ${session?.user.access_token}`,
      })
      .then(() => {
        setAlertType("success");
        setAlertMessage("User created successfully");
      })
      .catch(() => {
        setAlertType("error");
        setAlertMessage("There was an error creating the user");
      })
      .finally(() => {
        setShowAlert(true);

        setCreateUserFormData({
          name: "",
          email: "",
          password: "",
          roles: [],
        });

        refetchUsers();
      });
  };

  const handleOnDelete = (id: string) => {
    graphqlRequestClient
      .deleteUser(
        { id: id },
        {
          Authorization: `Bearer ${session?.user.access_token}`,
        }
      )
      .then(() => {
        setAlertType("success");
        setAlertMessage("User deleted successfully");
      })
      .catch(() => {
        setAlertType("error");
        setAlertMessage("There was an error deleting the user");
      })
      .finally(() => {
        setShowAlert(true);

        refetchUsers();
      });
  };

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "error">("success");
  const [alertMessage, setAlertMessage] = useState("");

  return (
    <>
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        sx={{ marginBottom: "20px" }}
        onClick={handleOpen}
      >
        Create User
      </Button>
      {data && (
        <TableContainer sx={{ width: "60vw" }} component={Paper}>
          <Table sx={{ minWidth: "60vw" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Roles</TableCell>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">Delete</TableCell>
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
                  <TableCell align="center">
                    <IconButton aria-label="delete" size="large">
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="delete"
                      size="large"
                      onClick={() => handleOnDelete(user.id)}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style} onSubmit={handleOnSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            value={createUserFormData.name}
            onChange={(e) =>
              setCreateUserFormData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            required
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={createUserFormData.email}
            onChange={(e) =>
              setCreateUserFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            required
            sx={{ marginBottom: "20px" }}
          />
          <FormControl variant="outlined" sx={{ marginBottom: "20px" }}>
            <InputLabel htmlFor="outlined-adornment-password" required>
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              required
              value={createUserFormData.password}
              onChange={(e) =>
                setCreateUserFormData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Typography variant="h6" gutterBottom component="div">
            Roles:
          </Typography>
          <FormGroup sx={{ flexDirection: "row" }}>
            {roles?.roles.map((role) => (
              <FormControlLabel
                key={role.id}
                control={
                  <Checkbox
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCreateUserFormData((prev) => ({
                          ...prev,
                          roles: [...prev.roles, role.name],
                        }));
                      } else {
                        setCreateUserFormData((prev) => ({
                          ...prev,
                          roles: prev.roles.filter(
                            (prevRole) => prevRole !== role.name
                          ),
                        }));
                      }
                    }}
                  />
                }
                label={
                  role.name.charAt(0).toUpperCase() +
                  role.name.slice(1).toLowerCase()
                }
              />
            ))}
          </FormGroup>
          <Button
            variant="contained"
            type="submit"
            endIcon={<AddIcon />}
            sx={{ alignSelf: "center", marginTop: "40px" }}
          >
            Create
          </Button>
        </Box>
      </Modal>
      <Snackbar
        open={showAlert}
        autoHideDuration={3000}
        onClose={() => setShowAlert(false)}
      >
        <Alert
          onClose={() => setShowAlert(false)}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
