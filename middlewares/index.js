console.info('Middlewares loaded');
module.exports = function (req,res,next){
    console.log(new Date(), req.method, req.url);
    next();
}
