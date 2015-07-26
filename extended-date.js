Date.prototype.isToday = function() {
    var today = new Date();

    return today.getYear() == this.getYear() && today.getMonth() == this.getMonth() && today.getDate() == this.getDate();
}

Date.prototype.isThisYear = function() {
    var today = new Date();

    return today.getYear() == this.getYear();
}

Date.prototype.getMonthInWords = function() {
    return ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"][this.getMonth()];
}

Date.prototype.prettyPrint = function() {
    if (this.isToday())
        return "" + this.getHours() + ":" + this.getMinutes();
    else if (this.isThisYear())
        return "" + this.getMonthInWords() + " " + this.getDate();
    else
        return "" + this.getYear() + " " + this.getMonthInWords() + " " + this.getDate();
}
