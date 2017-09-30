
import { Cmp8627Component } from './cmp';
describe('Cmp8627Component', () => {
  it('should add', () => {
    expect(new Cmp8627Component().add8627(1)).toBe(8628);
  });
});