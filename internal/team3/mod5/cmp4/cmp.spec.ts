
import { Cmp8354Component } from './cmp';
describe('Cmp8354Component', () => {
  it('should add', () => {
    expect(new Cmp8354Component().add8354(1)).toBe(8355);
  });
});