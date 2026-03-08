import React, { useState, useEffect } from 'react';
import { Trash2, Edit2, Plus } from 'lucide-react';
import { fetchProjects, fetchSiteContent, createProject, updateProject, deleteProject, updateSiteContent, SiteContent } from '../api';
import { Project } from '../types';

/**
 * ProjectManager Component
 */
const ProjectManager: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    titleAr: '',
    titleEn: '',
    descAr: '',
    descEn: '',
    image: '',
    technologies: '',
    githubLink: '',
    liveLink: '',
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await fetchProjects();
      setProjects(data);
    } catch (err) {
      console.error('Failed to load projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      titleAr: '',
      titleEn: '',
      descAr: '',
      descEn: '',
      image: '',
      technologies: '',
      githubLink: '',
      liveLink: '',
    });
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const projectData = {
        title: { ar: formData.titleAr, en: formData.titleEn },
        description: { ar: formData.descAr, en: formData.descEn },
        image: formData.image,
        technologies: formData.technologies.split(',').map((t) => t.trim()).filter(Boolean),
        githubLink: formData.githubLink || undefined,
        liveLink: formData.liveLink || undefined,
      };

      if (editingId) {
        await updateProject(editingId, projectData);
      } else {
        await createProject(projectData);
      }

      await loadProjects();
      handleReset();
    } catch (err) {
      console.error('Failed to submit project:', err);
      alert('Error saving project');
    }
  };

  const handleEdit = (project: Project) => {
    setFormData({
      titleAr: project.title.ar,
      titleEn: project.title.en,
      descAr: project.description.ar,
      descEn: project.description.en,
      image: project.image,
      technologies: (project.technologies || []).join(', '),
      githubLink: project.githubLink || '',
      liveLink: project.liveLink || '',
    });
    setEditingId(project._id);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await deleteProject(id);
      await loadProjects();
    } catch (err) {
      console.error('Failed to delete project:', err);
      alert('Error deleting project');
    }
  };

  return (
    <div className="space-y-8">
      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-6">
          {editingId ? 'Edit Project' : 'Create New Project'}
        </h3>

        <div className="space-y-6">
          {/* Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Title (English)</label>
              <input
                type="text"
                value={formData.titleEn}
                onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Title (Arabic)</label>
              <input
                type="text"
                value={formData.titleAr}
                onChange={(e) => setFormData({ ...formData, titleAr: e.target.value })}
                className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-blue-500 outline-none"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Description (English)</label>
              <textarea
                value={formData.descEn}
                onChange={(e) => setFormData({ ...formData, descEn: e.target.value })}
                className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-blue-500 outline-none resize-none"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Description (Arabic)</label>
              <textarea
                value={formData.descAr}
                onChange={(e) => setFormData({ ...formData, descAr: e.target.value })}
                className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-blue-500 outline-none resize-none"
                rows={3}
                required
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-blue-500 outline-none"
              required
            />
          </div>

          {/* Technologies */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Technologies (comma-separated)
            </label>
            <input
              type="text"
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-blue-500 outline-none"
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">GitHub Link (optional)</label>
              <input
                type="url"
                value={formData.githubLink}
                onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Live Link (optional)</label>
              <input
                type="url"
                value={formData.liveLink}
                onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
                className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
            >
              {editingId ? 'Update Project' : 'Create Project'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded transition"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Projects List */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Projects List</h3>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : projects.length === 0 ? (
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center text-gray-400">
            No projects yet. Create one to get started!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project._id} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <h4 className="text-lg font-bold text-white mb-2">{project.title.en}</h4>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description.en}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded transition text-sm"
                  >
                    <Edit2 size={16} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded transition text-sm"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * ContentManager Component
 */
const ContentManager: React.FC = () => {
  const [siteContent, setSiteContent] = useState<SiteContent | null>(null);
  const [selectedSection, setSelectedSection] = useState<keyof SiteContent>('hero');
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent();
  }, []);

  useEffect(() => {
    if (siteContent && selectedSection) {
      const section = siteContent[selectedSection];
      setFormData(JSON.parse(JSON.stringify(section))); // Deep clone
    }
  }, [selectedSection, siteContent]);

  const loadContent = async () => {
    try {
      const data = await fetchSiteContent();
      setSiteContent(data);
    } catch (err) {
      console.error('Failed to load content:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (path: string, value: any) => {
    const keys = path.split('.');
    const newData = JSON.parse(JSON.stringify(formData));
    let current = newData;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setFormData(newData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateSiteContent(selectedSection, formData);
      await loadContent();
      alert('Content updated successfully!');
    } catch (err) {
      console.error('Failed to update content:', err);
      alert('Error updating content');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const renderFields = (obj: any, prefix: string = ''): React.ReactNode[] => {
    const fields: React.ReactNode[] = [];
    for (const [key, value] of Object.entries(obj)) {
      const path = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        if ('ar' in value && 'en' in value) {
          // Bilingual field
          fields.push(
            <div key={path} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {key} (English)
                </label>
                <input
                  type="text"
                  value={value.en || ''}
                  onChange={(e) => handleInputChange(`${path}.en`, e.target.value)}
                  className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {key} (Arabic)
                </label>
                <input
                  type="text"
                  value={value.ar || ''}
                  onChange={(e) => handleInputChange(`${path}.ar`, e.target.value)}
                  className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          );
        } else {
          // Nested object
          fields.push(
            <div key={path} className="border-l-2 border-slate-600 pl-4 space-y-4">
              <h4 className="text-white font-semibold capitalize">{key}</h4>
              {renderFields(value, path)}
            </div>
          );
        }
      } else if (typeof value === 'string') {
        fields.push(
          <div key={path}>
            <label className="block text-sm font-medium text-gray-300 mb-2 capitalize">
              {key}
            </label>
            <textarea
              value={value}
              onChange={(e) => handleInputChange(path, e.target.value)}
              className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-blue-500 outline-none resize-none"
              rows={2}
            />
          </div>
        );
      }
    }
    return fields;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Section Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Select Section</label>
        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value as keyof SiteContent)}
          className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-blue-500 outline-none"
        >
          {Object.keys(siteContent || {}).map((section) => (
            <option key={section} value={section}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Dynamic Form Fields */}
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 space-y-6">
        {renderFields(formData)}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition"
      >
        Update {selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)}
      </button>
    </form>
  );
};

/**
 * Admin Page
 */
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
            <Plus className="inline mr-2" size={18} />
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
