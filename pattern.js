let Pattern = {
    render : function (template, data) {
        let result = "";

        for (let row of data) {
            let temp = template;

            Object.keys(row).forEach((property, index) => {
                let replace = "{{" + property + "}}";
                let regexp = new RegExp("{{" + property + "}}", "g");
                temp = temp.replace(regexp, row[property]);
            });

            result += temp + "\n";
        }

        return result;
    }
};
