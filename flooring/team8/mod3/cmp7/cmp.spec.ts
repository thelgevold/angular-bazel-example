
import { Cmp5837Component } from './cmp';
describe('Cmp5837Component', () => {
  it('should add', () => {
    expect(new Cmp5837Component().add5837(1)).toBe(5838);
  });
});