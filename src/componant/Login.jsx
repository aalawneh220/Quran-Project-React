import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { json, useNavigate } from "react-router-dom";
import { useSignIn } from 'react-auth-kit';


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >

    </Typography>
  );
}

const theme = createTheme();
function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem("user"));
}
export default function SignIn() {
  const Login = useSignIn();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    if (
      getDataFromLocalStorage().email == data.get("email") &&
      getDataFromLocalStorage().password == data.get("password")
    ) {
      if (
        Login({
          token: "user",
          expiresIn: 10000,
          tokenType: "Bearer",
          authState: getDataFromLocalStorage(),
        })
      ) {
       return navigate("/");
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#54B4D3" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            تسجيل الدخول
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="البريد الألكتروني"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="كلمة السر"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="تذكرني"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#54b4d3              " }}
            >
              تسجيل دخـول
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  هل نسيت كلمة السر؟
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"انت لا تملك حساب ؟ انشاء حساب "}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
