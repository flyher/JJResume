export class RichLi {
    ID: number;
    Key: string;
    Value: string;
    Url: string;
}
export class Header {
    ID: number;
    Title: string;
    Logo: string;
    Links:Array<RichLi>;
}