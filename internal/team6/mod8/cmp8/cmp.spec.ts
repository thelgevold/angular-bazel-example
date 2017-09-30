
import { Cmp8688Component } from './cmp';
describe('Cmp8688Component', () => {
  it('should add', () => {
    expect(new Cmp8688Component().add8688(1)).toBe(8689);
  });
});