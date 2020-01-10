import AT from '../etc/action-type.enum.js';
import CC from '../etc/color-code.enum.js';


const ATS = Object.freeze([AT.notifyInfo, AT.notifyDanger]);
const CCS = Object.freeze({
    [AT.notifyInfo]:   CC.info,
    [AT.notifyDanger]: CC.danger,
});


export default (

    (state, {type, load}) => {

        if (ATS.includes(type)) {
            const color = CCS[type] ?? '';
            const message = load ?? `*** unknown ${color ?? type} ***`;
            return [...state, {color, message}];
        }

        if (AT.clearNotifications === type) {
            return [];
        }

        if (AT.trimNotifications === type) {
            return state
                ?.filter(
                    ({color}) => CC.danger === color || CC.warning === color
                ) ?? [];
        }

        return state ?? [];
    }

);
