
import { Cmp8935Component } from './cmp';
describe('Cmp8935Component', () => {
  it('should add', () => {
    expect(new Cmp8935Component().add8935(1)).toBe(8936);
  });
});