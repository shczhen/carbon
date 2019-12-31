/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import MultiSelect from './MultiSelect';
import FilterableMultiSelect from './FilterableMultiSelect';
import NestedFilterableMultiselect from './NestedFilterableMultiselect.js';

FilterableMultiSelect.displayName = 'MultiSelect.Filterable';
MultiSelect.Filterable = FilterableMultiSelect;
MultiSelect.NestedFilterableMultiselect = NestedFilterableMultiselect;

export default MultiSelect;
