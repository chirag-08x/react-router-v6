const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{user && `Hello, ${user.name}`}</h2>
      <h2>{user && `Email : ${user.email}`}</h2>
      <h1>{!user && "User not present"}</h1>
    </div>
  );
};

export default Dashboard;
