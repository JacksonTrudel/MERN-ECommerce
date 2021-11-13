// Validates the password on login attempts
/* Must convert to ts
export function validPassword(password, hash, salt) {
        var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
        return hash === hashVerify;
    }


export function genPassword(password) {
        var salt = crypto.randomBytes(32).toString('hex');
        var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

        return {
            salt: salt,
            hash: genHash
        };
    }
};*/