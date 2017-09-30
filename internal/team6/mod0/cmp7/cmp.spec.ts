
import { Cmp8607Component } from './cmp';
describe('Cmp8607Component', () => {
  it('should add', () => {
    expect(new Cmp8607Component().add8607(1)).toBe(8608);
  });
});