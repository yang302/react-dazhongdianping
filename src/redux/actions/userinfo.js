import * as userTypes from '../constants/userinfo';

export const update = (data) => {
    return {
        type: userTypes.USERINFO_UPDATE,
        data
    }
}