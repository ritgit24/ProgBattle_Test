// // app/dashboard/page.jsx
// 'use client';
// import { useState } from 'react';


// export default function Dashboard() {
//   // Hardcoded data
//   const [topTeams] = useState([
//     { id: 1, name: 'Quantum Coders', score: 1200 },
//     // ... other teams
//   ]);

//   const [userTeam] = useState({
//     name: 'Your Team Name',
//     score: 650,
//     rank: 12
//   });

//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submissionStatus, setSubmissionStatus] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//     // Clear any previous status when new file is selected
//     setSubmissionStatus(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!selectedFile) {
//       setSubmissionStatus({ 
//         success: false, 
//         message: 'Please select a file before submitting' 
//       });
//       return;
//     }

//     // Check file extension
//     if (!selectedFile.name.endsWith('.py')) {
//       setSubmissionStatus({ 
//         success: false, 
//         message: 'Only Python (.py) files are allowed' 
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmissionStatus(null); // Clear previous status

//     try {
//       // Simulate API call - replace with actual fetch to your backend
//       const response = await new Promise(resolve => {
//         setTimeout(() => {
//           resolve({
//             ok: true,
//             json: () => Promise.resolve({ message: 'Submission received!' })
//           });
//         }, 1500);
//       });

//       if (response.ok) {
//         setSubmissionStatus({ 
//           success: true, 
//           message: 'File submitted successfully! Your bot is being evaluated.' 
//         });
//         setSelectedFile(null);
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Submission failed');
//       }
//     } catch (error) {
//       setSubmissionStatus({ 
//         success: false, 
//         message: error.message || 'An error occurred during submission'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* ... (sidebar code remains the same) ... */}

//       {/* Main Content */}
//       <div className="flex-1 p-8 overflow-auto">
//         {/* ... (other content remains the same) ... */}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* File upload area */}
//           <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//             <UploadIcon className="mx-auto h-12 w-12 text-gray-400 mb-2" />
//             <label htmlFor="file-upload" className="cursor-pointer">
//               <span className="text-indigo-600 font-medium">
//                 {selectedFile ? selectedFile.name : 'Click to select your Python file'}
//               </span>
//               <input
//                 id="file-upload"
//                 name="file-upload"
//                 type="file"
//                 className="sr-only"
//                 accept=".py"
//                 onChange={handleFileChange}
//               />
//             </label>
//             <p className="text-xs text-gray-500 mt-2">Only .py files accepted</p>
//           </div>

//           {/* Status message with proper checks */}
//           {submissionStatus && (
//             <div className={`p-3 rounded-md ${
//               submissionStatus.success 
//                 ? 'bg-green-100 text-green-800' 
//                 : 'bg-red-100 text-red-800'
//             }`}>
//               {submissionStatus.message}
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={isSubmitting || !selectedFile}
//             className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
//               isSubmitting || !selectedFile ? 'opacity-70 cursor-not-allowed' : ''
//             }`}
//           >
//             {isSubmitting ? 'Submitting...' : 'Submit Bot'}
//           </button>
//         </form>

//         {/* ... (rest of the content) ... */}
//       </div>
//     </div>
//   );
// }
// app/dashboard/page.jsx
// 'use client';
// import { useState } from 'react';

// export default function Dashboard() {
//   // Hardcoded data
//   const [topTeams] = useState([
//     { id: 1, name: 'Quantum Coders', score: 1200 },
//     { id: 2, name: 'Byte Force', score: 1150 },
//     { id: 3, name: 'Script Kiddies', score: 1100 },
//     { id: 4, name: 'Python Warriors', score: 1050 },
//     { id: 5, name: 'Code Breakers', score: 950 },
//     { id: 6, name: 'Algorithm Avengers', score: 900 },
//     { id: 7, name: 'Syntax Squad', score: 850 },
//     { id: 8, name: 'Binary Titans', score: 800 },
//     { id: 9, name: 'Debug Dynasty', score: 750 },
//     { id: 10, name: 'Logic Legends', score: 700 },
//   ]);

//   const [userTeam] = useState({
//     name: 'Your Team Name',
//     score: 650,
//     rank: 12
//   });

//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submissionStatus, setSubmissionStatus] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//     setSubmissionStatus(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!selectedFile) {
//       setSubmissionStatus({ 
//         success: false, 
//         message: 'Please select a file before submitting' 
//       });
//       return;
//     }

