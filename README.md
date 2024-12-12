# 1Keeping 📂

A versatile file management platform designed to resolve the limitations of ephemeral file storage in communication tools like LINE. With FileKeeper, you can securely save, organize, and manage files from chat platforms, with advanced analytics and collaboration tools.

---

## Features ✨

- **Automatic File Saving**: The LINE Bot listens for file events and stores them on the server automatically.
- **File Organization**: AI-powered categorization and tagging for efficient file management.
- **Dashboard**: A user-friendly dashboard to monitor file statuses, apply filters, and manage storage.
- **Search and Filtering**: Easily find files by type, sender, date, or tags.
- **Retention Policies**: Customize file retention durations or set permanent storage.
- **AI Features**:
  - Optical Character Recognition (OCR) for extracting text from images.
  - Content recognition and duplicate file detection.
- **Secure Sharing**: Generate secure, shareable links with permissions.
- **Analytics**: Insights into file activity and storage usage.

---

## How It Works 🛠️

1. **Set Up the LINE Bot**:
   - Connect the LINE Bot to your LINE account.
   - Configure the bot to listen to file-sharing events.
2. **Upload to the Server**:
   - Files shared in LINE chats are automatically saved to the platform.
3. **Manage Files via the Dashboard**:
   - Organize, search, and download files from the user-friendly interface.
4. **Advanced Features**:
   - Use AI tools for content recognition and file analysis.
   - Share files securely or collaborate with teams using shared folders.

---

## Installation 🚀

## Prerequisites 🛠️

### Backend
- [Rust](https://www.rust-lang.org/) for high-performance, secure backend development.
- [PostgreSQL](https://www.postgresql.org/) as the primary database.
- S3-compatible storage (e.g., AWS S3, MinIO, Wasabi) for file storage.

### Frontend
- [Remix](https://remix.run/) for the modern, scalable user interface.

### Other Tools
- LINE Developer account for initial bot setup (extendable to other platforms).
- Docker (optional) for containerized deployment.