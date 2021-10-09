class NewController{
    //GET /news
    index(rep,res){
        res.render('news')
    }
    slug(rep,res){
        res.send('DETAIL SLUG ~~~')
    }
}
module.exports = new NewController