
import { Cmp5254Component } from './cmp';
describe('Cmp5254Component', () => {
  it('should add', () => {
    expect(new Cmp5254Component().add5254(1)).toBe(5255);
  });
});