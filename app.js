
const URL = "https://cdn.contentful.com/spaces/28xx4dkjsh9g/environments/master/entries?access_token=XNZPJ3yCNcRaclwCNKJlZa7voaiR9CUVsixP44EaKes&content_type=triviaQ"
$.ajax(URL)
.then((data) => {
    console.log(data)
})