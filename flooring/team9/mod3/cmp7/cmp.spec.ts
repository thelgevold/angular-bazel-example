
import { Cmp5937Component } from './cmp';
describe('Cmp5937Component', () => {
  it('should add', () => {
    expect(new Cmp5937Component().add5937(1)).toBe(5938);
  });
});