//     if (!selectedFile.name.endsWith('.py')) {
//       setSubmissionStatus({ 
//         success: false, 
//         message: 'Only Python (.py) files are allowed' 
//       });
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       setSubmissionStatus({ 
//         success: true, 
//         message: 'File submitted successfully! Your bot is being evaluated.' 
//       });
//       setSelectedFile(null);
//     } catch (error) {
//       setSubmissionStatus({ 
//         success: false, 
//         message: 'An error occurred during submission'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // SVG Icons
//   const TrophyIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
//       <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
//       <path d="M4 22h16"></path>
//       <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
//       <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
//       <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
//     </svg>
//   );

//   const UsersIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//       <circle cx="9" cy="7" r="4"></circle>
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//       <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//     </svg>
//   );

//   const UploadIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//       <polyline points="17 8 12 3 7 8"></polyline>
//       <line x1="12" y1="3" x2="12" y2="15"></line>
//     </svg>
//   );

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-indigo-800 text-white p-4 flex flex-col">
//         <div className="mb-8">
//           <h2 className="text-xl font-bold flex items-center gap-2">
//             <TrophyIcon />
//             Leaderboard
//           </h2>
//         </div>

//         {/* Top Teams */}
//         <div className="mb-8">
//           <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
//             Top 10 Teams
//           </h3>
//           <ul className="space-y-2">
//             {topTeams.map((team, index) => (
//               <li key={team.id} className="flex justify-between items-center">
//                 <span className="text-sm">
//                   {index + 1}. {team.name}
//                 </span>
//                 <span className="text-yellow-300 font-medium">{team.score}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* User Team */}
//         <div className="mt-auto">
//           <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
//             <UsersIcon />
//             Your Team
//           </h3>
//           <div className="bg-indigo-700 p-3 rounded-lg">
//             <p className="font-medium">{userTeam.name}</p>
//             <div className="flex justify-between mt-1">
//               <span className="text-sm">Rank: #{userTeam.rank}</span>
//               <span className="text-yellow-300 font-medium">{userTeam.score}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8 overflow-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Hello, Team Member!</h1>
        
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-xl font-semibold mb-4">Welcome, {userTeam.name}!</h2>
//           <p className="text-gray-600 mb-6">
//             Submit your Python bot file to compete in the tournament. Make sure your file follows
//             the competition guidelines.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//               <div className="mx-auto w-12 h-12 mb-2 text-gray-400">
//                 <UploadIcon />
//               </div>
//               <label htmlFor="file-upload" className="cursor-pointer">
//                 <span className="text-indigo-600 font-medium">
//                   {selectedFile ? selectedFile.name : 'Click to select your Python file'}
//                 </span>
//                 <input
//                   id="file-upload"
//                   name="file-upload"
//                   type="file"
//                   className="sr-only"
//                   accept=".py"
//                   onChange={handleFileChange}
//                 />
//               </label>
//               <p className="text-xs text-gray-500 mt-2">Only .py files accepted</p>
//             </div>

//             {submissionStatus && (
//               <div className={`p-3 rounded-md ${
//                 submissionStatus.success 
//                   ? 'bg-green-100 text-green-800' 
//                   : 'bg-red-100 text-red-800'
//               }`}>
//                 {submissionStatus.message}
//               </div>
//             )}

//             <button
//               type="submit"
//               disabled={isSubmitting || !selectedFile}
//               className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
//                 isSubmitting || !selectedFile ? 'opacity-70 cursor-not-allowed' : ''
//               }`}
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit Bot'}
//             </button>
//           </form>
//         </div>

//         {/* Recent Activity Section */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
//           <div className="text-gray-500 italic">
//             No recent activity yet. Submit your first bot to see results here!
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// app/dashboard/page.jsx
'use client';
import { useState } from 'react';

export default function Tournament() {
  // Team data with proper initialization
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
    // ... other teams
  ]);

  const [userTeam] = useState({
    name: 'Your Team Name',
    score: 650,
    rank: 12
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setSubmissionStatus(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate file exists
    if (!selectedFile) {
      setSubmissionStatus({ 
        success: false, 
        message: 'Please select a file before submitting' 
      });
      return;
    }

    // Validate file type
    if (!selectedFile.name.endsWith('.py')) {
      setSubmissionStatus({ 
        success: false, 
        message: 'Only Python (.py) files are allowed' 
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmissionStatus({ 
        success: true, 
        message: 'File submitted successfully! Your bot is being evaluated.' 
      });
      setSelectedFile(null);
    } catch (error) {
      setSubmissionStatus({ 
        success: false, 
        message: error instanceof Error ? error.message : 'An error occurred during submission'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simple SVG icons as components
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

  const UploadIcon = () => (
    <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-800 text-white p-4 flex flex-col">
        <div className="mb-8">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <TrophyIcon />
            Leaderboard
          </h2>
        </div>

        {/* Top Teams */}
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

        {/* User Team */}
        <div className="mt-auto">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
            <UsersIcon />
            Your Team
          </h3>
          <div className="bg-indigo-700 p-3 rounded-lg">
            <p className="font-medium">{userTeam?.name || 'Loading...'}</p>
            <div className="flex justify-between mt-1">
              <span className="text-sm">Rank: #{userTeam?.rank || '--'}</span>
              <span className="text-yellow-300 font-medium">
                {userTeam?.score || '0'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Hello, Team Member!</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Welcome, {userTeam?.name || 'Team Member'}!
          </h2>
          <p className="text-gray-600 mb-6">
            Submit your Python bot file to compete in the tournament.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <UploadIcon />
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="text-indigo-600 font-medium">
                  {selectedFile?.name || 'Click to select your Python file'}
                </span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  accept=".py"
                  onChange={handleFileChange}
                />
              </label>
              <p className="text-xs text-gray-500 mt-2">Only .py files accepted</p>
            </div>

            {submissionStatus && (
              <div className={`p-3 rounded-md ${
                submissionStatus?.success 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submissionStatus?.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !selectedFile}
              className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                isSubmitting || !selectedFile ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Bot'}
            </button>
          </form>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="text-gray-500 italic">
            {submissionStatus?.success 
              ? 'Your submission is being processed' 
              : 'No recent activity yet'}
          </div>
        </div>
      </div>
    </div>
  );
}