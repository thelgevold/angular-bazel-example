
import { Cmp8012Component } from './cmp';
describe('Cmp8012Component', () => {
  it('should add', () => {
    expect(new Cmp8012Component().add8012(1)).toBe(8013);
  });
});