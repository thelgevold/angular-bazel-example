
import { Cmp8058Component } from './cmp';
describe('Cmp8058Component', () => {
  it('should add', () => {
    expect(new Cmp8058Component().add8058(1)).toBe(8059);
  });
});