import * as File from './file.service'

export async function renameFile(name, item, path) {
    const pathModule = require('path')

    const oldPath = pathModule.join(path, item)

    const newName = (item.isDirectory) ? name : name
    const newPath = pathModule.join(path, newName)

    const res = await File.renameFile(oldPath, newPath)

    return res
}

export async function createFile(fileName, path) {
    const pathModule = require('path')

    const filePath = pathModule.join(path, fileName)

    if (await File.fileExists(filePath)) {
        return { sucess: false, error: 'File already exists' }
    }

    const res = await File.createFile(filePath, '')

    return res
}

export async function moveFile(destinationPath, sourcePath) {
    const res = await File.moveFile(destinationPath, sourcePath)

    return res
}


export async function createFolder(folderName, path) {
    const pathModule = require('path')

    const folderPath = pathModule.join(path, folderName)

    if (await File.fileExists(folderPath)) {
        return { sucess: false, error: 'Folder already exists' }
    }

    const res = await File.createFolder(folderPath)

    return res
}

export async function deleteFile(item, path) {
    const pathModule = require('path')

    const filePath = pathModule.join(path, item)

    const res = await File.deleteFile(filePath)

    if(!res.success){
        return res
    }

    return res
}

export async function deleteFolder(item, path) {
    const pathModule = require('path')

    const folderPath = pathModule.join(path, item)

    const res = await File.deleteFolder(folderPath)
    
    return res
}