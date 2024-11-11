import { Stream, StreamAnalytics } from '../types/video';

export const startStream = async (streamId: string): Promise<Stream> => {
  const response = await fetch(`/api/streams/${streamId}/start`, {
    method: 'POST',
  });
  if (!response.ok) throw new Error('Failed to start stream');
  return response.json();
};

export const endStream = async (streamId: string): Promise<void> => {
  const response = await fetch(`/api/streams/${streamId}/end`, {
    method: 'POST',
  });
  if (!response.ok) throw new Error('Failed to end stream');
};

export const getStreamAnalytics = async (streamId: string): Promise<StreamAnalytics> => {
  const response = await fetch(`/api/streams/${streamId}/analytics`);
  if (!response.ok) throw new Error('Failed to fetch stream analytics');
  return response.json();
};

export const updateStreamSettings = async (
  streamId: string,
  settings: Partial<Stream>
): Promise<Stream> => {
  const response = await fetch(`/api/streams/${streamId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(settings),
  });
  if (!response.ok) throw new Error('Failed to update stream settings');
  return response.json();
};