import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <button className="space-x-2 flex items-center hover:text-white">
          <HomeIcon className="w-5 h-5" />
          <p>Home</p>
        </button>
        <button className="space-x-2 flex items-center hover:text-white">
          <SearchIcon className="w-5 h-5" />
          <p>Search</p>
        </button>
        <button className="space-x-2 flex items-centerte hover:text-white">
          <LibraryIcon className="w-5 h-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="space-x-2 flex items-centerte hover:text-white">
          <PlusCircleIcon className="w-5 h-5" />
          <p>Create Playlist</p>
        </button>
        <button className="space-x-2 flex items-center hover:text-white">
          <HeartIcon className="w-5 h-5" />
          <p>Liked Songs</p>
        </button>
        <button className="space-x-2 flex items-center hover:text-white">
          <RssIcon className="w-5 h-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <p className="hover:text-white cursor-pointer">Playlist Name...</p>
        <p className="hover:text-white cursor-pointer">Playlist Name...</p>
        <p className="hover:text-white cursor-pointer">Playlist Name...</p>
        <p className="hover:text-white cursor-pointer">Playlist Name...</p>
        <p className="hover:text-white cursor-pointer">Playlist Name...</p>
        <p className="hover:text-white cursor-pointer">Playlist Name...</p>
        <p className="hover:text-white cursor-pointer">Playlist Name...</p>
        <p className="hover:text-white cursor-pointer">Playlist Name...</p>
        <p className="hover:text-white cursor-pointer">Playlist Name...</p>
      </div>
    </div>
  );
}

export default Sidebar;
