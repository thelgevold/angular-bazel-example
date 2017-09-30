
import { Cmp8215Component } from './cmp';
describe('Cmp8215Component', () => {
  it('should add', () => {
    expect(new Cmp8215Component().add8215(1)).toBe(8216);
  });
});