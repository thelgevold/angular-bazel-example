
import { Cmp5220Component } from './cmp';
describe('Cmp5220Component', () => {
  it('should add', () => {
    expect(new Cmp5220Component().add5220(1)).toBe(5221);
  });
});