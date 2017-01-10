import React from 'react';
import {Link} from 'react-router';
import Content from '../../Content/Content';

class ExperimentsComponent extends React.Component {
  render() {
    const experimentLinks = [
      {
        'prefix': 'Experiment One',
        'anchor': 'Poké Table',
        'attr': {
          'to': '/experiments/poketable'
        }
      },
      {
        'prefix': 'Experiment Two',
        'anchor': 'BTC Price Checker',
        'attr': {
          'to': '/experiments/btcprice'
        }
      },
      {
        'prefix': 'Experiment Three',
        'anchor': 'Password Generator',
        'attr': {
          'to': '/experiments/passgen'
        }
      }
    ];
    return (
      <Content>
        <h2 className="content-title">Experiments</h2>
        <p>Variety is the spice of life! Exploration is a prerequisite for happiness.</p>
        <ul>
          {experimentLinks.map((link, index) =>
            <li key={index}>
              {link.prefix + ':'} <Link {...link.attr}>{link.anchor}</Link>
            </li>
          )}
        </ul>
      </Content>
    );
  }
}

ExperimentsComponent.defaultProps = {
};

export default ExperimentsComponent;
