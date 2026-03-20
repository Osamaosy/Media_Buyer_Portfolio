import React, { useState, useEffect } from 'react';
import { Trash2, Edit2, Plus, X } from 'lucide-react';
import {
  fetchProjects, fetchSiteContent,
  createProject, updateProject, deleteProject, updateSiteContent,
  SiteContent,
} from '../api';
import { Project } from '../types';

/* ─────────────────────────────────────────────
   Shared helpers
───────────────────────────────────────────── */
const inputCls = 'w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-blue-500 outline-none';
const labelCls = 'block text-sm font-medium text-gray-300 mb-1';

const BilingualInput = ({
  label,
  en, ar,
  onChangeEn, onChangeAr,
  multiline = false,
}: {
  label: string;
  en: string; ar: string;
  onChangeEn: (v: string) => void;
  onChangeAr: (v: string) => void;
  multiline?: boolean;
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className={labelCls}>{label} (English)</label>
      {multiline
        ? <textarea rows={3} value={en} onChange={e => onChangeEn(e.target.value)} className={`${inputCls} resize-none`} />
        : <input type="text" value={en} onChange={e => onChangeEn(e.target.value)} className={inputCls} />}
    </div>
    <div>
      <label className={labelCls}>{label} (Arabic)</label>
      {multiline
        ? <textarea rows={3} value={ar} onChange={e => onChangeAr(e.target.value)} className={`${inputCls} resize-none`} />
        : <input type="text" value={ar} onChange={e => onChangeAr(e.target.value)} className={inputCls} />}
    </div>
  </div>
);

const SectionCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 space-y-5">
    {children}
  </div>
);

/* ─────────────────────────────────────────────
   Section forms
───────────────────────────────────────────── */

