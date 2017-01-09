import React from 'react';

class BTCPriceSourcesComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.activeSource !== nextProps.activeSource;
  }

  render() {
    return (
      <div className="btc-price--sources">
        <ul>
          {this.props.sourceData.map((source, index) =>
            <li key={index}>
              <button
                onClick={() => this.props.handleSourceChange(source)}
                className={this.props.activeSource == source.id ? 'btn btn--active' : 'btn'}>
                {source.label}
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

BTCPriceSourcesComponent.propTypes = {
  activeSource: React.PropTypes.string,
  handleSourceChange: React.PropTypes.func.isRequired,
  sourceData: React.PropTypes.array.isRequired
};

BTCPriceSourcesComponent.defaultProps = {};

export default BTCPriceSourcesComponent;
