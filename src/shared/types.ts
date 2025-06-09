export type Url = {
  expiresAt: string;
  originalUrl: string;
  shortUrl: string;
  id: number;
  createdAt: string;
};

export type Click = {
  ipAddress: string;
  shortUrl: string;
  id: string;
  clickedAt: string;
};

export type ErrorResponse = {
  error: string;
  details: string;
};
