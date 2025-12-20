import { z } from 'zod';
import { insertVideoSchema, type Video } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  videos: {
    list: {
      method: 'GET' as const,
      path: '/api/videos',
      responses: {
        200: z.array(z.custom<Video>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/videos',
      input: insertVideoSchema,
      responses: {
        201: z.custom<Video>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
