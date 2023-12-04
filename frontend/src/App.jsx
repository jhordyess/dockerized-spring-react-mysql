import { useState, useEffect } from "react";

const fetchUsers = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/user");
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};

const saveUser = async (user) => {
  try {
    await fetch("http://localhost:8080/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  } catch (error) {
    console.info("Error saving user");
  }
};

const initialUser = {
  name: "",
  email: "",
};

function App() {
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState(initialUser);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const getUsers = async () => {
    setUsers(await fetchUsers());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveUser(user);
    getUsers();
    setUser(initialUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main>
      <h1>Users</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          required
          onChange={handleChange}
          value={user.name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          onChange={handleChange}
          value={user.email}
        />
        <button type="submit">Add</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map(({ name, email }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
