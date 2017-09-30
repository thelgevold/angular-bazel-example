
import { Cmp5675Component } from './cmp';
describe('Cmp5675Component', () => {
  it('should add', () => {
    expect(new Cmp5675Component().add5675(1)).toBe(5676);
  });
});