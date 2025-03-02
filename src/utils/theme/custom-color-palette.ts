import { defineSemanticTokens, defineTokens } from '@pandacss/dev';

export const emerald = {
    name: 'emerald',
    tokens: defineTokens.colors({
        light: {
            '1': { value: '#FBFDFC' },
            '2': { value: '#F7F9F8' },
            '3': { value: '#EEF1F0' },
            '4': { value: '#E6E9E8' },
            '5': { value: '#DFE2E0' },
            '6': { value: '#D7DAD8' },
            '7': { value: '#CCCFCD' },
            '8': { value: '#B8BCBA' },
            '9': { value: '#181F1C' },
            '10': { value: '#2E3532' },
            '11': { value: '#606562' },
            '12': { value: '#1A211E' }
        },
        dark: {
            '1': { value: '#0D1210' },
            '2': { value: '#141B18' },
            '3': { value: '#1F2A25' },
            '4': { value: '#2A3530' },
            '5': { value: '#35413C' },
            '6': { value: '#424E49' },
            '7': { value: '#525E59' },
            '8': { value: '#65726C' },
            '9': { value: '#84928C' },
            '10': { value: '#788680' },
            '11': { value: '#B0BEB7' },
            '12': { value: '#D5E3DD' }
        }
    }),

    semanticTokens: defineSemanticTokens.colors({
        '1': { value: { _light: '{colors.emerald.light.1}', _dark: '{colors.emerald.dark.1}' } },
        '2': { value: { _light: '{colors.emerald.light.2}', _dark: '{colors.emerald.dark.2}' } },
        '3': { value: { _light: '{colors.emerald.light.3}', _dark: '{colors.emerald.dark.3}' } },
        '4': { value: { _light: '{colors.emerald.light.4}', _dark: '{colors.emerald.dark.4}' } },
        '5': { value: { _light: '{colors.emerald.light.5}', _dark: '{colors.emerald.dark.5}' } },
        '6': { value: { _light: '{colors.emerald.light.6}', _dark: '{colors.emerald.dark.6}' } },
        '7': { value: { _light: '{colors.emerald.light.7}', _dark: '{colors.emerald.dark.7}' } },
        '8': { value: { _light: '{colors.emerald.light.8}', _dark: '{colors.emerald.dark.8}' } },
        '9': { value: { _light: '{colors.emerald.light.9}', _dark: '{colors.emerald.dark.9}' } },
        '10': { value: { _light: '{colors.emerald.light.10}', _dark: '{colors.emerald.dark.10}' } },
        '11': { value: { _light: '{colors.emerald.light.11}', _dark: '{colors.emerald.dark.11}' } },
        '12': { value: { _light: '{colors.emerald.light.12}', _dark: '{colors.emerald.dark.12}' } },

        default: {
            value: {
                _light: '{colors.emerald.light.9}',
                _dark: '{colors.emerald.dark.9}'
            }
        },
        emphasized: {
            value: {
                _light: '{colors.emerald.light.10}',
                _dark: '{colors.emerald.dark.10}'
            }
        },
        fg: {
            value: {
                _light: '#EAEAEA',
                _dark: '#EAEAEA'
            }
        },
        text: {
            value: {
                _light: '{colors.emerald.light.11}',
                _dark: '{colors.emerald.dark.11}'
            }
        }
    })
};

export const beige = {
    name: 'beige',
    tokens: defineTokens.colors({
        light: {
            '1': { value: '#FDFDFD' },
            '2': { value: '#F9F9F9' },
            '3': { value: '#F0F0F0' },
            '4': { value: '#E8E8E8' },
            '5': { value: '#E1E1E1' },
            '6': { value: '#D9D9D9' },
            '7': { value: '#CECECE' },
            '8': { value: '#BBB' },
            '9': { value: '#8C8C8C' },
            '10': { value: '#828282' },
            '11': { value: '#626262' },
            '12': { value: '#202020' }
        },
        dark: {
            '1': { value: '#111' },
            '2': { value: '#181818' },
            '3': { value: '#222' },
            '4': { value: '#292929' },
            '5': { value: '#303030' },
            '6': { value: '#3A3A3A' },
            '7': { value: '#474747' },
            '8': { value: '#606060' },
            '9': { value: '#6D6D6D' },
            '10': { value: '#7A7A7A' },
            '11': { value: '#B3B3B3' },
            '12': { value: '#EDEDED' }
        }
    }),

    semanticTokens: defineSemanticTokens.colors({
        '1': { value: { _light: '{colors.beige.light.1}', _dark: '{colors.beige.dark.1}' } },
        '2': { value: { _light: '{colors.beige.light.2}', _dark: '{colors.beige.dark.2}' } },
        '3': { value: { _light: '{colors.beige.light.3}', _dark: '{colors.beige.dark.3}' } },
        '4': { value: { _light: '{colors.beige.light.4}', _dark: '{colors.beige.dark.4}' } },
        '5': { value: { _light: '{colors.beige.light.5}', _dark: '{colors.beige.dark.5}' } },
        '6': { value: { _light: '{colors.beige.light.6}', _dark: '{colors.beige.dark.6}' } },
        '7': { value: { _light: '{colors.beige.light.7}', _dark: '{colors.beige.dark.7}' } },
        '8': { value: { _light: '{colors.beige.light.8}', _dark: '{colors.beige.dark.8}' } },
        '9': { value: { _light: '{colors.beige.light.9}', _dark: '{colors.beige.dark.9}' } },
        '10': { value: { _light: '{colors.beige.light.10}', _dark: '{colors.beige.dark.10}' } },
        '11': { value: { _light: '{colors.beige.light.11}', _dark: '{colors.beige.dark.11}' } },
        '12': { value: { _light: '{colors.beige.light.12}', _dark: '{colors.beige.dark.12}' } },

        default: {
            value: {
                _light: '{colors.beige.light.9}',
                _dark: '{colors.beige.dark.9}'
            }
        },
        emphasized: {
            value: {
                _light: '{colors.beige.light.10}',
                _dark: '{colors.beige.dark.10}'
            }
        },
        fg: {
            value: {
                _light: 'white',
                _dark: 'white'
            }
        },
        text: {
            value: {
                _light: '{colors.beige.light.11}',
                _dark: '{colors.beige.dark.11}'
            }
        }
    })
};
