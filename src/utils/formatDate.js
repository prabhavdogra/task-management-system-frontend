const formatDate = (date) => {
    date = date.substring(0, 10)
    let res = new Date( Date.parse(date) );
    res = res.toString()
    res = res.substring(4, 10) + ", " + res.substring(11, 16)
    return res
}

export default formatDate