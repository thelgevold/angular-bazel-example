
import { Cmp8883Component } from './cmp';
describe('Cmp8883Component', () => {
  it('should add', () => {
    expect(new Cmp8883Component().add8883(1)).toBe(8884);
  });
});