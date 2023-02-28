// import body , param , query from express-validator
const {body,param,query}=require("express-validator");


//exports post validator 

exports.postValidator=[
    body('ID').isNumeric().withMessage('ID must be number'),
    body("title").isString().withMessage("title must be string"),
    body("auther").isString().withMessage("auther must be string"),
    body("publisher").isString().withMessage("publisher must be string"),
    body("PublishingDate").isDate().withMessage("PublishingDate must be date"),
    body("category").isString().withMessage("category must be string"),
    body("Edition").isString().withMessage("publisher is required"),
    body("pages").isNumeric().withMessage("pages must be number"),
    body("NoOfCopies").isNumeric().withMessage("NoOfCopies must be number"),
    body("Avilable").isNumeric().withMessage("Avilable must be number"),
    body("shelfNo").isNumeric().withMessage("shelfNo must be number"),
]

//exports get book by id validator

exports.getBookByIdValidator=[
    param("id").isNumeric().withMessage("id must be number")
]

//exports get book by category validator

exports.getBookByCategoryValidator=[
    param("category").isString().withMessage("category must be string")
]

//exports get book by auther validator

exports.getBookByAutherValidator=[
    param("auther").isString().withMessage("auther must be string")
]

//exports get book by title validator

exports.getBookByTitleValidator=[
    param("title").isString().withMessage("title must be string")
]

//exports get book by publisher validator

exports.getBookByPublisherValidator=[
    param("publisher").isString().withMessage("publisher must be string")
]

//exports update book by id validator

exports.updateBookByIdValidator=[
    param("id").isNumeric().withMessage("id must be number"),
    body('ID').isNumeric().withMessage('ID must be number'),
    body("title").isString().withMessage("title must be string"),
    body("auther").isString().withMessage("auther must be string"),
    body("publisher").isString().withMessage("publisher must be string"),
    body("PublishingDate").isDate().withMessage("PublishingDate must be date"),
    body("category").isString().withMessage("category must be string"),
    body("Edition").isString().withMessage("publisher is required"),
    body("pages").isNumeric().withMessage("pages must be number"),
    body("NoOfCopies").isNumeric().withMessage("NoOfCopies must be number"),
    body("Avilable").isNumeric().withMessage("Avilable must be number"),
    body("shelfNo").isNumeric().withMessage("shelfNo must be number"),
]

//exports delete book by id validator

exports.deleteBookByIdValidator=[
    param("id").isNumeric().withMessage("id must be number")
]




