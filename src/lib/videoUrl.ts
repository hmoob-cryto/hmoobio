/**
 * Normalize video URLs from various sources into a directly playable URL.
 * Supports Google Drive share links and converts them to a streaming URL.
 */
export function normalizeVideoUrl(url: string): string {
  if (!url) return url;
  const trimmed = url.trim();

  // Google Drive patterns:
  // https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // https://drive.google.com/open?id=FILE_ID
  // https://drive.google.com/uc?id=FILE_ID
  const driveFileMatch = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  const driveOpenMatch = trimmed.match(/drive\.google\.com\/(?:open|uc)\?(?:.*&)?id=([a-zA-Z0-9_-]+)/);
  const fileId = driveFileMatch?.[1] || driveOpenMatch?.[1];

  if (fileId) {
    // Direct streaming endpoint that works in <video> tags
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }

  return trimmed;
}

export function isGoogleDriveUrl(url: string): boolean {
  return /drive\.google\.com/.test(url || "");
}
