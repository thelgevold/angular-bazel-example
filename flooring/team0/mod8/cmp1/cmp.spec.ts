
import { Cmp5081Component } from './cmp';
describe('Cmp5081Component', () => {
  it('should add', () => {
    expect(new Cmp5081Component().add5081(1)).toBe(5082);
  });
});