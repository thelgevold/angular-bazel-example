
import { Cmp6642Component } from './cmp';
describe('Cmp6642Component', () => {
  it('should add', () => {
    expect(new Cmp6642Component().add6642(1)).toBe(6643);
  });
});