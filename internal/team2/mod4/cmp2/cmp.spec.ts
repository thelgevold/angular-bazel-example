
import { Cmp8242Component } from './cmp';
describe('Cmp8242Component', () => {
  it('should add', () => {
    expect(new Cmp8242Component().add8242(1)).toBe(8243);
  });
});