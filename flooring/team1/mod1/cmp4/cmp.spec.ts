
import { Cmp5114Component } from './cmp';
describe('Cmp5114Component', () => {
  it('should add', () => {
    expect(new Cmp5114Component().add5114(1)).toBe(5115);
  });
});