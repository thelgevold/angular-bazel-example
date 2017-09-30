
import { Cmp8005Component } from './cmp';
describe('Cmp8005Component', () => {
  it('should add', () => {
    expect(new Cmp8005Component().add8005(1)).toBe(8006);
  });
});