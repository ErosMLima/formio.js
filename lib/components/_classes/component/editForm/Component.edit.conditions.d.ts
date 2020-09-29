declare var _default: {
    type: string;
    input: boolean;
    label: string;
    key: string;
    inlineEdit: boolean;
    templates: {
        header: string;
        row: string;
    };
    addAnother: string;
    saveRow: string;
    lazyLoad: boolean;
    components: ({
        type: string;
        input: boolean;
        key: string;
        label: string;
        validate: {
            required: boolean;
        };
        allowCalculateOverride?: undefined;
        calculateValue?: undefined;
        hideLabel?: undefined;
        defaultValue?: undefined;
        inline?: undefined;
        values?: undefined;
        inlineEdit?: undefined;
        templates?: undefined;
        addAnother?: undefined;
        saveRow?: undefined;
        components?: undefined;
    } | {
        type: string;
        input: boolean;
        key: string;
        label: string;
        allowCalculateOverride: boolean;
        calculateValue: {
            _camelCase: {
                var: string;
            }[];
        };
        validate: {
            required: boolean;
        };
        hideLabel?: undefined;
        defaultValue?: undefined;
        inline?: undefined;
        values?: undefined;
        inlineEdit?: undefined;
        templates?: undefined;
        addAnother?: undefined;
        saveRow?: undefined;
        components?: undefined;
    } | {
        type: string;
        input: boolean;
        key: string;
        label: string;
        hideLabel: boolean;
        defaultValue: string;
        inline: boolean;
        values: any;
        validate: {
            required: boolean;
        };
        allowCalculateOverride?: undefined;
        calculateValue?: undefined;
        inlineEdit?: undefined;
        templates?: undefined;
        addAnother?: undefined;
        saveRow?: undefined;
        components?: undefined;
    } | {
        type: string;
        input: boolean;
        key: string;
        label: string;
        hideLabel: boolean;
        inlineEdit: boolean;
        templates: {
            header: string;
            row: string;
        };
        addAnother: string;
        saveRow: string;
        components: ({
            type: string;
            input: boolean;
            key: string;
            label: string;
            dataSrc: string;
            data: {
                values: {
                    label: string;
                    value: string;
                }[];
            };
            validate: {
                required: boolean;
            };
            conditional?: undefined;
            lazyLoad?: undefined;
            components?: undefined;
        } | {
            validate: {
                required: boolean;
            };
            conditional: {
                json: {
                    '===': (string | {
                        var: string;
                    })[];
                };
            };
            type: string;
            input: boolean;
            key: string;
            label: string;
            dataSrc: string;
            groupProperty: string;
            dataType: string;
            data: {
                custom(args: any): any;
            };
            valueProperty: string;
            template: string;
            lazyLoad?: undefined;
            components?: undefined;
        } | {
            type: string;
            input: boolean;
            key: string;
            label: string;
            conditional: {
                json: {
                    '===': (string | {
                        var: string;
                    })[];
                };
            };
            dataSrc?: undefined;
            data?: undefined;
            validate?: undefined;
            lazyLoad?: undefined;
            components?: undefined;
        } | {
            type: string;
            input: boolean;
            label: string;
            key: string;
            lazyLoad: boolean;
            components: any[];
            conditional: {
                json: {
                    '===': (string | {
                        var: string;
                    })[];
                };
            };
            dataSrc?: undefined;
            data?: undefined;
            validate?: undefined;
        })[];
        validate?: undefined;
        allowCalculateOverride?: undefined;
        calculateValue?: undefined;
        defaultValue?: undefined;
        inline?: undefined;
        values?: undefined;
    })[];
}[];
export default _default;