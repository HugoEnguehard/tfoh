import { UploadedFile } from 'express-fileupload';
import * as fs from 'fs';
import * as path from 'path';

export const generatedRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const saveImageProfilePictureFile = async (image: File): Promise<string> => {
  const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];

  if(!allowedMimeTypes.includes(image.type)) throw new Error('Invalid file type. Only PNG, JPG and JPEG are allowed.');

  const randomString = generatedRandomString(32);

  const extension = path.extname(image.name);

  const directoryPath = path.join(__dirname, '../user-images/pp');
  const filePath = path.join(directoryPath, `${randomString}${extension}`);

  if(!fs.existsSync(directoryPath)) fs.mkdirSync(directoryPath, { recursive: true });

  const fileBuffer = await image.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(fileBuffer));

  return `/user-images/pp/${randomString}${extension}`;
}

export const saveImageProfilePicture = async (image: UploadedFile): Promise<string> => {
  const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];

  // Vérifier si le type MIME du fichier est pris en charge
  if (!allowedMimeTypes.includes(image.mimetype)) {
    throw new Error('Invalid file type. Only PNG, JPG and JPEG are allowed.');
  }

  const randomString = generatedRandomString(32);

  // Extraire l'extension du fichier
  const extension = path.extname(image.name);

  const directoryPath = path.join(__dirname, '../user-images/pp');
  const filePath = path.join(directoryPath, `${randomString}${extension}`);

  // Créer le répertoire s'il n'existe pas
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  // Écrire les données du fichier dans le fichier sur le disque
  await image.mv(filePath);

  return `/user-images/pp/${randomString}${extension}`;
}

export const deleteImageProfilePicture = async (imageURI: string): Promise<void> => {
  try {
    const filePath = path.join(__dirname, '..', imageURI);

    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    else throw new Error('File not found.');
  } catch (error: any) {
    throw new Error(`Error while deleting file: ${error.message}`);
  }
}



export const saveImageProfilePictureFromBase64 = async (imageBase64: string): Promise<string> => {
  const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];

  // Extraire le type MIME de l'image à partir de la chaîne base64
  const mimeType = imageBase64.split(';')[0].split(':')[1];

  if (!allowedMimeTypes.includes(mimeType)) {
    throw new Error('Invalid file type. Only PNG, JPG and JPEG are allowed.');
  }

  const randomString = generatedRandomString(32);

  // Déterminer l'extension du fichier en fonction du type MIME
  let extension = '';
  if (mimeType === 'image/png') extension = '.png';
  else if (mimeType === 'image/jpeg' || mimeType === 'image/jpg') extension = '.jpg';

  const directoryPath = path.join(__dirname, '../user-images/pp');
  const filePath = path.join(directoryPath, `${randomString}${extension}`);

  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  // Convertir la chaîne base64 en données binaires
  const imageData = Buffer.from(imageBase64.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  // Écrire les données binaires dans le fichier
  fs.writeFileSync(filePath, imageData);

  return `/user-images/pp/${randomString}${extension}`;
}