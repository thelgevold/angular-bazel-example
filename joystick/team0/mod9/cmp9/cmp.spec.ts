
import { Cmp9099Component } from './cmp';
describe('Cmp9099Component', () => {
  it('should add', () => {
    expect(new Cmp9099Component().add9099(1)).toBe(9100);
  });
});