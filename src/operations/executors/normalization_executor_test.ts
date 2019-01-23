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
import * as tfc from '@tensorflow/tfjs-core';

import {ExecutionContext} from '../../executor/execution_context';
import * as normalization from '../op_list/normalization';
import {Node, OpMapper} from '../types';

import {executeOp} from './normalization_executor';
// tslint:disable-next-line:max-line-length
import {createNumberAttr, createNumericArrayAttrFromIndex, createTensorAttr, validateParam} from './test_helper';

describe('normalization', () => {
  let node: Node;
  const input1 = [tfc.scalar(1)];
  const context = new ExecutionContext({}, {});

  beforeEach(() => {
    node = {
      name: 'test',
      op: '',
      category: 'normalization',
      inputNames: ['input1'],
      inputs: [],
      params: {x: createTensorAttr(0)},
      children: []
    };
  });

  describe('executeOp', () => {
    describe('FusedBatchNorm', () => {
      it('should call tfc.batchNormalization', () => {
        spyOn(tfc, 'batchNormalization');
        node.op = 'FusedBatchNorm';
        node.params.scale = createTensorAttr(1);
        node.params.offset = createTensorAttr(2);
        node.params.mean = createTensorAttr(3);
        node.params.variance = createTensorAttr(4);
        node.params.epsilon = createNumberAttr(5);
        node.inputNames = ['input1', 'input2', 'input3', 'input4', 'input5'];
        const input2 = [tfc.scalar(1)];
        const input3 = [tfc.scalar(2)];
        const input4 = [tfc.scalar(3)];
        const input5 = [tfc.scalar(4)];
        executeOp(node, {input1, input2, input3, input4, input5}, context);

        expect(tfc.batchNormalization)
            .toHaveBeenCalledWith(
                input1[0], input4[0], input5[0], 5, input2[0], input3[0]);
      });
    });
    describe('FusedBatchNormV2', () => {
      it('should call tfc.batchNormalization', () => {
        spyOn(tfc, 'batchNormalization');
        node.op = 'FusedBatchNormV2';
        node.params.scale = createTensorAttr(1);
        node.params.offset = createTensorAttr(2);
        node.params.mean = createTensorAttr(3);
        node.params.variance = createTensorAttr(4);
        node.params.epsilon = createNumberAttr(5);
        node.inputNames = ['input1', 'input2', 'input3', 'input4', 'input5'];
        const input2 = [tfc.scalar(1)];
        const input3 = [tfc.scalar(2)];
        const input4 = [tfc.scalar(3)];
        const input5 = [tfc.scalar(4)];
        executeOp(node, {input1, input2, input3, input4, input5}, context);

        expect(tfc.batchNormalization)
            .toHaveBeenCalledWith(
                input1[0], input4[0], input5[0], 5, input2[0], input3[0]);
      });
    });
    describe('LRN', () => {
      it('should call tfc.localResponseNormalization', () => {
        spyOn(tfc, 'localResponseNormalization');
        node.op = 'LRN';
        node.params.radius = createNumberAttr(1);
        node.params.bias = createNumberAttr(2);
        node.params.alpha = createNumberAttr(3);
        node.params.beta = createNumberAttr(4);

        executeOp(node, {input1}, context);

        expect(tfc.localResponseNormalization)
            .toHaveBeenCalledWith(input1[0], 1, 2, 3, 4);
      });
      it('should match json def', () => {
        node.op = 'LRN';
        node.params.radius = createNumberAttr(1);
        node.params.bias = createNumberAttr(2);
        node.params.alpha = createNumberAttr(3);
        node.params.beta = createNumberAttr(4);

        expect(validateParam(node, normalization.json as OpMapper[]))
            .toBeTruthy();
      });
    });

    describe('Softmax', () => {
      it('should call tfc.softmax', () => {
        spyOn(tfc, 'softmax');
        node.op = 'Softmax';

        executeOp(node, {input1}, context);

        expect(tfc.softmax).toHaveBeenCalledWith(input1[0]);
      });
      it('should match json def', () => {
        node.op = 'Softmax';

        expect(validateParam(node, normalization.json as OpMapper[]))
            .toBeTruthy();
      });
    });

    describe('LogSoftmax', () => {
      it('should call tfc.logSoftmax', () => {
        spyOn(tfc, 'logSoftmax');
        node.op = 'LogSoftmax';

        executeOp(node, {input1}, context);

        expect(tfc.logSoftmax).toHaveBeenCalledWith(input1[0]);
      });
      it('should match json def', () => {
        node.op = 'LogSoftmax';

        expect(validateParam(node, normalization.json as OpMapper[]))
            .toBeTruthy();
      });
    });
    describe('SparseToDense', () => {
      it('should call tfc.sparseToDense', () => {
        spyOn(tfc, 'sparseToDense');
        node.op = 'SparseToDense';
        node.params.sparseIndices = createTensorAttr(0);
        node.params.outputShape = createNumericArrayAttrFromIndex(1);
        node.params.sparseValues = createTensorAttr(2);
        node.params.defaultValue = createTensorAttr(3);
        node.inputNames = ['input1', 'input2', 'input3', 'input4'];
        const input2 = [tfc.scalar(1)];
        const input3 = [tfc.scalar(2)];
        const input4 = [tfc.scalar(3)];
        executeOp(node, {input1, input2, input3, input4}, context);

        expect(tfc.sparseToDense)
            .toHaveBeenCalledWith(input1[0], [1], input3[0], input4[0]);
      });
      it('should match json def', () => {
        node.op = 'SparseToDense';
        delete node.params.x;
        node.params.sparseIndices = createTensorAttr(0);
        node.params.outputShape = createNumericArrayAttrFromIndex(1);
        node.params.sparseValues = createTensorAttr(2);
        node.params.defaultValue = createTensorAttr(3);

        expect(validateParam(node, normalization.json as OpMapper[]))
            .toBeTruthy();
      });
    });
  });
});
