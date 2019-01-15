export class Pattern {
    constructor() {}

    render(template, data) {
        let result = "";

        for (let row of data) {
            let temp = template;
            for (let i = 0, keys = Object.keys(row); i < keys.length; i++) {
                let replace = "{{" + keys[i] + "}}",
                    regexp = new RegExp("{{" + keys[i] + "}}", "g");
                temp = temp.replace(regexp, row[keys[i]]);
            }

            result += temp + "\n";
        }

        return result;
    }
}
