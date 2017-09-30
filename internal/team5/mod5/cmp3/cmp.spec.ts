
import { Cmp8553Component } from './cmp';
describe('Cmp8553Component', () => {
  it('should add', () => {
    expect(new Cmp8553Component().add8553(1)).toBe(8554);
  });
});