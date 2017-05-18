import * as appTypes from '../constants/app';

export const menu = (data) => {
    return {
        type: appTypes.MENU_UPDATE,
        data
    }
}