
import { Cmp8433Component } from './cmp';
describe('Cmp8433Component', () => {
  it('should add', () => {
    expect(new Cmp8433Component().add8433(1)).toBe(8434);
  });
});