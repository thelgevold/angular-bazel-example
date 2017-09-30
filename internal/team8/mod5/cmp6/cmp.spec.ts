
import { Cmp8856Component } from './cmp';
describe('Cmp8856Component', () => {
  it('should add', () => {
    expect(new Cmp8856Component().add8856(1)).toBe(8857);
  });
});