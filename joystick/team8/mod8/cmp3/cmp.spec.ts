
import { Cmp9883Component } from './cmp';
describe('Cmp9883Component', () => {
  it('should add', () => {
    expect(new Cmp9883Component().add9883(1)).toBe(9884);
  });
});