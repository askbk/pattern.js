let Pattern = {
    render : function (template, data) {
        let result = "";

        for (var row of data) {
            let temp = template;
            let properties = Object.keys(row);

            for (var property of properties) {
                let replace = "{{" + property + "}}";
                let regexp = new RegExp(replace, "g");
                temp = temp.replace(regexp, row[property]);
            }

            result += temp + "\n";
        }

        return result;
    }
};
