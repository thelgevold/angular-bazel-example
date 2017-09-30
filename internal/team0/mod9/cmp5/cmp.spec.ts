
import { Cmp8095Component } from './cmp';
describe('Cmp8095Component', () => {
  it('should add', () => {
    expect(new Cmp8095Component().add8095(1)).toBe(8096);
  });
});