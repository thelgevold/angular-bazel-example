
import { Cmp8065Component } from './cmp';
describe('Cmp8065Component', () => {
  it('should add', () => {
    expect(new Cmp8065Component().add8065(1)).toBe(8066);
  });
});