export class TimeUtils {
    date:Date;

    constructor(date:Date = new Date()) {
        this.date = date;
    }

    //https://stackoverflow.com/questions/24500375/get-clients-gmt-offset-in-javascript
    static getTimezoneOffset() {
        function z(n:any){return (n<10? '0' : '') + n}
        var offset = new Date().getTimezoneOffset();
        var sign = offset < 0? '+' : '-';
        offset = Math.abs(offset);
        return sign + z(offset/60 | 0) + z(offset%60);
    }

    formatTime():string {
        return (this.date.getHours()>12? (this.date.getHours()%12).toString(): this.date.getHours()) + ':' + this.date.getMinutes().toString().padStart(2, "0");
      }
}
