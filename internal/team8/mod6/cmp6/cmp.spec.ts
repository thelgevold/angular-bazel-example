
import { Cmp8866Component } from './cmp';
describe('Cmp8866Component', () => {
  it('should add', () => {
    expect(new Cmp8866Component().add8866(1)).toBe(8867);
  });
});