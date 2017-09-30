
import { Cmp5870Component } from './cmp';
describe('Cmp5870Component', () => {
  it('should add', () => {
    expect(new Cmp5870Component().add5870(1)).toBe(5871);
  });
});