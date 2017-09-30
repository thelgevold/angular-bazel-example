
import { Cmp8806Component } from './cmp';
describe('Cmp8806Component', () => {
  it('should add', () => {
    expect(new Cmp8806Component().add8806(1)).toBe(8807);
  });
});