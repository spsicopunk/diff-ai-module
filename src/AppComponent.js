import React from "react";
import ReactDOM from 'react-dom';
const stats = [
	{ id: 1, name: 'Transactions every 24 hours', value: '44 million' },
	{ id: 2, name: 'Assets under holding', value: '$119 trillion' },
	{ id: 3, name: 'New users annually', value: '46,000' },
  ]
export default class extends React.Component {

	render() {
		return (
            <div>

<div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
						<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
			<h1 className="text-2xl font-bold text-gray-900">Hola, Tailwind en Liferay!</h1>
			<p className="text-gray-600">Este es un módulo JS con Tailwind.</p>
		</div>
				<h1>Hello world, eso perros</h1>
				<div>
        	        <span className="tag">Portlet Namespace:</span> 
					<span className="value">{this.props.portletNamespace}</span>
				</div>
				<div>
    	            <span className="tag">Context Path:</span>
					<span className="value">{this.props.contextPath}</span>
				</div>
				<div>
	                <span className="tag">Portlet Element Id:</span>
					<span className="value">{this.props.portletElementId}</span>
				</div>
				
			</div>
		);
	}	
}