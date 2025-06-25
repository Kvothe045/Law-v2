// lib/video.ts
import fs from 'fs';
import path from 'path';
import { VideoPost, CreateVideoPost, UpdateVideoPost } from '@/types/video';

const VIDEO_DATA_PATH = path.join(process.cwd(), 'data', 'videos.json');

// Ensure data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  if (!fs.existsSync(VIDEO_DATA_PATH)) {
    fs.writeFileSync(VIDEO_DATA_PATH, JSON.stringify([], null, 2));
  }
};

export const getAllVideos = (): VideoPost[] => {
  try {
    ensureDataDirectory();
    const data = fs.readFileSync(VIDEO_DATA_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading videos:', error);
    return [];
  }
};

export const getVideoById = (id: string): VideoPost | null => {
  const videos = getAllVideos();
  return videos.find(video => video.id === id) || null;
};

export const createVideo = (videoData: CreateVideoPost): VideoPost => {
  ensureDataDirectory();
  const videos = getAllVideos();
  
  const newVideo: VideoPost = {
    ...videoData,
    id: generateId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  videos.push(newVideo);
  fs.writeFileSync(VIDEO_DATA_PATH, JSON.stringify(videos, null, 2));
  
  return newVideo;
};

export const updateVideo = (updateData: UpdateVideoPost): VideoPost | null => {
  try {
    ensureDataDirectory();
    const videos = getAllVideos();
    const index = videos.findIndex(video => video.id === updateData.id);
    
    if (index === -1) {
      console.log(`Video with ID ${updateData.id} not found for update`);
      return null;
    }
    
    const updatedVideo: VideoPost = {
      ...videos[index],
      ...updateData,
      updatedAt: new Date().toISOString(),
    };
    
    videos[index] = updatedVideo;
    fs.writeFileSync(VIDEO_DATA_PATH, JSON.stringify(videos, null, 2));
    
    return updatedVideo;
  } catch (error) {
    console.error('Error updating video:', error);
    return null;
  }
};

export const deleteVideo = (id: string): boolean => {
  ensureDataDirectory();
  const videos = getAllVideos();
  console.log(`Attempting to delete video with ID: ${id}`);
  console.log(`Current videos:`, videos.map(v => v.id));
  
  const filteredVideos = videos.filter(video => video.id !== id);
  
  if (filteredVideos.length === videos.length) {
    console.log(`Video with ID ${id} not found`);
    return false;
  }
  
  fs.writeFileSync(VIDEO_DATA_PATH, JSON.stringify(filteredVideos, null, 2));
  console.log(`Video with ID ${id} deleted successfully`);
  return true;
};

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};