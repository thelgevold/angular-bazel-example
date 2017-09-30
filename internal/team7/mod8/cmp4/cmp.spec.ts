
import { Cmp8784Component } from './cmp';
describe('Cmp8784Component', () => {
  it('should add', () => {
    expect(new Cmp8784Component().add8784(1)).toBe(8785);
  });
});