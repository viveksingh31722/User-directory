import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [profileList, setProfileList] = useState([]);
  const [profileDataList, setProfileDataList] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [allProfiles, setAllProfiles] = useState([]);

  useEffect(() => {
    async function loadProfiles() {
      setLoading(true);
      setErrorMsg(null);
      try {
        const res = await fetch("https://randomuser.me/api/?results=500");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setAllProfiles(data.results);
      } catch (err) {
        setErrorMsg(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadProfiles();
  }, []);

  async function handleSubmit(e) {
    e?.preventDefault();
    if (!searchParam.trim()) return;

    setLoading(true);
    const term = searchParam.toLowerCase().trim();

    const filtered = allProfiles.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      return (
        fullName.includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.location.country.toLowerCase().includes(term)
      );
    });

    setProfileList(filtered);
    setSearchParam("");
    setLoading(false);
  }

  console.log(profileList, "userList");

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        profileList,
        setSearchParam,
        handleSubmit,
        profileDataList,
        setProfileDataList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// Ths is the context page, it is used the manage the state by passing the values to different component and make the data accessible to all the component