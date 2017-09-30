
import { Cmp9642Component } from './cmp';
describe('Cmp9642Component', () => {
  it('should add', () => {
    expect(new Cmp9642Component().add9642(1)).toBe(9643);
  });
});