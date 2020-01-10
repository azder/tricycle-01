import cnames from 'classnames';
import React from 'react';

import ProspectsTitle from '../page/prospects-title.container.jsx';
import Prospects from '../page/prospects.container.jsx';

import AdvancedSearch from '../search/advanced-search/advanced-search.component.jsx';
import SimpleSearch from '../search/simple-search/simple-search.container.js';

import CN from './app.module.scss';
import Notification from './notification.container.js';


const App = (

    () => (
        <div className={cnames(CN.main, 'is-marginless')}>

            <Notification/>

            <nav className="navbar is-fixed-top">
                <div className="navbar-menu is-active">
                    <div className="navbar-item is-expanded">
                        <SimpleSearch placeholder="Search"/>
                    </div>
                </div>
            </nav>

            <section className={cnames(CN.page, 'section')}>
                <AdvancedSearch/>
            </section>

            <section className="container section">
                <ProspectsTitle/>
                <Prospects/>
            </section>

        </div>
    )


);

export default App;
