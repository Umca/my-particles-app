export const uiConfig = {
    general: {
        lifetime: {
            children: [
                {
                    label: 'min',
                    element: 'input',
                    type: 'number',
                    defaultValue: 4,
                },
                {
                    label: 'max',
                    element: 'input',
                    type: 'number',
                    defaultValue: 4,
                },
            ],
        },
        frequency: {
            children: [
                {
                    label: '',
                    element: 'input',
                    type: 'number',
                    defaultValue: 0.016,
                    withLabel: false,
                },
            ],
        },
        spawnChance: {
            children: [
                {
                    label: '',
                    element: 'input',
                    type: 'number',
                    defaultValue: 1,
                },
            ],
        },
        emitterLifetime: {
            children: [
                {
                    label: '',
                    element: 'input',
                    type: 'number',
                    defaultValue: 0,
                },
            ],
        },
        maxParticles: {
            children: [
                {
                    label: '',
                    element: 'input',
                    type: 'number',
                    defaultValue: 500,
                },
            ],
        },
        position: {
            children: [
                {
                    label: 'x',
                    element: 'input',
                    type: 'number',
                    defaultValue: 0,
                },
                {
                    label: 'y',
                    element: 'input',
                    type: 'number',
                    defaultValue: 0,
                },
            ],
        },
        addAtBack: {
            children: [
                {
                    label: '',
                    element: 'input',
                    type: 'checkbox',
                    defaultValue: false,
                },
            ],
        },
    },
    behaviours: {
        alpha: {
            children: [
                {
                    additable: true,
                    children: [
                        {
                            label: 'time',
                            element: 'input',
                            type: 'number',
                            defaultValue: 0,
                        },

                        {
                            label: 'value',
                            element: 'input',
                            type: 'number',
                            defaultValue: 1,
                        },
                    ],
                },
            ],
        },

        // speed: {
        //     children: [
        //         {
        //             additable: true,
        //             children: [
        //                 {
        //                     id: 'time',
        //                     element: 'input',
        //                     type: 'number',
        //                     defaultValue: 0,
        //                 },

        //                 {
        //                     id: 'value',
        //                     element: 'input',
        //                     type: 'number',
        //                     defaultValue: 1,
        //                 },
        //             ],
        //         },
        //         {
        //             label: 'minMult',
        //             element: 'input',
        //             type: 'number',
        //             defaultValue: 1,
        //             min: 0,
        //             max: 1,
        //         },
        //     ],
        // },
        // scale: {
        //     children: [
        //         {
        //             additable: true,
        //             children: [
        //                 {
        //                     id: 'time',
        //                     element: 'input',
        //                     type: 'number',
        //                     defaultValue: 0,
        //                 },

        //                 {
        //                     id: 'value',
        //                     element: 'input',
        //                     type: 'number',
        //                     defaultValue: 0.25,
        //                 },
        //             ],
        //         },
        //         {
        //             id: 'minMult',
        //             element: 'input',
        //             type: 'number',
        //             defaultValue: 0.5,
        //             min: 0,
        //             max: 1,
        //         },
        //     ],
        //     // isStepped: true if list.length > 1
        // },

        // rotation: {
        //     children: [
        //         {
        //             label: 'accel',
        //             element: 'input',
        //             type: 'number',
        //             defaultValue: 0,
        //             min: 0,
        //             max: 1,
        //         },
        //         {
        //             label: 'minSpeed',
        //             element: 'input',
        //             type: 'number',
        //             defaultValue: 0,
        //             min: 0,
        //             max: 1,
        //         },
        //         {
        //             label: 'maxSpeed',
        //             element: 'input',
        //             type: 'number',
        //             defaultValue: 0,
        //             min: 0,
        //             max: 1,
        //         },
        //         {
        //             label: 'minStart',
        //             element: 'input',
        //             type: 'number',
        //             defaultValue: 0,
        //             min: 0,
        //             max: 1,
        //         },
        //         {
        //             label: 'maxStart',
        //             element: 'input',
        //             type: 'number',
        //             defaultValue: 0,
        //             min: 0,
        //             max: 1,
        //         },
        //     ],
        // },

        //spawn shape , if nothis delected => spawn Point
    },
};
