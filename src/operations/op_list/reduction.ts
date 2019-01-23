import {OpMapper} from '../types';

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

export const json: OpMapper[] = [
  {
    'tfOpName': 'Max',
    'category': 'reduction',
    'params': [
      {inputMapper: {'start': 0}, 'name': 'x', 'type': 'tensor'},
      {inputMapper: {'start': 1}, 'name': 'axis', 'type': 'number[]'}, {
        attrMapper: {'tfName': 'keep_dims'},
        'name': 'keepDims',
        'type': 'bool'
      }
    ]
  },
  {
    'tfOpName': 'Mean',
    'category': 'reduction',
    'params': [
      {inputMapper: {'start': 0}, 'name': 'x', 'type': 'tensor'},
      {inputMapper: {'start': 1}, 'name': 'axis', 'type': 'number[]'}, {
        attrMapper: {'tfName': 'keep_dims'},
        'name': 'keepDims',
        'type': 'bool'
      }
    ]
  },
  {
    'tfOpName': 'Min',
    'category': 'reduction',
    'params': [
      {inputMapper: {'start': 0}, 'name': 'x', 'type': 'tensor'},
      {inputMapper: {'start': 1}, 'name': 'axis', 'type': 'number[]'}, {
        attrMapper: {'tfName': 'keep_dims'},
        'name': 'keepDims',
        'type': 'bool'
      }
    ]
  },
  {
    'tfOpName': 'Sum',
    'category': 'reduction',
    'params': [
      {inputMapper: {'start': 0}, 'name': 'x', 'type': 'tensor'},
      {inputMapper: {'start': 1}, 'name': 'axis', 'type': 'number[]'}, {
        attrMapper: {'tfName': 'keep_dims'},
        'name': 'keepDims',
        'type': 'bool'
      }
    ]
  },
  {
    'tfOpName': 'All',
    'category': 'reduction',
    'params': [
      {inputMapper: {'start': 0}, 'name': 'x', 'type': 'tensor'},
      {inputMapper: {'start': 1}, 'name': 'axis', 'type': 'number[]'}, {
        attrMapper: {'tfName': 'keep_dims'},
        'name': 'keepDims',
        'type': 'bool'
      }
    ]
  },
  {
    'tfOpName': 'Any',
    'category': 'reduction',
    'params': [
      {inputMapper: {'start': 0}, 'name': 'x', 'type': 'tensor'},
      {inputMapper: {'start': 1}, 'name': 'axis', 'type': 'number[]'}, {
        attrMapper: {'tfName': 'keep_dims'},
        'name': 'keepDims',
        'type': 'bool'
      }
    ]
  },
  {
    'tfOpName': 'ArgMax',
    'category': 'reduction',
    'params': [
      {inputMapper: {'start': 0}, 'name': 'x', 'type': 'tensor'},
      {inputMapper: {'start': 1}, 'name': 'axis', 'type': 'number'}
    ]
  },
  {
    'tfOpName': 'ArgMin',
    'category': 'reduction',
    'params': [
      {inputMapper: {'start': 0}, 'name': 'x', 'type': 'tensor'},
      {inputMapper: {'start': 1}, 'name': 'axis', 'type': 'number'}
    ]
  },
  {
    'tfOpName': 'Prod',
    'category': 'reduction',
    'params': [
      {inputMapper: {'start': 0}, 'name': 'x', 'type': 'tensor'},
      {inputMapper: {'start': 1}, 'name': 'axis', 'type': 'number[]'}, {
        attrMapper: {'tfName': 'keep_dims'},
        'name': 'keepDims',
        'type': 'bool'
      }
    ]
  }
];
