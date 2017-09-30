
import { Cmp8555Component } from './cmp';
describe('Cmp8555Component', () => {
  it('should add', () => {
    expect(new Cmp8555Component().add8555(1)).toBe(8556);
  });
});