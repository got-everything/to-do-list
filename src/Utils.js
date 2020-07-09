export default {
    logMounting: (text) => {
        console.log('\x1b[31m%s\x1b[0m', text);
    },
    logUpdating: (text) => {
        console.log('\x1b[32m%s\x1b[0m', text);
    },
    logUnmounting: (text) => {
        console.log('\x1b[34m%s\x1b[0m', text);
    }
}