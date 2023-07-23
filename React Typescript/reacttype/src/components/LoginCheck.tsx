import React from "react";
import { useState } from "react";

type userType = {
  name: string;
  email: string;
  phone: number;
};

function LoginCheck() {
  const [user, setUser] = useState<userType | null>({} as userType);
  const handleLogin = () => {
    setUser({
      name: "Abdullah",
      email: "cc@hotmail.com",
      phone: 563654324563,
    });
  };
  const handleLogout = () => {
    setUser({} as userType);
  };
  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
      <div>
        <p>
          {user?.name} {user?.email} {user?.phone}
        </p>
      </div>
    </div>
  );
}

export default LoginCheck;
