const fs = window.require('fs')
const pathModule = window.require('path')
import { getHumanReadableErrorMessage } from '../utils/getHumanReadableErrorMessage';

export const getPath = (path, ...paths) => {
  return pathModule.join(path, ...paths);
};

export const getFileBasename = (path) => {
  return pathModule.basename(path)
}

export const getFilesAndFolders = async (path) => {
  const filesAndFolders = []

  try {
    const files = await fs.promises.readdir(path);
    await Promise.all(files.map(async file => {

      const stats = await fs.promises.stat(`${path}/${file}`);

      filesAndFolders.push({ name: file, isDirectory: stats.isDirectory() })
    }));

    return filesAndFolders
  } catch (err) {
    return [];
  }
}

export const getFileContent = async (path) => {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    return data;
  } catch (error) {
    throw error;
  }
}

export const saveTextInFile = async (path, text) => {
  try {
    await fs.promises.writeFile(path, text, 'utf8');
  } catch (error) {
    throw error;
  }
}

export const createFile = async (path, text) => {
  try {
    await fs.promises.writeFile(path, text);
    return { success: true, error: '' }
  } catch (error) {
    return { success: false, error: getHumanReadableErrorMessage(error) }
  }
}

export const fileExists = async (path) => {
  try {
    await fs.promises.access(path);

    return true;
  } catch (error) {
    return false;
  }
}

export const createFolder = async (path) => {
  try {
    await fs.promises.mkdir(path);

    return { success: true, error: '' }
  } catch (error) {
    return { success: false, error: getErrorMessage(error) }
  }
}

export const getFileLastTimeModified = async (path) => {
  try {
    const stats = await fs.promises.stat(path);
    const mtime = stats.mtime
    const options = { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };

    return mtime.toLocaleString('en-US', options).replace(',', '');

  } catch (err) {
    return ''
  }
}

export const getFirstWordsInFile = async (filePath, nWords) => {
  if (await isDirectory(filePath)) {
    return '...'
  }

  try {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    const words = data.trim().split(/\s+/);
    const firstFourWords = words.slice(0, nWords).join(' ');
    return firstFourWords + '...';
  } catch (err) {
    return ''
  }
}

export async function isDirectory(path) {
  try {
    const stats = await fs.promises.stat(path);
    if (stats.isFile()) {
      return false;
    } else if (stats.isDirectory()) {
      return true;
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      // file or directory does not exist
      return null;
    }
  }
}

export async function renameFile(oldPath, newPath) {
  try {
    await fs.promises.rename(oldPath, newPath);
    return { success: true, error: '' }
  } catch (err) {
    return { success: false, error: getHumanReadableErrorMessage(err) }
  }
}

export async function moveFile(destinationPath, sourcePath) {
  const sourceFile = pathModule.resolve(sourcePath)
  const destinationFile = pathModule.resolve(destinationPath)

  try {
    await fs.promises.rename(sourceFile, destinationFile)
    return { success: true, error: '' }
  } catch (err) {
    return { success: false, error: getHumanReadableErrorMessage(err) }
  }
}

export async function deleteFile(filePath) {
  try {
    await fs.promises.unlink(filePath);
    return { success: true, error: '' }
  } catch (err) {
    return { success: false, error: getHumanReadableErrorMessage(err) }
  }
}

export async function deleteFolder(folderPath) {
  try {
    await fs.promises.rmdir(folderPath);
    return { success: true, error: '' }
  } catch (err) {
    return { success: false, error: getErrorMessage(err) }
  }
}

export function getHomePath() {
  const os = require('os');

  const homePath = pathModule.join(os.homedir());

  return homePath
}