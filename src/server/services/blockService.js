import * as hash from './hashService';
import { blockModel as Block }from '../models/blockModel';
import errNo from '../enumerators/errorEnum'


export const findBlock = async (input) => {
    let blockFound = false;
    let blockHash = '';

    while (!blockFound){
        // generate hash
        blockHash = await hash.hash(input);

        // check hash
        if(blockHash.substring(0, 1).toString() === 'a'){
            // hash correct
            blockFound = true;
        }
        else {
            // repeat
            input++;
        }
    }

    return { blockHash: blockHash, input: input };
};

export const registerBlock = async (blockHash, input) => {
    try {
        // create db block
        const nBlock = new Block({
            input: input,
            block: blockHash.toString()
        });

        // try save block
        await nBlock.save();

        // saved successfully
        return { success: true, block: nBlock}
    }
    catch (err) {
        // block already exists
        if(err.code === errNo.duplicateKey){
            return { success: false };
        }
        // other error
        else {
            console.error('register block err');
            console.error(err);
            throw err;
        }
    }
};

export const getLatestInput = async () => {
    const latestBlock = await Block.findOne({}).sort('-input').exec();

    if(!latestBlock){
        return 0;
    }
    else {
        return latestBlock.input;
    }
};