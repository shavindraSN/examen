export class CustomDateTime {
    hours: number;
    minutes: number;
    seconds: number;
    formattedString: string;
    

    setFormattedString() {
        this.formattedString = this.hours + ':' + this.minutes + ':' + this.seconds;
    }
    checkTimeout():boolean {
        if(this.hours == 0 && this.minutes == 0 && this.seconds == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}