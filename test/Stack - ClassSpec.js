/**
* data-structures
*
* Copyright © 2016 Neelesh Roy. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import { expect } from 'chai';
import Stack from '../src/Stack/Stack';

describe('Stack - Class and Methods', () => {
  
  describe('Stack.properties', () => {
    it('should have the datastore and top', () => {
      const stack = new Stack();
      expect(stack).to.have.property('datastore');
      expect(stack).to.have.property('top');
      expect(typeof(stack.datastore)).to.eql('object');
    });
  });
  
  describe('Stack.functions', () => {
    it('push() - Should save the elements properly', () => {
      const stack = new Stack();
      stack.push(2);
      stack.push(3);

      expect(stack.datastore).to.eql([2, 3]);
      expect(stack.top).to.eql(2);
    });

    it('push() - Should save multiple variable types properly', () => {
      const stack = new Stack();
      stack.push(2);
      stack.push(3.2);
      stack.push('foo');
      stack.push({'foo': 'bar'});

      expect(stack.datastore).to.eql([2, 3.2, "foo", { foo: "bar" }]);
      expect(stack.top).to.eql(4);
    });

    it('pop() - Should remove the elements properly', () => {
      const stack = new Stack();
      stack.push(2);
      stack.push(3);
      stack.push(4);
      const out = stack.pop();

      expect(stack.datastore).to.eql([2, 3]);
      expect(out).to.eql(3);
      expect(stack.top).to.eql(2);
    });

    it('pop() - Should not remove any element', () => {
      const stack = new Stack();

      stack.pop();

      expect(stack.datastore).to.eql([]);
      expect(stack.top).to.eql(0);
    });

    it('peek() - Should return the top most element', () => {
      const stack = new Stack();
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.pop();
      const out = stack.peek();

      expect(out).to.eql(3);
      expect(stack.datastore).to.eql([2, 3])
    });
  });
});
