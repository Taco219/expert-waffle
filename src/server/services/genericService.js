// export const stringify = async (obj) => {
//     try {
//         console.log('t ' + typeof obj);
//         if(typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean'){
//             console.log('t ' );
//
//             return obj.toString();
//         }
//         else {
//             let keys = Object.keys(obj);
//             keys.sort();
//
//             let str = '';
//             for (let i = 0; i < keys.length; i++) {
//                 let key = keys[i];
//                 let type = getType(obj[key]);
//
//                 if (type === 'object') {
//                     str += '|' + key + ':' + stringify(obj[key]) + '|';
//                 } else if (type === 'array') {
//                     let elements = [];
//                     for (let j = 0; j < obj[key].length; j++) {
//                         let s = stringify(obj[key][j]);
//                         if (s) {
//                             elements.push(s);
//                         }
//                     }
//                     if (elements.length > 0) {
//                         str += key + ':[' + elements.join(',') + ']';
//                     }
//                 } else if (type === 'string' || type === 'number' || type === 'boolean') {
//                     str += '|' + key + ':' + obj[key] + '|';
//                 }
//             }
//
//             return str;
//         }
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// };

const getType = (obj) => {
    if (typeof obj === 'object') {
        if (Array.isArray(obj) && obj.length > 0) {
            return 'array';
        } else {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return 'object';
                }
            }
            return null;
        }
    } else {
        return (typeof obj);
    }
};