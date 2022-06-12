module.exports = {
    plugins: [
        { prefixIds: true },
        { removeTitle: true },
        { removeDesc: true },
        { removeViewBox: false },
        { removeDimensions: true },
        { inlineStyles: false },
        { minifyStyles: false },
        { collapseGroups: false },
        {
            removeAttrs: {
                attrs: ['fill', 'opacity'],
            },
        },
    ],
};
