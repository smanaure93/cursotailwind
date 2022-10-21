module.exports = {
    theme: {
        extend: {
            screens: {
                "xs": {"max": "768px"}
            },
            backgroundImage: {
                'body-pattern': "url('../img/pattern.png')"
            },
            colors: {
                "custom-light-blue": "#37bcf9",
                "custom-dark-blue": "#0370b9"
            },
            animation: {
                "spin-slow": "spin 2s linear infinite",
                "from-below": "fromBelow 500ms linear",
                "from-right": "fromRight 500ms linear"
            },
            keyframes: {
                fromBelow: {
                    '0%': { transform: 'translateY(0%)' },
                    '50%': { transform: 'translateY(200%)' },
                    '100%': { transform: 'translateY(0%)' },
                },
                fromRight: {
                    '0%': { transform: 'translateX(0%)' },
                    '50%': { transform: 'translateX(200%)' },
                    '100%': { transform: 'translateX(0%)' },
                }
            }
        },
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
    }
}