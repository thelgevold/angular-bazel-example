
import { Cmp8195Component } from './cmp';
describe('Cmp8195Component', () => {
  it('should add', () => {
    expect(new Cmp8195Component().add8195(1)).toBe(8196);
  });
});