// ── Hero ──────────────────────────────────────
const HeroForm = ({
  data, onChange,
}: {
  data: SiteContent['hero'];
  onChange: (d: SiteContent['hero']) => void;
}) => (
  <SectionCard>
    <BilingualInput
      label="Title / Badge"
      en={data.title.en} ar={data.title.ar}
      onChangeEn={v => onChange({ ...data, title: { ...data.title, en: v } })}
      onChangeAr={v => onChange({ ...data, title: { ...data.title, ar: v } })}
    />
    <BilingualInput
      label="Name"
      en={data.name.en} ar={data.name.ar}
      onChangeEn={v => onChange({ ...data, name: { ...data.name, en: v } })}
      onChangeAr={v => onChange({ ...data, name: { ...data.name, ar: v } })}
    />
    <BilingualInput
      label="Description"
      en={data.description.en} ar={data.description.ar}
      onChangeEn={v => onChange({ ...data, description: { ...data.description, en: v } })}
      onChangeAr={v => onChange({ ...data, description: { ...data.description, ar: v } })}
      multiline
    />
    <div>
      <p className={labelCls}>Stats (value + label)</p>
      <div className="space-y-3 mt-2">
        {data.stats.map((stat, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
            <div>
              <label className={labelCls}>Value</label>
              <input type="text" value={stat.value} className={inputCls}
                onChange={e => {
                  const stats = [...data.stats];
                  stats[i] = { ...stat, value: e.target.value };
                  onChange({ ...data, stats });
                }}
              />
            </div>
            <div>
              <label className={labelCls}>Label (EN)</label>
              <input type="text" value={stat.label.en} className={inputCls}
                onChange={e => {
                  const stats = [...data.stats];
                  stats[i] = { ...stat, label: { ...stat.label, en: e.target.value } };
                  onChange({ ...data, stats });
                }}
              />
            </div>
            <div>
              <label className={labelCls}>Label (AR)</label>
              <input type="text" value={stat.label.ar} className={inputCls}
                onChange={e => {
                  const stats = [...data.stats];
                  stats[i] = { ...stat, label: { ...stat.label, ar: e.target.value } };
                  onChange({ ...data, stats });
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    <BilingualInput
      label="CTA Primary Button"
      en={data.cta.primary.en} ar={data.cta.primary.ar}
      onChangeEn={v => onChange({ ...data, cta: { ...data.cta, primary: { ...data.cta.primary, en: v } } })}
      onChangeAr={v => onChange({ ...data, cta: { ...data.cta, primary: { ...data.cta.primary, ar: v } } })}
    />
    <BilingualInput
      label="CTA Secondary Button"
      en={data.cta.secondary.en} ar={data.cta.secondary.ar}
      onChangeEn={v => onChange({ ...data, cta: { ...data.cta, secondary: { ...data.cta.secondary, en: v } } })}
      onChangeAr={v => onChange({ ...data, cta: { ...data.cta, secondary: { ...data.cta.secondary, ar: v } } })}
    />
  </SectionCard>
);

// ── About ─────────────────────────────────────
const AboutForm = ({
  data, onChange,
}: {
  data: SiteContent['about'];
  onChange: (d: SiteContent['about']) => void;
}) => (
  <SectionCard>
    <BilingualInput
      label="Section Title"
      en={data.title.en} ar={data.title.ar}
      onChangeEn={v => onChange({ ...data, title: { ...data.title, en: v } })}
      onChangeAr={v => onChange({ ...data, title: { ...data.title, ar: v } })}
    />
    <BilingualInput
      label="Subtitle"
      en={data.subtitle.en} ar={data.subtitle.ar}
      onChangeEn={v => onChange({ ...data, subtitle: { ...data.subtitle, en: v } })}
      onChangeAr={v => onChange({ ...data, subtitle: { ...data.subtitle, ar: v } })}
    />
    <div>
      <p className={labelCls}>Bio Paragraphs</p>
      <div className="space-y-3 mt-2">
        {data.paragraphs.map((para, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Paragraph {i + 1} (EN)</label>
              <textarea rows={3} value={para.en} className={`${inputCls} resize-none`}
                onChange={e => {
                  const paragraphs = [...data.paragraphs];
                  paragraphs[i] = { ...para, en: e.target.value };
                  onChange({ ...data, paragraphs });
                }}
              />
            </div>
            <div>
              <label className={labelCls}>Paragraph {i + 1} (AR)</label>
              <textarea rows={3} value={para.ar} className={`${inputCls} resize-none`}
                onChange={e => {
                  const paragraphs = [...data.paragraphs];
                  paragraphs[i] = { ...para, ar: e.target.value };
                  onChange({ ...data, paragraphs });
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
      <p className={labelCls}>Stats Cards</p>
      <div className="space-y-4 mt-2">
        {data.stats.map((stat, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-3 items-start border-l-2 border-blue-500/30 pl-3">
            <div>
              <label className={labelCls}>Label (EN)</label>
              <input type="text" value={stat.label.en} className={inputCls}
                onChange={e => {
                  const stats = [...data.stats];
                  stats[i] = { ...stat, label: { ...stat.label, en: e.target.value } };
                  onChange({ ...data, stats });
                }}
              />
            </div>
            <div>
              <label className={labelCls}>Label (AR)</label>
              <input type="text" value={stat.label.ar} className={inputCls}
                onChange={e => {
                  const stats = [...data.stats];
                  stats[i] = { ...stat, label: { ...stat.label, ar: e.target.value } };
                  onChange({ ...data, stats });
                }}
              />
            </div>
            <div>
              <label className={labelCls}>Value</label>
              <input type="text" value={stat.value} className={inputCls}
                onChange={e => {
                  const stats = [...data.stats];
                  stats[i] = { ...stat, value: e.target.value };
                  onChange({ ...data, stats });
                }}
              />
            </div>
            <div>
              <label className={labelCls}>% (progress bar)</label>
              <input type="text" value={stat.percentage} className={inputCls}
                onChange={e => {
                  const stats = [...data.stats];
                  stats[i] = { ...stat, percentage: e.target.value };
                  onChange({ ...data, stats });
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionCard>
);

// ── Services ──────────────────────────────────
const ServicesForm = ({
  data, onChange,
}: {
  data: SiteContent['services'];
  onChange: (d: SiteContent['services']) => void;
}) => {
  const addService = () =>
    onChange({
      ...data,
      items: [...data.items, { title: { en: '', ar: '' }, description: { en: '', ar: '' }, icon: 'Target' }],
    });

  const removeService = (i: number) =>
    onChange({ ...data, items: data.items.filter((_, idx) => idx !== i) });

  const updateItem = (i: number, field: string, lang: string, val: string) => {
    const items = [...data.items];
    items[i] = { ...items[i], [field]: { ...(items[i] as any)[field], [lang]: val } };
    onChange({ ...data, items });
  };

  return (
    <SectionCard>
      <BilingualInput
        label="Section Title"
        en={data.title.en} ar={data.title.ar}
        onChangeEn={v => onChange({ ...data, title: { ...data.title, en: v } })}
        onChangeAr={v => onChange({ ...data, title: { ...data.title, ar: v } })}
      />
      <BilingualInput
        label="Subtitle"
        en={data.subtitle.en} ar={data.subtitle.ar}
        onChangeEn={v => onChange({ ...data, subtitle: { ...data.subtitle, en: v } })}
        onChangeAr={v => onChange({ ...data, subtitle: { ...data.subtitle, ar: v } })}
      />

      <div className="space-y-4">
        {data.items.map((item, i) => (
          <div key={i} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600 space-y-3 relative">
            <button
              type="button"
              onClick={() => removeService(i)}
              className="absolute top-3 right-3 text-red-400 hover:text-red-300 transition"
            >
              <X size={18} />
            </button>
            <p className="font-semibold text-blue-300 text-sm">Service #{i + 1}</p>
            <BilingualInput
              label="Title"
              en={item.title.en} ar={item.title.ar}
              onChangeEn={v => updateItem(i, 'title', 'en', v)}
              onChangeAr={v => updateItem(i, 'title', 'ar', v)}
            />
            <BilingualInput
              label="Description"
              en={item.description.en} ar={item.description.ar}
              onChangeEn={v => updateItem(i, 'description', 'en', v)}
              onChangeAr={v => updateItem(i, 'description', 'ar', v)}
              multiline
            />
            <div>
              <label className={labelCls}>Icon name (e.g. Target, BarChart3, Users)</label>
              <input type="text" value={item.icon} className={inputCls}
                onChange={e => {
                  const items = [...data.items];
                  items[i] = { ...item, icon: e.target.value };
                  onChange({ ...data, items });
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addService}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 border border-blue-500/40 rounded px-4 py-2 text-sm transition"
      >
        <Plus size={16} /> Add New Service
      </button>
    </SectionCard>
  );
};

// ── Results ───────────────────────────────────
const ResultsForm = ({
  data, onChange,
}: {
  data: SiteContent['results'];
  onChange: (d: SiteContent['results']) => void;
}) => (
  <SectionCard>
    <BilingualInput
      label="Section Title"
      en={data.title.en} ar={data.title.ar}
      onChangeEn={v => onChange({ ...data, title: { ...data.title, en: v } })}
      onChangeAr={v => onChange({ ...data, title: { ...data.title, ar: v } })}
    />
    <div>
      <p className={labelCls}>Stat Items</p>
      <div className="space-y-3 mt-2">
        {data.items.map((item, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start border-l-2 border-purple-500/30 pl-3">
            <div>
              <label className={labelCls}>Number / Value</label>
              <input type="text" value={item.number} className={inputCls}
                onChange={e => {
                  const items = [...data.items];
                  items[i] = { ...item, number: e.target.value };
                  onChange({ ...data, items });
                }}
              />
            </div>
            <div>
              <label className={labelCls}>Label (EN)</label>
              <input type="text" value={item.label.en} className={inputCls}
                onChange={e => {
                  const items = [...data.items];
                  items[i] = { ...item, label: { ...item.label, en: e.target.value } };
                  onChange({ ...data, items });
                }}
              />
            </div>
            <div>
              <label className={labelCls}>Label (AR)</label>
              <input type="text" value={item.label.ar} className={inputCls}
                onChange={e => {
                  const items = [...data.items];
                  items[i] = { ...item, label: { ...item.label, ar: e.target.value } };
                  onChange({ ...data, items });
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionCard>
);

// ── Contact ───────────────────────────────────
const ContactForm = ({
  data, onChange,
}: {
  data: SiteContent['contact'];
  onChange: (d: SiteContent['contact']) => void;
}) => (
  <SectionCard>
    <BilingualInput
      label="Section Title"
      en={data.title.en} ar={data.title.ar}
      onChangeEn={v => onChange({ ...data, title: { ...data.title, en: v } })}
      onChangeAr={v => onChange({ ...data, title: { ...data.title, ar: v } })}
    />
    <div>
      <label className={labelCls}>Email Address</label>
      <input type="email" value={data.email.value} className={inputCls}
        onChange={e => onChange({ ...data, email: { ...data.email, value: e.target.value } })}
      />
    </div>
    <BilingualInput
      label="WhatsApp Sub-label"
      en={data.whatsapp.sub.en} ar={data.whatsapp.sub.ar}
      onChangeEn={v => onChange({ ...data, whatsapp: { ...data.whatsapp, sub: { ...data.whatsapp.sub, en: v } } })}
      onChangeAr={v => onChange({ ...data, whatsapp: { ...data.whatsapp, sub: { ...data.whatsapp.sub, ar: v } } })}
    />
    <BilingualInput
      label="Facebook Sub-label"
      en={data.facebook.sub.en} ar={data.facebook.sub.ar}
      onChangeEn={v => onChange({ ...data, facebook: { ...data.facebook, sub: { ...data.facebook.sub, en: v } } })}
      onChangeAr={v => onChange({ ...data, facebook: { ...data.facebook, sub: { ...data.facebook.sub, ar: v } } })}
    />
    <BilingualInput
      label="Form Submit Button"
      en={data.form.button.en} ar={data.form.button.ar}
      onChangeEn={v => onChange({ ...data, form: { ...data.form, button: { ...data.form.button, en: v } } })}
      onChangeAr={v => onChange({ ...data, form: { ...data.form, button: { ...data.form.button, ar: v } } })}
    />
  </SectionCard>
);

// ── Footer ────────────────────────────────────
const FooterForm = ({
  data, onChange,
}: {
  data: SiteContent['footer'];
  onChange: (d: SiteContent['footer']) => void;
}) => (
  <SectionCard>
    <BilingualInput
      label="Bio / Tagline"
      en={data.bio.en} ar={data.bio.ar}
      onChangeEn={v => onChange({ ...data, bio: { ...data.bio, en: v } })}
      onChangeAr={v => onChange({ ...data, bio: { ...data.bio, ar: v } })}
    />
    <BilingualInput
      label="Links Section Title"
      en={data.linksTitle.en} ar={data.linksTitle.ar}
      onChangeEn={v => onChange({ ...data, linksTitle: { ...data.linksTitle, en: v } })}
      onChangeAr={v => onChange({ ...data, linksTitle: { ...data.linksTitle, ar: v } })}
    />
    <BilingualInput
      label="Contact Section Title"
      en={data.contactTitle.en} ar={data.contactTitle.ar}
      onChangeEn={v => onChange({ ...data, contactTitle: { ...data.contactTitle, en: v } })}
      onChangeAr={v => onChange({ ...data, contactTitle: { ...data.contactTitle, ar: v } })}
    />
    <BilingualInput
      label="Copyright Text"
      en={data.rights.en} ar={data.rights.ar}
      onChangeEn={v => onChange({ ...data, rights: { ...data.rights, en: v } })}
      onChangeAr={v => onChange({ ...data, rights: { ...data.rights, ar: v } })}
    />
  </SectionCard>
);

/* ─────────────────────────────────────────────
   ContentManager
───────────────────────────────────────────── */
type Section = keyof SiteContent;
const SECTIONS: { key: Section; label: string }[] = [
  { key: 'hero', label: 'Hero' },
  { key: 'about', label: 'About' },
  { key: 'services', label: 'Services' },
  { key: 'results', label: 'Results' },
  { key: 'contact', label: 'Contact' },
  { key: 'footer', label: 'Footer' },
];

const ContentManager: React.FC = () => {
  const [siteContent, setSiteContent] = useState<SiteContent | null>(null);
  const [selectedSection, setSelectedSection] = useState<Section>('hero');
  const [formData, setFormData] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => { loadContent(); }, []);

  const loadContent = async () => {
    try {
      const data = await fetchSiteContent();
      setSiteContent(data);
      setFormData(JSON.parse(JSON.stringify(data)));
    } catch (err) {
      console.error('Failed to load content:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSectionChange = (section: Section) => {
    setSelectedSection(section);
    setSuccessMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;
    setSaving(true);
    try {
      await updateSiteContent(selectedSection, formData[selectedSection]);
      setSiteContent(prev => prev ? { ...prev, [selectedSection]: formData[selectedSection] } : prev);
      setSuccessMsg(`${selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)} section updated!`);
    } catch (err) {
      console.error('Failed to update content:', err);
      alert('Error updating content');
    } finally {
      setSaving(false);
    }
  };

  if (loading || !formData) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  const renderSectionForm = () => {
    switch (selectedSection) {
      case 'hero':
        return <HeroForm data={formData.hero} onChange={d => setFormData({ ...formData, hero: d })} />;
      case 'about':
        return <AboutForm data={formData.about} onChange={d => setFormData({ ...formData, about: d })} />;
      case 'services':
        return <ServicesForm data={formData.services} onChange={d => setFormData({ ...formData, services: d })} />;
      case 'results':
        return <ResultsForm data={formData.results} onChange={d => setFormData({ ...formData, results: d })} />;
      case 'contact':
        return <ContactForm data={formData.contact} onChange={d => setFormData({ ...formData, contact: d })} />;
      case 'footer':
        return <FooterForm data={formData.footer} onChange={d => setFormData({ ...formData, footer: d })} />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Section Tabs */}
      <div className="flex flex-wrap gap-2">
        {SECTIONS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => handleSectionChange(key)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              selectedSection === key
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-gray-400 hover:text-white border border-slate-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Section Heading */}
      <h3 className="text-xl font-bold text-white">
        Editing: <span className="text-blue-400 capitalize">{selectedSection}</span>
      </h3>

      {/* Section-specific form */}
      {renderSectionForm()}

      {/* Success message */}
      {successMsg && (
        <p className="text-green-400 text-sm font-medium">{successMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={saving}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-3 px-6 rounded transition"
      >
        {saving ? 'Saving...' : `Save ${selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)}`}
      </button>
    </form>
  );
};

/* ─────────────────────────────────────────────
   ProjectManager (unchanged)
───────────────────────────────────────────── */
const ProjectManager: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    titleAr: '', titleEn: '', descAr: '', descEn: '',
    image: '', technologies: '', githubLink: '', liveLink: '',
  });

  useEffect(() => { loadProjects(); }, []);

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
    setFormData({ titleAr: '', titleEn: '', descAr: '', descEn: '', image: '', technologies: '', githubLink: '', liveLink: '' });
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const projectData = {
        title: { ar: formData.titleAr, en: formData.titleEn },
        description: { ar: formData.descAr, en: formData.descEn },
        image: formData.image,
        technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean),
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
      <form onSubmit={handleSubmit} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-6">
          {editingId ? 'Edit Project' : 'Create New Project'}
        </h3>
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Title (English)</label>
              <input type="text" value={formData.titleEn} required className={inputCls}
                onChange={e => setFormData({ ...formData, titleEn: e.target.value })} />
            </div>
            <div>
              <label className={labelCls}>Title (Arabic)</label>
              <input type="text" value={formData.titleAr} required className={inputCls}
                onChange={e => setFormData({ ...formData, titleAr: e.target.value })} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Description (English)</label>
              <textarea rows={3} value={formData.descEn} required className={`${inputCls} resize-none`}
                onChange={e => setFormData({ ...formData, descEn: e.target.value })} />
            </div>
            <div>
              <label className={labelCls}>Description (Arabic)</label>
              <textarea rows={3} value={formData.descAr} required className={`${inputCls} resize-none`}
                onChange={e => setFormData({ ...formData, descAr: e.target.value })} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Image URL</label>
            <input type="url" value={formData.image} required className={inputCls}
              onChange={e => setFormData({ ...formData, image: e.target.value })} />
          </div>
          <div>
            <label className={labelCls}>Technologies (comma-separated)</label>
            <input type="text" value={formData.technologies} className={inputCls}
              placeholder="Meta Ads, Google Analytics"
              onChange={e => setFormData({ ...formData, technologies: e.target.value })} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>GitHub Link (optional)</label>
              <input type="url" value={formData.githubLink} className={inputCls}
                onChange={e => setFormData({ ...formData, githubLink: e.target.value })} />
            </div>
            <div>
              <label className={labelCls}>Live Link (optional)</label>
              <input type="url" value={formData.liveLink} className={inputCls}
                onChange={e => setFormData({ ...formData, liveLink: e.target.value })} />
            </div>
          </div>
          <div className="flex gap-4">
            <button type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
              {editingId ? 'Update Project' : 'Create Project'}
            </button>
            {editingId && (
              <button type="button" onClick={handleReset}
                className="flex-1 bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded transition">
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>

      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Projects List</h3>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" />
          </div>
        ) : projects.length === 0 ? (
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center text-gray-400">
            No projects yet. Create one to get started!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(project => (
              <div key={project._id} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <h4 className="text-lg font-bold text-white mb-2">{project.title.en}</h4>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description.en}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.technologies?.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(project)}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded transition text-sm">
                    <Edit2 size={16} /> Edit
                  </button>
                  <button onClick={() => handleDelete(project._id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded transition text-sm">
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

/* ─────────────────────────────────────────────
   Admin Page
───────────────────────────────────────────── */
const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'content'>('projects');

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-6">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-blue-100 mt-2">Manage your portfolio and content</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex gap-4 border-b border-slate-700 mb-8">
          <button onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'projects' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}>
            <Plus className="inline mr-2" size={18} />Manage Projects
          </button>
          <button onClick={() => setActiveTab('content')}
            className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'content' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}>
            Manage Content
          </button>
        </div>

        <div className="mb-16">
          {activeTab === 'projects' && <ProjectManager />}
          {activeTab === 'content' && <ContentManager />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
