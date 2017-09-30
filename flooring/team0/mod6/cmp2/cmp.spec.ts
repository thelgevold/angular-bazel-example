
import { Cmp5062Component } from './cmp';
describe('Cmp5062Component', () => {
  it('should add', () => {
    expect(new Cmp5062Component().add5062(1)).toBe(5063);
  });
});