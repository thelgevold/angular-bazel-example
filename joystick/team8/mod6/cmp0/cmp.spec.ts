
import { Cmp9860Component } from './cmp';
describe('Cmp9860Component', () => {
  it('should add', () => {
    expect(new Cmp9860Component().add9860(1)).toBe(9861);
  });
});