export default Object.freeze({

    simpleSearch:   Symbol('action.search.simple'),
    advancedSearch: Symbol('action.search.advanced'),

    prospectsFound:    Symbol('action.prospects.get'),
    favoritedProspect: Symbol('action.prospect.favorite'),

    notifySuccess: Symbol('action.notify.success'),
    notifyInfo:    Symbol('action.notify.info'),
    notifyWarning: Symbol('action.notify.warning'),
    notifyDanger:  Symbol('action.notify.danger'),

    clearNotifications: Symbol('action.notify.clear'),
    trimNotifications:  Symbol('action.notify.trim'),

});
