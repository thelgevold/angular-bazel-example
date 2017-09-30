
import { Cmp8272Component } from './cmp';
describe('Cmp8272Component', () => {
  it('should add', () => {
    expect(new Cmp8272Component().add8272(1)).toBe(8273);
  });
});