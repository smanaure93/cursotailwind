module.exports = {
    theme: {
        extend: {
            screens: {
                "xs": { "max": "768px" }
            },
            boxShadow: {
                'header3D': "0px 1px 0px #393D3F, 1px 2px 0px #393D3F, 2px 3px 0px #393D3F, 3px 4px 0px #393D3F"
            },
            backgroundImage: {
                'body-pattern': "url('../img/pattern.png')",
                'banner': "url('../img/bakbaner.png')"
            },
            backgroundPosition: {
                "banner-position": "-300px -200px"
            },
            colors: {
                "custom-light-blue": "#37bcf9",
                "custom-dark-blue": "#0370b9"
            },
            animation: {
                "spin-slow": "spin 2s linear infinite",
                "from-below": "fromBelow 500ms linear",
                "from-right": "fromRight 500ms linear",
                "bg-banner": "bgBanner 2s linear",
                "text-banner": "trailerEffect 2s linear",
                "card-icon": "cardIcon 300ms linear",
                "card-category": "cardCategory 400ms linear",
                "card-description": "cardDescription 400ms linear"
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
                },
                bgBanner: {
                    '0%': { 'background-position': '0px 0px' },
                    '100%': { 'background-position': '-300px -200px' },
                },
                trailerEffect: {
                    '0%': { transform: 'translateX(-600%) scale(5,5)', opacity: 1 },
                    '50%': { transform: 'translateX(600%) scale(5,5)', opacity: 1 },
                    '75%': { transform: 'translateX(-600%) scale(5,5)', 'text-shadow': 'none', color: 'transparent', opacity: 0 },
                    '100%': { transform: 'translateX(0%) scale(1,1)', 'text-shadow': '2px 2 px 1px black', color: 'white', opacity: 1 },
                },
                cardIcon: {
                    'from': { transform: 'translateY(-200%)' },
                    'to': { transform: 'translateY(25%)' }
                },
                cardCategory: {
                    'from': { transform: 'translateX(-200%)' },
                    'to': { transform: 'translateX(0%)' }
                },
                cardDescription: {
                    'from': { transform: 'translateY(200%)' },
                    'to': { transform: 'translateY(0%)' }
                }
            }
        },
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
        fontSize: ['responsive', 'hover', 'group-hover'],
        transform: ['responsive', 'hover', 'group-hover'],
        scale: ['responsive', 'hover', 'group-hover'],
        padding: ['responsive', 'hover', 'group-hover'],
    }
}