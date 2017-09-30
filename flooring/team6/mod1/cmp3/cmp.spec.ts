
import { Cmp5613Component } from './cmp';
describe('Cmp5613Component', () => {
  it('should add', () => {
    expect(new Cmp5613Component().add5613(1)).toBe(5614);
  });
});