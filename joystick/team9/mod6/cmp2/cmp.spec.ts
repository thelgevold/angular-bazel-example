
import { Cmp9962Component } from './cmp';
describe('Cmp9962Component', () => {
  it('should add', () => {
    expect(new Cmp9962Component().add9962(1)).toBe(9963);
  });
});