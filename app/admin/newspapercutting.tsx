//admin/newspapercutting.tsx

import React from 'react';
import { XIcon, ImageIcon, SaveIcon } from 'lucide-react';

interface NewspaperFormData {
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface NewspaperCutting {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface NewspaperCuttingModalProps {
  isOpen: boolean;
  editingNewspaper: NewspaperCutting | null;
  newspaperFormData: NewspaperFormData;
  setNewspaperFormData: React.Dispatch<React.SetStateAction<NewspaperFormData>>;
  uploading: boolean;
  saving: boolean;
  onCancel: () => void;
  onSave: () => void;
  onImageUpload: (file: File) => void;
}

const NewspaperCuttingModal: React.FC<NewspaperCuttingModalProps> = ({
  isOpen,
  editingNewspaper,
  newspaperFormData,
  setNewspaperFormData,
  uploading,
  saving,
  onCancel,
  onSave,
  onImageUpload,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-200">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900">
            {editingNewspaper ? 'Edit Newspaper Cutting' : 'Add New Newspaper Cutting'}
          </h2>
          <button
            onClick={onCancel}
            className="p-3 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <XIcon className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-3">
              Category
            </label>
            <input
              type="text"
              value={newspaperFormData.category}
              onChange={(e) => setNewspaperFormData(prev => ({ ...prev, category: e.target.value }))}
              className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-800 text-lg"
              placeholder="Enter category (e.g., Legal News, Court Cases)..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-3">
              Title
            </label>
            <input
              type="text"
              value={newspaperFormData.title}
              onChange={(e) => setNewspaperFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-800 text-lg"
              placeholder="Enter newspaper cutting title..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-3">
              Description
            </label>
            <textarea
              value={newspaperFormData.description}
              onChange={(e) => setNewspaperFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-800 resize-vertical"
              placeholder="Enter description..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-3">
              Publication Date
            </label>
            <input
              type="date"
              value={newspaperFormData.date}
              onChange={(e) => setNewspaperFormData(prev => ({ ...prev, date: e.target.value }))}
              className="w-full px-6 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-800"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-3">
              Image
            </label>
            <div className="flex items-center space-x-6">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    onImageUpload(e.target.files[0]);
                  }
                }}
                className="hidden"
                id="newspaper-image-upload"
              />
              <label
                htmlFor="newspaper-image-upload"
                className="flex items-center space-x-3 px-6 py-3 border-2 border-amber-300 rounded-xl cursor-pointer hover:bg-amber-50 transition-colors text-blue-900 font-medium"
              >
                <ImageIcon className="w-5 h-5" />
                <span>{uploading ? 'Uploading...' : 'Upload Image'}</span>
              </label>
              {newspaperFormData.image && (
                <div className="relative">
                  <img
                    src={newspaperFormData.image}
                    alt="Preview"
                    className="w-24 h-24 object-cover rounded-xl border-2 border-amber-200 shadow-md"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-amber-200">
            <button
              onClick={onCancel}
              className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              disabled={saving || uploading}
              className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:from-blue-800 hover:to-blue-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              <SaveIcon className="w-5 h-5" />
              <span>{saving ? 'Saving...' : 'Save Newspaper Cutting'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewspaperCuttingModal;