
import { Cmp8456Component } from './cmp';
describe('Cmp8456Component', () => {
  it('should add', () => {
    expect(new Cmp8456Component().add8456(1)).toBe(8457);
  });
});