
import { Cmp5032Component } from './cmp';
describe('Cmp5032Component', () => {
  it('should add', () => {
    expect(new Cmp5032Component().add5032(1)).toBe(5033);
  });
});