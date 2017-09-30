
import { Cmp8825Component } from './cmp';
describe('Cmp8825Component', () => {
  it('should add', () => {
    expect(new Cmp8825Component().add8825(1)).toBe(8826);
  });
});