
import { Cmp1650Component } from './cmp';
describe('Cmp1650Component', () => {
  it('should add', () => {
    expect(new Cmp1650Component().add1650(1)).toBe(1651);
  });
});