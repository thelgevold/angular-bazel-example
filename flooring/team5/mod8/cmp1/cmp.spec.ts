
import { Cmp5581Component } from './cmp';
describe('Cmp5581Component', () => {
  it('should add', () => {
    expect(new Cmp5581Component().add5581(1)).toBe(5582);
  });
});