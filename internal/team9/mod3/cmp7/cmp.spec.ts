
import { Cmp8937Component } from './cmp';
describe('Cmp8937Component', () => {
  it('should add', () => {
    expect(new Cmp8937Component().add8937(1)).toBe(8938);
  });
});