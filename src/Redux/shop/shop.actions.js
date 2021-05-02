import {shopTypes} from './shop.types'

export const updateCollections = collections => ({
    type:shopTypes.UPDATE_COLLECTIONS,
    payload: collections
})