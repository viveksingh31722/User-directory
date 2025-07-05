import React, { useState, useEffect } from "react";
import { FaCircleNotch } from "react-icons/fa";
import ProfileItem from "../../components/profile-items/index";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(false);

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://randomuser.me/api/?results=50");
      const data = await res.json();

      if (data?.results) {
        setLoading(false);
        setUsers(data.results);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div>
      {Loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <FaCircleNotch className="animate-spin text-4xl text-cyan-600" />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 …">
          {users.map((user) => (
            <div key={user.login.uuid} className="w-80">
              <ProfileItem item={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
