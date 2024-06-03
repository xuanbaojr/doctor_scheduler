'use client'
import React, { useEffect, useState } from "react";
import { fetchUser } from "@/components/inforpage/Info"; // Đường dẫn tới file api.ts

// Định nghĩa kiểu User (phải khớp với interface trong api.ts)
interface User {
  id: string;
  email: string;
  phone: string;
  // role: string;
}

const App: React.FC = () => {
  // console.log(fetchUser);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await fetchUser();
        // console.log(userData);
        setUser(userData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    getUser();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.phone}</h1>
          <p>{user.email}</p>
          {/* Hiển thị các thông tin khác của user */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
