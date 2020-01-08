import classNames from 'classnames';
import React from 'react';

import AdvancedSearch from '../search/advanced-search/advanced-search.component.jsx';
import SimpleSearch from '../search/simple-search/simple-search.container.js';

import ProspectsTitle from '../page/prospects-title.container.jsx';
import Prospects from '../page/prospects.container.jsx';

import CN from './app.module.scss';


const App = (

    () => (
        <div className={classNames(CN.main, 'is-marginless')}>

            <nav className="navbar">
                <div className="navbar-menu is-active">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <SimpleSearch placeholder="Search"/>
                        </div>
                    </div>
                </div>
            </nav>

            <section className={classNames(CN.page, 'section')}>
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
