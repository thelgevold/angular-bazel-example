
import { Cmp8892Component } from './cmp';
describe('Cmp8892Component', () => {
  it('should add', () => {
    expect(new Cmp8892Component().add8892(1)).toBe(8893);
  });
});