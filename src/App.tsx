import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileFrame from "./components/MobileFrame";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import Dashboard from "./components/Dashboard";
import VerifyLand from "./components/VerifyLand";
import AdminPortal from "./components/AdminPortal";
import {
  type Land,
  type UserProfile,
  DEFAULT_LANDS,
  loadLands,
  saveLands,
  loadUser,
  saveUser,
  clearUser,
} from "./data/mockLands";

type Screen =
  | "splash"
  | "login"
  | "register"
  | "dashboard"
  | "verify"
  | "admin";

const pageVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const pageTransition = { duration: 0.25, ease: "easeInOut" };

function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [lands, setLands] = useState<Land[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);

  // Load persisted data on mount
  useEffect(() => {
    setLands(loadLands());
    setUser(loadUser());
  }, []);

  // Persist lands when they change
  const updateLands = (newLands: Land[]) => {
    setLands(newLands);
    saveLands(newLands);
  };

  // Persist user when it changes
  const updateUser = (newUser: UserProfile | null) => {
    setUser(newUser);
    if (newUser) {
      saveUser(newUser);
    } else {
      clearUser();
    }
  };

  const handleLogin = (loggedInUser: UserProfile) => {
    updateUser(loggedInUser);
    setScreen("dashboard");
  };

  const handleRegister = (newUser: UserProfile) => {
    updateUser(newUser);
    setScreen("dashboard");
  };

  const handleLogout = () => {
    updateUser(null);
    setScreen("login");
  };

  const handleAdminGesture = () => {
    setScreen("admin");
  };

  const renderScreen = () => {
    switch (screen) {
      case "splash":
        return (
          <SplashScreen
            key="splash"
            onComplete={() => setScreen(user ? "dashboard" : "login")}
            onAdminGesture={handleAdminGesture}
          />
        );
      case "login":
        return (
          <motion.div
            key="login"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <LoginScreen
              onLogin={handleLogin}
              onRegister={() => setScreen("register")}
              onBack={() => setScreen("splash")}
            />
          </motion.div>
        );
      case "register":
        return (
          <motion.div
            key="register"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <RegisterScreen
              onRegister={handleRegister}
              onLogin={() => setScreen("login")}
              onBack={() => setScreen("login")}
            />
          </motion.div>
        );
      case "dashboard":
        return (
          <motion.div
            key="dashboard"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Dashboard
              user={user!}
              lands={lands}
              onVerify={() => setScreen("verify")}
              onLogout={handleLogout}
            />
          </motion.div>
        );
      case "verify":
        return (
          <motion.div
            key="verify"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <VerifyLand lands={lands} onBack={() => setScreen("dashboard")} />
          </motion.div>
        );
      case "admin":
        return (
          <motion.div
            key="admin"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <AdminPortal
              lands={lands}
              setLands={updateLands}
              onClose={() => setScreen(user ? "dashboard" : "login")}
            />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <MobileFrame>
      <AnimatePresence mode="wait">{renderScreen()}</AnimatePresence>
    </MobileFrame>
  );
}

export default App;