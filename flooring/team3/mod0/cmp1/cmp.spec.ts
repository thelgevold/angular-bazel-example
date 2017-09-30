
import { Cmp5301Component } from './cmp';
describe('Cmp5301Component', () => {
  it('should add', () => {
    expect(new Cmp5301Component().add5301(1)).toBe(5302);
  });
});