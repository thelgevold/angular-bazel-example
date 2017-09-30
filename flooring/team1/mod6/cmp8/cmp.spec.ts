
import { Cmp5168Component } from './cmp';
describe('Cmp5168Component', () => {
  it('should add', () => {
    expect(new Cmp5168Component().add5168(1)).toBe(5169);
  });
});