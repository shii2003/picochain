import * as crypto from 'crypto';

export class CryptoUtils {

    static generateKeyPair(): { publicKey: string, privateKey: string } {
        const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem'
            }
        });

        return { publicKey, privateKey };
    }
    static createHash(data: string): string {

        return crypto.createHash('sha256').update(data).digest('hex');
    }

    static signData(data: string, privateKey: string): string {
        const sign = crypto.createSign('SHA256');
        sign.update(data);
        sign.end();
        return sign.sign(privateKey, 'hex');
    }

    static verifySignature(data: string, signature: string, publicKey: string): boolean {
        try {
            const verify = crypto.createVerify('SHA256');
            verify.update(data);
            verify.end();
            return verify.verify(publicKey, signature, 'hex');
        } catch (error) {
            return false;
        }
    }
}