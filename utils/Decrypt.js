import crypto from 'crypto';

export const decrypt = (encryptedCode) => {

    if (!encryptedCode) {
        return null
    }
    const decipher = crypto.Decipher('aes-256-cbc', "Nipuna2K24");
    let decrypted = decipher.update(encryptedCode, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
  };
