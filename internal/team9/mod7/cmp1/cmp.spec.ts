
import { Cmp8971Component } from './cmp';
describe('Cmp8971Component', () => {
  it('should add', () => {
    expect(new Cmp8971Component().add8971(1)).toBe(8972);
  });
});