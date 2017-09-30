
import { Cmp5912Component } from './cmp';
describe('Cmp5912Component', () => {
  it('should add', () => {
    expect(new Cmp5912Component().add5912(1)).toBe(5913);
  });
});