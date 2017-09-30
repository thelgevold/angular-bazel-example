
import { Cmp9592Component } from './cmp';
describe('Cmp9592Component', () => {
  it('should add', () => {
    expect(new Cmp9592Component().add9592(1)).toBe(9593);
  });
});