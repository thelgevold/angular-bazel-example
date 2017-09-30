
import { Cmp8355Component } from './cmp';
describe('Cmp8355Component', () => {
  it('should add', () => {
    expect(new Cmp8355Component().add8355(1)).toBe(8356);
  });
});