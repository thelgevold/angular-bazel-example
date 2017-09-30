
import { Cmp8327Component } from './cmp';
describe('Cmp8327Component', () => {
  it('should add', () => {
    expect(new Cmp8327Component().add8327(1)).toBe(8328);
  });
});