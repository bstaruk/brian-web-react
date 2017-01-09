import React from 'react';

class BTCPriceSourcesComponent extends React.Component {
  render() {
    return (
      <div className="btc-price--sources">
        <ul>
          {this.props.sourceData.map((source, index) =>
            <li key={index}>
              <button
                onClick={() => this.props.handleSourceChange(source)}
                className={this.props.activeSource == source.id ? 'active' : null}>
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
