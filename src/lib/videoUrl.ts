/**
 * Utilities for handling video URLs from various sources.
 * Google Drive blocks <video> tag streaming, so we detect Drive URLs and
 * render them via <iframe> using the /preview endpoint instead.
 */

export function getDriveFileId(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();
  const m1 = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  const m2 = trimmed.match(/drive\.google\.com\/(?:open|uc)\?(?:.*&)?id=([a-zA-Z0-9_-]+)/);
  return m1?.[1] || m2?.[1] || null;
}

export function isGoogleDriveUrl(url: string): boolean {
  return !!getDriveFileId(url);
}

/**
 * Returns a Google Drive preview URL suitable for use in an <iframe>.
 */
export function getDrivePreviewUrl(url: string): string | null {
  const id = getDriveFileId(url);
  return id ? `https://drive.google.com/file/d/${id}/preview` : null;
}

/**
 * Normalize URL for use in a <video> tag. For non-Drive URLs returns as-is.
 * For Drive URLs returns the (best-effort) direct stream URL — but prefer
 * using getDrivePreviewUrl + <iframe> for Drive content.
 */
export function normalizeVideoUrl(url: string): string {
  if (!url) return url;
  const id = getDriveFileId(url);
  if (id) return `https://drive.google.com/uc?export=download&id=${id}`;
  return url.trim();
}
