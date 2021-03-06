import React from 'react'
import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon,
} from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <div className="border-r border-gray-900 p-5 text-sm text-gray-500">
      <div className="space-y-4">
        <button
          className="hover: flex items-center space-x-2
        hover:text-white"
        >
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button
          className="hover: flex items-center space-x-2
        hover:text-white"
        >
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button
          className="hover: flex items-center space-x-2
        hover:text-white"
        >
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t[0.1px] border-gray-900" />

        <button
          className="hover: flex items-center space-x-2
        hover:text-white"
        >
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button
          className="hover: flex items-center space-x-2
        hover:text-white"
        >
          <HeartIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <button
          className="hover: flex items-center space-x-2
        hover:text-white"
        >
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t[0.1px] border-gray-900" />

        {/* Playlist */}
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      </div>
    </div>
  )
}

export default Sidebar
