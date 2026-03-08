import React, { useState } from 'react';

const ProjectManager: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-white mb-6">Manage Projects</h2>
      <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
        <p className="text-gray-300">Project management interface coming soon...</p>
      </div>
    </div>
  );
};

const ContentManager: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-white mb-6">Manage Content</h2>
      <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
        <p className="text-gray-300">Content management interface coming soon...</p>
      </div>
    </div>
  );
};

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'content'>('projects');

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-6">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-blue-100 mt-2">Manage your portfolio and content</p>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex gap-4 border-b border-slate-700 mb-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'projects'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Manage Projects
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'content'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Manage Content
          </button>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {activeTab === 'projects' && <ProjectManager />}
          {activeTab === 'content' && <ContentManager />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
