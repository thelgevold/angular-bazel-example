
import { Cmp8123Component } from './cmp';
describe('Cmp8123Component', () => {
  it('should add', () => {
    expect(new Cmp8123Component().add8123(1)).toBe(8124);
  });
});