import * as React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';

import Counter from './components/counter';

render(<Counter />, document.getElementById('main'));