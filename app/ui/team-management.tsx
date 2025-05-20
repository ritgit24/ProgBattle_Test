// app/dashboard/page.jsx
'use client';
import { useState } from 'react';

export default function Dashboard() {
  // Hardcoded leaderboard data
  const [topTeams] = useState([
    { id: 1, name: 'Quantum Coders', score: 1200 },
    { id: 2, name: 'Byte Force', score: 1150 },
    { id: 3, name: 'Script Kiddies', score: 1100 },
    { id: 4, name: 'Python Warriors', score: 1050 },
    { id: 5, name: 'Code Breakers', score: 950 },
    { id: 6, name: 'Algorithm Avengers', score: 900 },
    { id: 7, name: 'Syntax Squad', score: 850 },
    { id: 8, name: 'Binary Titans', score: 800 },
    { id: 9, name: 'Debug Dynasty', score: 750 },
    { id: 10, name: 'Logic Legends', score: 700 },
  ]);

//   const [userTeam] = useState({
//     name: 'Your Team Name',
//     score: 650,
//     rank: 12
//   });

  // SVG Icons
  const TrophyIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  );

  const UsersIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  const TeamIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const PlusIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  );

  const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Leaderboard Sidebar (same as before) */}
      <div className="w-64 bg-indigo-800 text-white p-4 flex flex-col">
        <div className="mb-8">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <TrophyIcon />
            Leaderboard
          </h2>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
            Top 10 Teams
          </h3>
          <ul className="space-y-2">
            {topTeams.map((team, index) => (
              <li key={team.id} className="flex justify-between items-center">
                <span className="text-sm">
                  {index + 1}. {team.name}
                </span>
                <span className="text-yellow-300 font-medium">{team.score}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="mt-auto">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
            <UsersIcon />
            Your Team
          </h3>
          <div className="bg-indigo-700 p-3 rounded-lg">
            <p className="font-medium">{userTeam.name}</p>
            <div className="flex justify-between mt-1">
              <span className="text-sm">Rank: #{userTeam.rank}</span>
              <span className="text-yellow-300 font-medium">{userTeam.score}</span>
            </div>
          </div>
        </div> */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Team Management</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Join a Team Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <TeamIcon />
              <h2 className="text-xl font-semibold">Join a Team</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Search for existing teams and send a request to join them.
            </p>
            
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search teams..."
                />
              </div>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Search
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="p-3 border border-gray-200 rounded-md flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Algorithm Avengers</h3>
                  <p className="text-sm text-gray-500">Members: 3/4</p>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                  Request to Join
                </button>
              </div>
              
              <div className="p-3 border border-gray-200 rounded-md flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Python Warriors</h3>
                  <p className="text-sm text-gray-500">Members: 2/4</p>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                  Request to Join
                </button>
              </div>
            </div>
          </div>

          {/* Create a Team Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <PlusIcon />
              <h2 className="text-xl font-semibold">Create a Team</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Start your own team and invite others to join you.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="team-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Team Name
                </label>
                <input
                  type="text"
                  id="team-name"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter team name"
                />
              </div>
              
              <div>
                <label htmlFor="team-description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description (Optional)
                </label>
                <textarea
                  id="team-description"
                  rows={3}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="What's your team about?"
                />
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                >
                  <PlusIcon />
                  Create Team
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}