import * as blockService from '../services/blockService';

export const mine = async () => {
    try {
        let input = await blockService.getLatestInput() + 1;
        // let input = 0;

        while (true) {
            // find nearest block
            const block = await blockService.findBlock(input);

            // try register
            const blockRegistered = await blockService.registerBlock(block.blockHash, block.input);

            // register success
            if (blockRegistered.success){
                return blockRegistered;
            }
            // block is taken
            else {
                input++;
            }
        }
    }
    catch (err){
        console.error('err mine controller');
        console.error(err);
        throw err;
    }
};
