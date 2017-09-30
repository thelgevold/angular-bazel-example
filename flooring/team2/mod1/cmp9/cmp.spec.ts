
import { Cmp5219Component } from './cmp';
describe('Cmp5219Component', () => {
  it('should add', () => {
    expect(new Cmp5219Component().add5219(1)).toBe(5220);
  });
});