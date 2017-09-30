
import { Cmp5810Component } from './cmp';
describe('Cmp5810Component', () => {
  it('should add', () => {
    expect(new Cmp5810Component().add5810(1)).toBe(5811);
  });
});