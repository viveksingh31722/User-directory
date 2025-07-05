export default function ProfileItem({ item }) {
  const fullName = `${item.name.first} ${item.name.last}`;

  return (
    <div className="w-80 aspect-square bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col dark:bg-gray-800 text-gray-900 dark:text-white p-6 ">
      <div className="mt-4 mx-auto w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-md">
        <img
          src={item.picture.large}
          alt={fullName}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="px-6 pt-4 pb-6 text-center flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{fullName}</h3>
          <p className="text-sm text-gray-500 truncate dark:text-gray-300">{item.email}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{item.location.country}</p>
        </div>

        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-500 transition">
          View Profile
        </button>
      </div>
    </div>
  );
}
