
import { Cmp8649Component } from './cmp';
describe('Cmp8649Component', () => {
  it('should add', () => {
    expect(new Cmp8649Component().add8649(1)).toBe(8650);
  });
});