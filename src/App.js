import React, { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Avatar,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Google, DarkMode, LightMode, Logout } from "@mui/icons-material";
import { motion } from "framer-motion";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#1976D2" },
      secondary: { main: "#F50057" },
    },
    typography: { fontFamily: "Poppins, sans-serif" },
  });

  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleLogout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: darkMode ? "#121212" : "#F4F6F8",
          transition: "background-color 0.5s ease",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            sx={{
              padding: 4,
              textAlign: "center",
              boxShadow: 5,
              borderRadius: 3,
              maxWidth: 400,
            }}
          >
            <CardContent>
              <IconButton
                sx={{ position: "absolute", right: 10, top: 10 }}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <LightMode /> : <DarkMode />}
              </IconButton>

              {!user ? (
                <>
                  <Typography variant="h4" fontWeight="bold" color="primary">
                    Welcome to My App
                  </Typography>
                  {loading ? (
                    <CircularProgress sx={{ mt: 3 }} />
                  ) : (
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Button
                        variant="contained"
                        startIcon={<Google />}
                        color="primary"
                        onClick={signInWithGoogle}
                        sx={{ mt: 3 }}
                      >
                        Sign in with Google
                      </Button>
                    </motion.div>
                  )}
                </>
              ) : (
                <>
                  <Avatar
                    src={user.photoURL || "https://via.placeholder.com/80"}
                    sx={{
                      width: 80,
                      height: 80,
                      margin: "10px auto",
                      boxShadow: 3,
                    }}
                  />
                  <Typography variant="h5" fontWeight="bold">
                    {user.displayName}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {user.email}
                  </Typography>
                  {loading ? (
                    <CircularProgress sx={{ mt: 3 }} />
                  ) : (
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<Logout />}
                        onClick={handleLogout}
                        sx={{ mt: 3 }}
                      >
                        Logout
                      </Button>
                    </motion.div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </ThemeProvider>
  );
};

export default App;
