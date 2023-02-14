setTimeout(() => {
    throw new Error('Error thrown from error.js')
    }, 300)

process.on('uncaughtException',()=>{

})

process.on('unhandledRejection',()=>{
    
})