import { CreateNewspaperCutting, NewspaperCutting, UpdateNewspaperCutting } from '@/types/newspapercutting';
import fs from 'fs';
import path from 'path';

const NEWSPAPER_CUTTING_DATA_PATH = path.join(process.cwd(), 'data', 'newspaper-cuttings.json');

// Ensure data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  if (!fs.existsSync(NEWSPAPER_CUTTING_DATA_PATH)) {
    fs.writeFileSync(NEWSPAPER_CUTTING_DATA_PATH, JSON.stringify([], null, 2));
  }
};

export const getAllNewspaperCuttings = (): NewspaperCutting[] => {
  try {
    ensureDataDirectory();
    const data = fs.readFileSync(NEWSPAPER_CUTTING_DATA_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading newspaper cuttings:', error);
    return [];
  }
};

export const getNewspaperCuttingById = (id: string): NewspaperCutting | null => {
  const cuttings = getAllNewspaperCuttings();
  return cuttings.find(cutting => cutting.id === id) || null;
};

export const createNewspaperCutting = (cuttingData: CreateNewspaperCutting): NewspaperCutting => {
  ensureDataDirectory();
  const cuttings = getAllNewspaperCuttings();
  
  const newCutting: NewspaperCutting = {
    ...cuttingData,
    id: generateId(),
    category: cuttingData.category || '',
    description: cuttingData.description || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  cuttings.push(newCutting);
  fs.writeFileSync(NEWSPAPER_CUTTING_DATA_PATH, JSON.stringify(cuttings, null, 2));
  
  return newCutting;
};

export const updateNewspaperCutting = (updateData: UpdateNewspaperCutting): NewspaperCutting | null => {
  try {
    ensureDataDirectory();
    const cuttings = getAllNewspaperCuttings();
    const index = cuttings.findIndex(cutting => cutting.id === updateData.id);
    
    if (index === -1) {
      console.log(`Newspaper cutting with ID ${updateData.id} not found for update`);
      return null;
    }
    
    const updatedCutting: NewspaperCutting = {
      ...cuttings[index],
      ...updateData,
      category: updateData.category || cuttings[index].category || '',
      description: updateData.description || cuttings[index].description || '',
      updatedAt: new Date().toISOString(),
    };
    
    cuttings[index] = updatedCutting;
    fs.writeFileSync(NEWSPAPER_CUTTING_DATA_PATH, JSON.stringify(cuttings, null, 2));
    
    return updatedCutting;
  } catch (error) {
    console.error('Error updating newspaper cutting:', error);
    return null;
  }
};

export const deleteNewspaperCutting = (id: string): boolean => {
  ensureDataDirectory();
  const cuttings = getAllNewspaperCuttings();
  console.log(`Attempting to delete newspaper cutting with ID: ${id}`);
  console.log(`Current newspaper cuttings:`, cuttings.map(c => c.id));
  
  const filteredCuttings = cuttings.filter(cutting => cutting.id !== id);
  
  if (filteredCuttings.length === cuttings.length) {
    console.log(`Newspaper cutting with ID ${id} not found`);
    return false;
  }
  
  fs.writeFileSync(NEWSPAPER_CUTTING_DATA_PATH, JSON.stringify(filteredCuttings, null, 2));
  console.log(`Newspaper cutting with ID ${id} deleted successfully`);
  return true;
};

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};