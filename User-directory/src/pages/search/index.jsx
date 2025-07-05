// Home.jsx
import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import ProfileItem from "../../components/profile-items";
import { FaCircleNotch } from "react-icons/fa";

export default function Home() {
  const { loading, profileList } = useContext(GlobalContext);
  console.log(profileList);

  if (loading)
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <FaCircleNotch className="animate-spin text-4xl text-cyan-600" />
      </div>
    );

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {profileList?.length > 0 ? (
        profileList.map((item) => <ProfileItem key={item.id} item={item} />)
      ) : (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold dark:text-white">
          Nothing to show. Please search something
        </div>
      )}
    </div>
  );
}

// This basic search page component where we have been getting the list of profile, we are storing the profile list in state (profileList) and using it here, so this data is being passed as props to the "tile component" --> "ProfileItem" component.
// This shows the values in tile which matches with the "search parameter".