
import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import AppComponent from './AppComponent';


/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent 
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
document.head.appendChild(link);
export default function main({ portletNamespace, contextPath, portletElementId }) {
    console.log("Main function called", { portletNamespace, contextPath, portletElementId });
    ReactDOM.render(
        <AppComponent
            portletNamespace={portletNamespace}
            contextPath={contextPath}
            portletElementId={portletElementId}
        />,
        document.getElementById(portletElementId)
    );
}